#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import "source-map-support/register";
import { PipelineStack } from "../lib/pipeline-stack";
import sharedConfig from "../util/shared-config";

const app = new cdk.App();
const config = sharedConfig();

new PipelineStack(app, "PipelineStack", {
  env: {
    account: config.accountIds.shared,
    region: config.baseRegion,
  },
});

app.synth();
