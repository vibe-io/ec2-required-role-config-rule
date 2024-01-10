import { Resource, ResourceProps } from 'aws-cdk-lib';
import { CfnRemediationConfiguration, IRule } from 'aws-cdk-lib/aws-config';
import { IInstanceProfile } from 'aws-cdk-lib/aws-iam';
import { IConstruct } from 'constructs';
import { Ec2RequiredRoleRemediationDocument } from './ec2-required-role-remediation-document';


export interface Ec2RequiredRoleRemediationConfigurationProps extends ResourceProps {
  readonly automatic?: boolean;
  readonly instanceProfile: IInstanceProfile;
  readonly rule: IRule;
}

export class Ec2RequiredRoleRemediationConfiguration extends Resource {
  public readonly automatic: boolean;
  public readonly instanceProfile: IInstanceProfile;
  public readonly rule: IRule;


  public constructor(scope: IConstruct, id: string, props: Ec2RequiredRoleRemediationConfigurationProps) {
    super(scope, id, props);

    this.automatic = props.automatic ?? false;
    this.instanceProfile = props.instanceProfile;
    this.rule = props.rule;

    const automation = new Ec2RequiredRoleRemediationDocument(this, 'automation');

    new CfnRemediationConfiguration(this, 'Resource', {
      automatic: this.automatic,
      configRuleName: this.rule.configRuleName,
      parameters: {
        AutomationAssumeRole: {
          StaticValue: {
            Values: [],
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
              this.instanceProfile.instanceProfileName,
            ],
          },
        },
      },
      resourceType: 'AWS::EC2::Instance',
      targetId: automation.documentName,
      targetType: 'SSM_DOCUMENT',
    });
  }
}