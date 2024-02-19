#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AwscicdCdkCodeStack } from '../lib/awscicd_cdk_code-stack';

const app = new cdk.App();
new AwscicdCdkCodeStack(app, 'AwscicdCdkCodeStack', {
  
  // env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },

  
  env: { account: '058264531732', region: 'us-east-1' },

  
});