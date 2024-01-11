import { Duration, Resource, ResourceProps } from 'aws-cdk-lib';
import { CfnRemediationConfiguration, IRule } from 'aws-cdk-lib/aws-config';
import { IRole, InstanceProfile, Role, ServicePrincipal } from 'aws-cdk-lib/aws-iam';
import { IConstruct } from 'constructs';
import { Ec2RequiredRoleRemediationDocument } from './ec2-required-role-remediation-document';


export interface Ec2RequiredRoleRemediationConfigurationProps extends ResourceProps {
  readonly automatic?: boolean;
  readonly ec2DefaultRole: IRole;
  readonly maxAutomaticAttempts?: number;
  readonly retryPeriod?: Duration;
  readonly rule: IRule;
}

export class Ec2RequiredRoleRemediationConfiguration extends Resource {
  public static readonly DEFAULT_MAX_AUTOMATIC_ATTEMPTS: number = 5;
  public static readonly DEFAULT_RETRY_PERIOD: Duration = Duration.seconds(60);

  public readonly automatic: boolean;
  public readonly ec2DefaultRole: IRole;
  public readonly maxAutomaticAttempts: number;
  public readonly retryPeriod: Duration;
  public readonly rule: IRule;

  public readonly automationRole?: Role;


  public constructor(scope: IConstruct, id: string, props: Ec2RequiredRoleRemediationConfigurationProps) {
    super(scope, id, props);

    this.automatic = props.automatic ?? false;
    this.ec2DefaultRole = props.ec2DefaultRole;
    this.maxAutomaticAttempts = props.maxAutomaticAttempts ?? Ec2RequiredRoleRemediationConfiguration.DEFAULT_MAX_AUTOMATIC_ATTEMPTS;
    this.retryPeriod = props.retryPeriod ?? Ec2RequiredRoleRemediationConfiguration.DEFAULT_RETRY_PERIOD;
    this.rule = props.rule;

    const automation = new Ec2RequiredRoleRemediationDocument(this, 'automation');

    const instanceProfile = new InstanceProfile(this, 'default-ec2-instance-profile', {
      path: '/service-role/',
      role: this.ec2DefaultRole,
    });

    if (this.automatic) {
      this.automationRole = new Role(this, 'automation-role', {
        assumedBy: new ServicePrincipal('ssm.amazonaws.com'),
        path: '/service-role/',
      });

      automation.grantExecute(this.automationRole, {
        allowedEc2Roles: [
          this.ec2DefaultRole,
        ],
      });
    }

    new CfnRemediationConfiguration(this, 'Resource', {
      automatic: this.automatic,
      configRuleName: this.rule.configRuleName,
      maximumAutomaticAttempts: this.automatic ? this.maxAutomaticAttempts : undefined,
      parameters: {
        AutomationAssumeRole: {
          StaticValue: {
            Values: this.automationRole ? [this.automationRole.roleArn] : [],
          },
        },
        InstanceId: {
          ResourceValue: {
            Value: 'RESOURCE_ID',
          },
        },
        InstanceProfileName: {
          StaticValue: {
            Values: [
              instanceProfile.instanceProfileName,
            ],
          },
        },
      },
      resourceType: 'AWS::EC2::Instance',
      retryAttemptSeconds: this.automatic ? this.retryPeriod.toSeconds() : undefined,
      targetId: automation.documentName,
      targetType: 'SSM_DOCUMENT',
    });
  }
}