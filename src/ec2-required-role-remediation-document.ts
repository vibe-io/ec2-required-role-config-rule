import { ArnFormat, Resource, ResourceProps } from 'aws-cdk-lib';
import { IGrantable, IRole, PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { CfnDocument } from 'aws-cdk-lib/aws-ssm';
import { IConstruct } from 'constructs';


export interface GrantRemediationExecuteOptions {
  readonly allowedEc2Roles?: IRole[];
}

export interface Ec2RequiredRoleRemediationDocumentProps extends ResourceProps {}

export class Ec2RequiredRoleRemediationDocument extends Resource {
  public readonly automationDefinitionArn: string;
  public readonly documentArn: string;
  public readonly documentName: string;


  public constructor(scope: IConstruct, id: string, props: Ec2RequiredRoleRemediationDocumentProps = {}) {
    super(scope, id, props);

    // The reference to the Stack ID in the description is required because of
    // bad validation by the CDK.
    const document = new CfnDocument(this, 'Resource', {
      content: this.stack.toYamlString({
        schemaVersion: '0.3',
        description: [
          'Attaches a specified role to an EC2 instance. This document is',
          'used by AWS Config when an EC2 instance was found to have been',
          'launched with no IAM Role associated. Controlled by CloudFormation',
          `Stack ${this.stack.stackId}.`,
        ].join(' '),
        assumeRole: '{{ AutomationAssumeRole }}',
        parameters: {
          AutomationAssumeRole: {
            default: '',
            description: [
              'Allows Automation to perform actions on your behalf',
            ].join(' '),
            type: 'String',
          },
          InstanceId: {
            description: [
              'The ID of an EC2 instance to ensure permissions for',
            ].join(' '),
            type: 'AWS::EC2::Instance::Id',
          },
          InstanceProfileName: {
            description: [
              'Name of the IAM Instance Profile to associate with the',
              'instance.',
            ].join(' '),
            type: 'String',
          },
        },
        mainSteps: [{
          name: 'AssociateInstanceProfile',
          action: 'aws:executeAwsApi',
          isEnd: true,
          inputs: {
            Api: 'AssociateIamInstanceProfile',
            Service: 'ec2',
            IamInstanceProfile: {
              Name: '{{ InstanceProfileName }}',
            },
            InstanceId: '{{ InstanceId }}',
          },
        }],
      }),
      documentFormat: 'YAML',
      documentType: 'Automation',
    });

    this.automationDefinitionArn = this.stack.formatArn({
      arnFormat: ArnFormat.SLASH_RESOURCE_NAME,
      resource: 'automation-definition',
      resourceName: document.ref,
      service: 'ssm',
    });
    this.documentArn = this.stack.formatArn({
      arnFormat: ArnFormat.SLASH_RESOURCE_NAME,
      resource: 'document',
      resourceName: document.ref,
      service: 'ssm',
    });
    this.documentName = document.ref;
  }

  public automationDefinitionArnForVersion(version: string): string {
    return `${this.automationDefinitionArn}:${version}`;
  }

  public grantExecute(principal: IGrantable, options: GrantRemediationExecuteOptions = {}): void {
    const defaultPassRoles = [
      this.stack.formatArn({
        arnFormat: ArnFormat.SLASH_RESOURCE_NAME,
        resource: 'instance',
        resourceName: '*',
        service: 'ec2',
      }),
    ];

    principal.grantPrincipal.addToPrincipalPolicy(new PolicyStatement({
      actions: [
        'ec2:AssociateIamInstanceProfile',
      ],
      resources: [
        this.stack.formatArn({
          arnFormat: ArnFormat.SLASH_RESOURCE_NAME,
          resource: 'instance',
          resourceName: '*',
          service: 'ec2',
        }),
      ],
    }));

    principal.grantPrincipal.addToPrincipalPolicy(new PolicyStatement({
      actions: [
        'iam:PassRole',
      ],
      resources: options.allowedEc2Roles?.map((x) => {
        return x.roleArn;
      }) ?? defaultPassRoles,
    }));
  }
}