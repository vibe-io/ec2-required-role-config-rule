import { Resource, ResourceProps } from 'aws-cdk-lib';
import { CfnRemediationConfiguration, IRule } from 'aws-cdk-lib/aws-config';
import { IInstanceProfile } from 'aws-cdk-lib/aws-iam';
import { IConstruct } from 'constructs';
import { Ec2RequiredRoleRemediationDocument } from './ec2-required-role-remediation-document';


export interface Ec2RequiredRoleRemediationConfigurationProps extends ResourceProps {
  readonly instanceProfile: IInstanceProfile;
  readonly rule: IRule;
}

export class Ec2RequiredRoleRemediationConfiguration extends Resource {
  public readonly instanceProfile: IInstanceProfile;
  public readonly rule: IRule;


  public constructor(scope: IConstruct, id: string, props: Ec2RequiredRoleRemediationConfigurationProps) {
    super(scope, id, props);

    this.instanceProfile = props.instanceProfile;
    this.rule = props.rule;

    const automation = new Ec2RequiredRoleRemediationDocument(this, 'automation');

    new CfnRemediationConfiguration(this, 'Resource', {
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
      targetId: automation.documentName,
      targetType: 'SSM_DOCUMENT',
    });
  }
}