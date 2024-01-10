# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2RequiredRoleConfigRule <a name="Ec2RequiredRoleConfigRule" id="ec2-required-role-config-rule.Ec2RequiredRoleConfigRule"></a>

#### Initializers <a name="Initializers" id="ec2-required-role-config-rule.Ec2RequiredRoleConfigRule.Initializer"></a>

```typescript
import { Ec2RequiredRoleConfigRule } from 'ec2-required-role-config-rule'

new Ec2RequiredRoleConfigRule(scope: IConstruct, id: string, props?: Ec2RequiredRoleConfigRuleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#ec2-required-role-config-rule.Ec2RequiredRoleConfigRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.IConstruct</code> | *No description.* |
| <code><a href="#ec2-required-role-config-rule.Ec2RequiredRoleConfigRule.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#ec2-required-role-config-rule.Ec2RequiredRoleConfigRule.Initializer.parameter.props">props</a></code> | <code><a href="#ec2-required-role-config-rule.Ec2RequiredRoleConfigRuleProps">Ec2RequiredRoleConfigRuleProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="ec2-required-role-config-rule.Ec2RequiredRoleConfigRule.Initializer.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `id`<sup>Required</sup> <a name="id" id="ec2-required-role-config-rule.Ec2RequiredRoleConfigRule.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="ec2-required-role-config-rule.Ec2RequiredRoleConfigRule.Initializer.parameter.props"></a>

- *Type:* <a href="#ec2-required-role-config-rule.Ec2RequiredRoleConfigRuleProps">Ec2RequiredRoleConfigRuleProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#ec2-required-role-config-rule.Ec2RequiredRoleConfigRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#ec2-required-role-config-rule.Ec2RequiredRoleConfigRule.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="ec2-required-role-config-rule.Ec2RequiredRoleConfigRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="ec2-required-role-config-rule.Ec2RequiredRoleConfigRule.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="ec2-required-role-config-rule.Ec2RequiredRoleConfigRule.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#ec2-required-role-config-rule.Ec2RequiredRoleConfigRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#ec2-required-role-config-rule.Ec2RequiredRoleConfigRule.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#ec2-required-role-config-rule.Ec2RequiredRoleConfigRule.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="ec2-required-role-config-rule.Ec2RequiredRoleConfigRule.isConstruct"></a>

```typescript
import { Ec2RequiredRoleConfigRule } from 'ec2-required-role-config-rule'

Ec2RequiredRoleConfigRule.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="ec2-required-role-config-rule.Ec2RequiredRoleConfigRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="ec2-required-role-config-rule.Ec2RequiredRoleConfigRule.isOwnedResource"></a>

```typescript
import { Ec2RequiredRoleConfigRule } from 'ec2-required-role-config-rule'

Ec2RequiredRoleConfigRule.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="ec2-required-role-config-rule.Ec2RequiredRoleConfigRule.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="ec2-required-role-config-rule.Ec2RequiredRoleConfigRule.isResource"></a>

```typescript
import { Ec2RequiredRoleConfigRule } from 'ec2-required-role-config-rule'

Ec2RequiredRoleConfigRule.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="ec2-required-role-config-rule.Ec2RequiredRoleConfigRule.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#ec2-required-role-config-rule.Ec2RequiredRoleConfigRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#ec2-required-role-config-rule.Ec2RequiredRoleConfigRule.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#ec2-required-role-config-rule.Ec2RequiredRoleConfigRule.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#ec2-required-role-config-rule.Ec2RequiredRoleConfigRule.property.evaluationFunction">evaluationFunction</a></code> | <code>aws-cdk-lib.aws_lambda.IFunction</code> | *No description.* |
| <code><a href="#ec2-required-role-config-rule.Ec2RequiredRoleConfigRule.property.rule">rule</a></code> | <code>aws-cdk-lib.aws_config.CustomRule</code> | *No description.* |
| <code><a href="#ec2-required-role-config-rule.Ec2RequiredRoleConfigRule.property.defaultInstanceProfile">defaultInstanceProfile</a></code> | <code>aws-cdk-lib.aws_iam.IInstanceProfile</code> | *No description.* |
| <code><a href="#ec2-required-role-config-rule.Ec2RequiredRoleConfigRule.property.defaultRole">defaultRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="ec2-required-role-config-rule.Ec2RequiredRoleConfigRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="ec2-required-role-config-rule.Ec2RequiredRoleConfigRule.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="ec2-required-role-config-rule.Ec2RequiredRoleConfigRule.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `evaluationFunction`<sup>Required</sup> <a name="evaluationFunction" id="ec2-required-role-config-rule.Ec2RequiredRoleConfigRule.property.evaluationFunction"></a>

```typescript
public readonly evaluationFunction: IFunction;
```

- *Type:* aws-cdk-lib.aws_lambda.IFunction

---

##### `rule`<sup>Required</sup> <a name="rule" id="ec2-required-role-config-rule.Ec2RequiredRoleConfigRule.property.rule"></a>

```typescript
public readonly rule: CustomRule;
```

- *Type:* aws-cdk-lib.aws_config.CustomRule

---

##### `defaultInstanceProfile`<sup>Optional</sup> <a name="defaultInstanceProfile" id="ec2-required-role-config-rule.Ec2RequiredRoleConfigRule.property.defaultInstanceProfile"></a>

```typescript
public readonly defaultInstanceProfile: IInstanceProfile;
```

- *Type:* aws-cdk-lib.aws_iam.IInstanceProfile

---

##### `defaultRole`<sup>Optional</sup> <a name="defaultRole" id="ec2-required-role-config-rule.Ec2RequiredRoleConfigRule.property.defaultRole"></a>

```typescript
public readonly defaultRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#ec2-required-role-config-rule.Ec2RequiredRoleConfigRule.property.DEFAULT_EC2_ROLE_DESCRIPTION">DEFAULT_EC2_ROLE_DESCRIPTION</a></code> | <code>string</code> | *No description.* |
| <code><a href="#ec2-required-role-config-rule.Ec2RequiredRoleConfigRule.property.DEFAULT_RULE_DESCRIPTION">DEFAULT_RULE_DESCRIPTION</a></code> | <code>string</code> | *No description.* |

---

##### `DEFAULT_EC2_ROLE_DESCRIPTION`<sup>Required</sup> <a name="DEFAULT_EC2_ROLE_DESCRIPTION" id="ec2-required-role-config-rule.Ec2RequiredRoleConfigRule.property.DEFAULT_EC2_ROLE_DESCRIPTION"></a>

```typescript
public readonly DEFAULT_EC2_ROLE_DESCRIPTION: string;
```

- *Type:* string

---

##### `DEFAULT_RULE_DESCRIPTION`<sup>Required</sup> <a name="DEFAULT_RULE_DESCRIPTION" id="ec2-required-role-config-rule.Ec2RequiredRoleConfigRule.property.DEFAULT_RULE_DESCRIPTION"></a>

```typescript
public readonly DEFAULT_RULE_DESCRIPTION: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2RequiredRoleConfigRuleProps <a name="Ec2RequiredRoleConfigRuleProps" id="ec2-required-role-config-rule.Ec2RequiredRoleConfigRuleProps"></a>

#### Initializer <a name="Initializer" id="ec2-required-role-config-rule.Ec2RequiredRoleConfigRuleProps.Initializer"></a>

```typescript
import { Ec2RequiredRoleConfigRuleProps } from 'ec2-required-role-config-rule'

const ec2RequiredRoleConfigRuleProps: Ec2RequiredRoleConfigRuleProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#ec2-required-role-config-rule.Ec2RequiredRoleConfigRuleProps.property.account">account</a></code> | <code>string</code> | The AWS account ID this resource belongs to. |
| <code><a href="#ec2-required-role-config-rule.Ec2RequiredRoleConfigRuleProps.property.environmentFromArn">environmentFromArn</a></code> | <code>string</code> | ARN to deduce region and account from. |
| <code><a href="#ec2-required-role-config-rule.Ec2RequiredRoleConfigRuleProps.property.physicalName">physicalName</a></code> | <code>string</code> | The value passed in by users to the physical name prop of the resource. |
| <code><a href="#ec2-required-role-config-rule.Ec2RequiredRoleConfigRuleProps.property.region">region</a></code> | <code>string</code> | The AWS region this resource belongs to. |
| <code><a href="#ec2-required-role-config-rule.Ec2RequiredRoleConfigRuleProps.property.remediation">remediation</a></code> | <code><a href="#ec2-required-role-config-rule.Ec2RequiredRoleRemediationOptions">Ec2RequiredRoleRemediationOptions</a></code> | *No description.* |

---

##### `account`<sup>Optional</sup> <a name="account" id="ec2-required-role-config-rule.Ec2RequiredRoleConfigRuleProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string
- *Default:* the resource is in the same account as the stack it belongs to

The AWS account ID this resource belongs to.

---

##### `environmentFromArn`<sup>Optional</sup> <a name="environmentFromArn" id="ec2-required-role-config-rule.Ec2RequiredRoleConfigRuleProps.property.environmentFromArn"></a>

```typescript
public readonly environmentFromArn: string;
```

- *Type:* string
- *Default:* take environment from `account`, `region` parameters, or use Stack environment.

ARN to deduce region and account from.

The ARN is parsed and the account and region are taken from the ARN.
This should be used for imported resources.

Cannot be supplied together with either `account` or `region`.

---

##### `physicalName`<sup>Optional</sup> <a name="physicalName" id="ec2-required-role-config-rule.Ec2RequiredRoleConfigRuleProps.property.physicalName"></a>

```typescript
public readonly physicalName: string;
```

- *Type:* string
- *Default:* The physical name will be allocated by CloudFormation at deployment time

The value passed in by users to the physical name prop of the resource.

`undefined` implies that a physical name will be allocated by
  CloudFormation during deployment.
- a concrete value implies a specific physical name
- `PhysicalName.GENERATE_IF_NEEDED` is a marker that indicates that a physical will only be generated
  by the CDK if it is needed for cross-environment references. Otherwise, it will be allocated by CloudFormation.

---

##### `region`<sup>Optional</sup> <a name="region" id="ec2-required-role-config-rule.Ec2RequiredRoleConfigRuleProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string
- *Default:* the resource is in the same region as the stack it belongs to

The AWS region this resource belongs to.

---

##### `remediation`<sup>Optional</sup> <a name="remediation" id="ec2-required-role-config-rule.Ec2RequiredRoleConfigRuleProps.property.remediation"></a>

```typescript
public readonly remediation: Ec2RequiredRoleRemediationOptions;
```

- *Type:* <a href="#ec2-required-role-config-rule.Ec2RequiredRoleRemediationOptions">Ec2RequiredRoleRemediationOptions</a>

---

### Ec2RequiredRoleRemediationOptions <a name="Ec2RequiredRoleRemediationOptions" id="ec2-required-role-config-rule.Ec2RequiredRoleRemediationOptions"></a>

#### Initializer <a name="Initializer" id="ec2-required-role-config-rule.Ec2RequiredRoleRemediationOptions.Initializer"></a>

```typescript
import { Ec2RequiredRoleRemediationOptions } from 'ec2-required-role-config-rule'

const ec2RequiredRoleRemediationOptions: Ec2RequiredRoleRemediationOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#ec2-required-role-config-rule.Ec2RequiredRoleRemediationOptions.property.automatic">automatic</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#ec2-required-role-config-rule.Ec2RequiredRoleRemediationOptions.property.enabled">enabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#ec2-required-role-config-rule.Ec2RequiredRoleRemediationOptions.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | *No description.* |

---

##### `automatic`<sup>Optional</sup> <a name="automatic" id="ec2-required-role-config-rule.Ec2RequiredRoleRemediationOptions.property.automatic"></a>

```typescript
public readonly automatic: boolean;
```

- *Type:* boolean

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="ec2-required-role-config-rule.Ec2RequiredRoleRemediationOptions.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

---

##### `role`<sup>Optional</sup> <a name="role" id="ec2-required-role-config-rule.Ec2RequiredRoleRemediationOptions.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

---



