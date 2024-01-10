import { join } from 'path';
import { ArnFormat, Duration, ResourceProps, Stack } from 'aws-cdk-lib';
import { PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { Code, Function, Runtime, Tracing } from 'aws-cdk-lib/aws-lambda';
import { IConstruct } from 'constructs';


export interface EvaluationFunctionProps extends ResourceProps {
  readonly tracing?: Tracing;
}

export class EvaluationFunction extends Function {
  private static readonly CODE_DIRECTORY: string = 'lambda/evaluate';
  private static readonly HANDLER: string = 'index.handler';


  public constructor(scope: IConstruct, id: string, props: EvaluationFunctionProps = {}) {
    super(scope, id, {
      code: Code.fromAsset(join(__dirname, '..', EvaluationFunction.CODE_DIRECTORY)),
      handler: EvaluationFunction.HANDLER,
      initialPolicy: [
        new PolicyStatement({
          actions: [
            'config:PutEvaluations',
          ],
          resources: [
            '*',
          ],
        }),
        new PolicyStatement({
          actions: [
            'iam:GetInstanceProfile',
          ],
          resources: [
            Stack.of(scope).formatArn({
              account: '*',
              arnFormat: ArnFormat.SLASH_RESOURCE_NAME,
              region: '',
              resource: 'instance-profile',
              resourceName: '*',
              service: 'iam',
            }),
          ],
        }),
        new PolicyStatement({
          actions: [
            'iam:ListAttachedRolePolicies',
          ],
          resources: [
            Stack.of(scope).formatArn({
              account: '*',
              arnFormat: ArnFormat.SLASH_RESOURCE_NAME,
              region: '',
              resource: 'role',
              resourceName: '*',
              service: 'iam',
            }),
          ],
        }),
        new PolicyStatement({
          actions: [
            'iam:PassRole',
            'sts:AssumeRole',
          ],
          resources: [
            Stack.of(scope).formatArn({
              account: '*',
              arnFormat: ArnFormat.SLASH_RESOURCE_NAME,
              region: '',
              resource: 'role',
              resourceName: 'aws-service-role/config.amazonaws.com/*',
              service: 'iam',
            }),
          ],
        }),
        new PolicyStatement({
          actions: [
            'logs:CreateLogGroup',
          ],
          resources: [
            Stack.of(scope).formatArn({
              arnFormat: ArnFormat.NO_RESOURCE_NAME,
              resource: '*',
              service: 'logs',
            }),
          ],
        }),
      ],
      runtime: Runtime.NODEJS_18_X,
      timeout: Duration.seconds(15),
      tracing: props.tracing ?? Tracing.ACTIVE,
    });
  }
}