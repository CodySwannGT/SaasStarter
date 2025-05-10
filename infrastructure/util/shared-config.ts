import { DomainConfig } from "../lib/types";

export interface IEnvironmentConfig {
  readonly frontendRepo?: string;
  readonly frontendType?: "amplify" | "vercel";
  readonly createNeptuneDb: boolean;
  readonly createAuroraCluster: boolean;
  readonly createOpensearchDomain: boolean;
  readonly supportEmail: string;
  readonly githubOwner: string;
  readonly infrastructureRepo: string;
  readonly assetsDomain: string;
  readonly appDomain?: string;
  readonly functionDomain: string;
  readonly flowLogAccountIds: string[];
  readonly accountIds: {
    [environment: string]: string;
  };
  readonly baseRegion: string;
  readonly domainConfigs: DomainConfig[];
}

const sharedConfig = (): IEnvironmentConfig => {
  const sharedMapper: {
    domainConfigs: DomainConfig[];
    frontendRepo?: string;
    frontendType?: "amplify" | "vercel";
    createNeptuneDb: boolean;
    createOpensearchDomain: boolean;
    createAuroraCluster: boolean;
    supportEmail: string;
    githubOwner: string;
    infrastructureRepo: string;
    appDomain?: string;
    assetsDomain: string;
    functionDomain: string;
    flowLogAccountIds: string[];
    accountIds: {
      [environment: string]: string;
    };
    baseRegion: string;
  } = {
    domainConfigs: [
      
    ],
    frontendType: "amplify",
    assetsDomain: "assets",
    functionDomain: "f",
    appDomain: "app",
    createOpensearchDomain: true,
    createNeptuneDb: false,
    createAuroraCluster: true,
    supportEmail: "cody@geminisports.ai",
    githubOwner: "geminisportsai",
    infrastructureRepo: "infrastructure",
    frontendRepo: "frontend-v2",
    baseRegion: "us-east-1",
    accountIds: {
      // shared: "",
      // dev: "",
      // staging: "",
      // production: "",
      // log: "",
    },
    flowLogAccountIds: [],
  };
  return sharedMapper;
};

export default sharedConfig;
