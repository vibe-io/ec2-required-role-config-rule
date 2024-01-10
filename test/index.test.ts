import { Stack } from 'aws-cdk-lib';
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