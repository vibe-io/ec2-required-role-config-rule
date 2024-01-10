# EC2 Role Enforcement Config Rule

This is an L3 construct that deploys a custom config rule that enforces that all EC2 instances should have an IAM Role attached.

This is most beneficial when used along with the included redediation which allows you to automatically associate a default role with all non-complaint instances.

The default role being associated can be used to grant common, baseline permissions such as those needed to report inventory information to Systems Manager and allow for on instance security scans with Inspector.

## Install

**NodeJS**

```
npm install ec2-required-role-config-rule --save
```

## Usage

```
import { Ec2RequiredRoleConfigRule } from 'ec2-required-role-config-rule';

new Ec2RequiredRoleConfigRule(this, 'Ec2RequiredRoleConfigRule');
```

### Remediation

By default, remediation will be configured in manaul mode and will associate a default role that is automatically created.

Remediation can be set to be disabled (no remediation resources created) or automatic so that it will trigger any time a new instance is created.

A custom role can be passed for remediation to associate with non-complaint instances or permissions can be added to the default role that the construct creates automatically.

#### Disable Remediation

```
new Ec2RequiredRoleConfigRule(this, 'Ec2RequiredRoleConfigRule', {
    remediation: {
        enabled: false,
    },
});
```

#### Enable Automatic Remediation

```
new Ec2RequiredRoleConfigRule(this, 'Ec2RequiredRoleConfigRule', {
    remediation: {
        automatic: true,
    },
});
```

#### Using a Custom Role

```
const role = new Role(this, 'DefaultEc2Role', {
    assumedBy: new ServicePrincipal('ec2.amazonaws.com'),
});

new Ec2RequiredRoleConfigRule(this, 'Ec2RequiredRoleConfigRule', {
    remediation: {
        role: role,
    },
});
```

#### Adding Default Role Permissions

```
const policy = ManagedPolicy.fromAwsManagedPolicyName('AmazonSSMManagedEC2InstanceDefaultPolicy');

const rule = new Ec2RequiredRoleConfigRule(this, 'imported-rule');
rule.defaultRole?.addManagedPolicy(policy);
```