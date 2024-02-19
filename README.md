# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template

echo "# awscicd-cdk-codebase" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/mohiniphatak/awscicd-cdk-codebase.git
git push -u origin main

git remote add origin https://github.com/mohiniphatak/awscicd-cdk-codebase.git
git branch -M main
git push -u origin main

1. npx cdk bootstrap aws://058264531732/us-east-1 --cloudformation-execution-policies arn:aws:iam::aws:policy/AdministratorAccess

2. git token --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