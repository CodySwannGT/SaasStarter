import * as cdk from 'aws-cdk-lib';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as route53 from 'aws-cdk-lib/aws-route53';

export type Stage = 'dev' | 'staging' | 'production';
export interface SimpleCnameRecord {
  value: string;
  ttl?: cdk.Duration;
}
export interface SimpleAnameRecord {
  value: string[];
  ttl?: cdk.Duration;
}

export interface DomainConfig {
  name: string;
  nameServersRecords: Record<Stage, string[]>;
  useTldFor: Stage[];
  shouldCreateZone?: boolean;
  cnameRecords?: Record<string, SimpleCnameRecord>;
  anameRecords?: Record<string, SimpleAnameRecord>;
  txtRecords?: Record<string, SimpleAnameRecord>;
  isPrimary?: boolean;
}

export interface DnsResult {
  domainName: string | null;
  certificate: acm.Certificate | null;
  zone: route53.HostedZone | null;
}
