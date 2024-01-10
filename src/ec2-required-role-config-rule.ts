import { Resource, ResourceProps } from 'aws-cdk-lib';
import { CustomRule, ResourceType, RuleScope } from 'aws-cdk-lib/aws-config';
import { IInstanceProfile, IRole, InstanceProfile, Role, ServicePrincipal } from 'aws-cdk-lib/aws-iam';
import { IFunction } from 'aws-cdk-lib/aws-lambda';
import { IConstruct } from 'constructs';
import { Ec2RequiredRoleRemediationConfiguration } from './ec2-required-role-remediation-configuration';
import { EvaluationFunction } from './evaluation-function';


export interface Ec2RequiredRoleRemediationOptions {
  readonly automatic?: boolean;
  readonly enabled?: boolean;
  readonly role?: IRole;
}

export interface Ec2RequiredRoleConfigRuleProps extends ResourceProps {
  readonly remediation?: Ec2RequiredRoleRemediationOptions;
}

export class Ec2RequiredRoleConfigRule extends Resource {
  public static readonly DEFAULT_EC2_ROLE_DESCRIPTION: string = [
    'Provides a basic set of permissions that should be available to all EC2',
    'instances. If an instance is created with no role associated this role',
    'will be associated with it when AWS Config runs remediation.',
  ].join(' ');
  public static readonly DEFAULT_RULE_DESCRIPTION: string = [
    'Enforces that an EC2 instance has an IAM role attached. An instance is',
    'non-compliant if it has no IAM role associated with it.',
  ].join(' ');

  public readonly defaultRole?: IRole;
  public readonly defaultInstanceProfile?: IInstanceProfile;
  public readonly evaluationFunction: IFunction;
  public readonly rule: CustomRule;


  public constructor(scope: IConstruct, id: string, props: Ec2RequiredRoleConfigRuleProps = {}) {
    super(scope, id, props);

    this.evaluationFunction = new EvaluationFunction(this, 'evaluation-function');

    this.rule = new CustomRule(this, 'Resource', {
      description: Ec2RequiredRoleConfigRule.DEFAULT_RULE_DESCRIPTION,
      lambdaFunction: this.evaluationFunction,
      configurationChanges: true,
      ruleScope: RuleScope.fromResource(ResourceType.EC2_INSTANCE),
    });

    if (props.remediation?.enabled ?? true) {
      this.defaultRole = props.remediation?.role ?? new Role(this, 'default-ec2-role', {
        assumedBy: new ServicePrincipal('ec2.amazonaws.com'),
        description: Ec2RequiredRoleConfigRule.DEFAULT_EC2_ROLE_DESCRIPTION,
        path: '/service-role/',
      });

      this.defaultInstanceProfile = new InstanceProfile(this, 'default-ec2-instance-profile', {
        path: '/service-role/',
        role: this.defaultRole,
      });

      new Ec2RequiredRoleRemediationConfiguration(this, 'remediation', {
        automatic: props.remediation?.automatic,
        instanceProfile: this.defaultInstanceProfile,
        rule: this.rule,
      });
    }
  }
}