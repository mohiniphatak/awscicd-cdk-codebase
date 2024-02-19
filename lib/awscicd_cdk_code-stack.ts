import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class AwscicdCdkCodeStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // AWS Codepipeline code
    const codepipelineexample = new CodePipeline(this, 'myfirstpipeline', {

      synth: new ShellStep('Synth', {
        input: CodePipelineSource.gitHub('mohiniphatak/awscicd-cdk-codebase', 'main'),
        commands: [
          'npm ci',
          'npm run build',
          'npx cdk synth',
        ],
      }),
    });
    
  }
}
