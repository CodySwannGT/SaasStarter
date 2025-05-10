export interface Branding {
  COMPANY_NAME: string;
  COMPANY_LEGAL_NAME: string;
  COMPANY_DESCRIPTION: string;
  DOMAIN_NAME: string;
  WEBSITE_URL: string;
  APP_URL: string;
  API_URL: string;
  SUPPORT_EMAIL: string;
  INFO_EMAIL: string;
  CONTACT_EMAIL: string;
  GITHUB_ORG: string;
  DATABASE_PREFIX: string;
  RESOURCE_PREFIX: string;
  PRIMARY_COLOR: string;
  SECONDARY_COLOR: string;
  ACCENT_COLOR: string;
  LOGO_PATH: string;
  FAVICON_PATH: string;
  LOGO_ALT: string;
}

export interface Tenant {
  ENABLE_MULTI_TENANCY: boolean;
  DEFAULT_TENANT_ID: string;
  DEFAULT_ROLES: string[];
}

export interface EmailTemplates {
  WELCOME_SUBJECT: string;
  WELCOME_BODY: string;
  INVITATION_SUBJECT: string;
  INVITATION_BODY: string;
}

export interface AwsConfig {
  COGNITO_POOL_ID: string;
  REGION: string;
}

export const BRANDING: Branding;
export const TENANT: Tenant;
export const EMAIL_TEMPLATES: EmailTemplates;
export const AWS_CONFIG: AwsConfig;