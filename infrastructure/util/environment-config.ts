interface ITransferFamilyUser {
  userName: string;
  publicKey: string;
}

interface ITransferFamilyConfig {
  useDefaultVpc?: boolean; // If present, will launch the server in this VPC. Do not use if you want the server to be available by the public.
  allowedCidrs?: string[]; // CIDR notation - if not supplied server will be public
  hostKeySecretArn?: string; // Use this in conjunction with hostKeyVersion to use a reusable key instead of the amazon generated one
  hostKeyVersion?: string; // Increment/modify to force an update of the host key
  users?: ITransferFamilyUser[];
  notificationEmails?: string[]; // Send notifications on file uploads
  moveToArchive?: boolean;
}
export interface IEnvironmentConfig {
  readonly backup?: boolean;
  readonly vpnServerCertificateArn?: string;
  readonly dbSnapshotId?: string;
  readonly cicdvpnServerCertificateArn?: string;
  readonly cicdvpnClientCertificateArn?: string;
  readonly httpApiId?: string;
  readonly defaultDatabaseName?: string;
  readonly shouldCreateDefaultDatabase?: boolean;
  readonly transferFamily?: ITransferFamilyConfig;
  readonly functionUrl?: string;
  readonly vpcId?: string;
  readonly peerVpcId?: string;
  readonly peerVpcCidr?: string;
  readonly peerVpcRouteTableId?: string;
  readonly vpcRouteTableId?: string;
  readonly peerAccountId?: string;
  readonly peerRoleArn?: string;
  readonly flowLogsBucketName?: string;
  readonly domainNameToRedirectToCertificateArn?: string;
  readonly smsCampaignRegistrationId?: string;
}

const environmentConfig = (environmentName: string): IEnvironmentConfig => {
  const environmentMapper: {
    [environment: string]: {
      backup?: boolean; // Whether or not the database and S3 buckets should be backed up with AWS Backup
      vpnServerCertificateArn?: string; //Manual step where you have to create a certificate in ACM and then add the ARN here (see this link for reference https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/federated-authentication.html)
      dbSnapshotId?: string; // The snapshot ID of the database to restore from. If not provided, a new database will be created.
      cicdvpnServerCertificateArn?: string; //Manual step where you have to create a mutual trust certificate in ACM and then add the ARN here (see these links for reference https://dev.to/kasukur/how-to-setup-an-aws-client-vpn-51f https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/mutual.html)
      cicdvpnClientCertificateArn?: string; //Manual step where you have to create a mutual trust certificate in ACM and then add the ARN here
      httpApiId?: string; // After you deploy the gemini-backend, you will have to manually add the httpApiId from the deploy API Gateway here
      defaultDatabaseName?: string; // The name of the database to create, if empty, won't create a database
      shouldCreateDefaultDatabase?: boolean; // If true, will create a database with the default name
      transferFamily?: ITransferFamilyConfig; // Only set this if you want cdk to create a hosted SFTP server in the environment
      functionUrl?: string;
      vpcId?: string;
      peerVpcId?: string;
      peerVpcCidr?: string;
      peerVpcRouteTableId?: string; // after deploying a peering stack, you will have to manually add the route table id for the peer vpc here
      vpcRouteTableId?: string; // after deploying a peering stack, you will have to manually add the route table id for the main vpc here
      peerAccountId?: string; // AWS account ID where the peer VPC is located for cross-account peering
      peerRoleArn?: string; // Optional: IAM role ARN in the peer account that allows for cross-account peering
      flowLogsBucketName?: string; // After deploying the stack, the log stage will create a bucket for vpc logs. If you want a stage to write flow logs to that bucket, set this to the name of the bucket.
      domainNameToRedirectToCertificateArn?: string;
      smsCampaignRegistrationId?: string;
    };
  } = {
    dev: {
      
    },
    staging: {
      
    },
    production: {
      
    },
  };
  return environmentMapper[environmentName];
};

export default environmentConfig;
