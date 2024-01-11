import { ArnFormat, CfnResource, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Ec2RequiredRoleConfigRule } from '../src';


test('template should contain default set of resources', () => {
  const stack = new Stack();
  new Ec2RequiredRoleConfigRule(stack, 'rule');

  const template = Template.fromStack(stack);
  template.resourceCountIs('AWS::Config::ConfigRule', 1);
  template.resourceCountIs('AWS::Config::RemediationConfiguration', 1);
  template.resourceCountIs('AWS::Lambda::Function', 1);
  template.resourceCountIs('AWS::SSM::Document', 1);
});

test('automatic remediation should be reflected in configuration', () => {
  const stack = new Stack();
  new Ec2RequiredRoleConfigRule(stack, 'rule', {
    remediation: {
      automatic: true,
    },
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties('AWS::Config::RemediationConfiguration', {
    Automatic: true,
  });
});

test('automatic remediation should have required properties', () => {
  const stack = new Stack();
  new Ec2RequiredRoleConfigRule(stack, 'rule', {
    remediation: {
      automatic: true,
    },
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties('AWS::Config::RemediationConfiguration', {
    MaximumAutomaticAttempts: 5,
    RetryAttemptSeconds: 60,
  });
});

test('automatic remediation should properly configure permissions', () => {
  const stack = new Stack();
  new Ec2RequiredRoleConfigRule(stack, 'rule', {
    remediation: {
      automatic: true,
    },
  });

  const template = Template.fromStack(stack);

  const automationRole = getRemediationAutomationRole(stack);
  const defaultEc2Role = getDefaultEc2Role(stack);

  template.hasResourceProperties('AWS::IAM::Role', {
    AssumeRolePolicyDocument: {
      Statement: [{
        Action: 'sts:AssumeRole',
        Effect: 'Allow',
        Principal: {
          Service: 'ssm.amazonaws.com',
        },
      }],
    },
    Path: '/service-role/',
  });

  template.hasResourceProperties('AWS::IAM::Policy', {
    PolicyDocument: {
      Statement: [
        {
          Action: 'ec2:AssociateIamInstanceProfile',
          Effect: 'Allow',
          Resource: stack.resolve(stack.formatArn({
            arnFormat: ArnFormat.SLASH_RESOURCE_NAME,
            resource: 'instance',
            resourceName: '*',
            service: 'ec2',
          })),
        },
        {
          Action: 'iam:PassRole',
          Effect: 'Allow',
          Resource: stack.resolve(defaultEc2Role.getAtt('Arn')),
        },
      ],
    },
    Roles: [
      stack.resolve(automationRole.ref),
    ],
  });

  template.hasResourceProperties('AWS::Config::RemediationConfiguration', {
    Parameters: {
      AutomationAssumeRole: {
        StaticValue: {
          Values: [
            stack.resolve(automationRole.getAtt('Arn')),
          ],
        },
      },
    },
  });
});

function getRemediationAutomationRole(stack: Stack): CfnResource {
  const rule = stack.node.tryFindChild('rule');
  const remediation = rule?.node.tryFindChild('remediation');
  const role = remediation?.node.tryFindChild('automation-role');
  const resource = role?.node.defaultChild;

  expect(CfnResource.isCfnResource(resource)).toBe(true);
  return resource as CfnResource;
}

function getDefaultEc2Role(stack: Stack): CfnResource {
  const rule = stack.node.findChild('rule');
  const role = rule.node.findChild('default-ec2-role');
  const resource = role.node.defaultChild;

  expect(CfnResource.isCfnResource(resource)).toBe(true);
  return resource as CfnResource;
}