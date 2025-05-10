/**
 * Global branding configuration
 * These variables will be replaced during project setup
 */
export const BRANDING = {
  // Company information
  COMPANY_NAME: '{{COMPANY_NAME}}',
  COMPANY_LEGAL_NAME: '{{COMPANY_LEGAL_NAME}}',
  COMPANY_DESCRIPTION: '{{COMPANY_DESCRIPTION}}',
  
  // Domain and URLs
  DOMAIN_NAME: '{{DOMAIN_NAME}}',
  WEBSITE_URL: 'https://{{DOMAIN_NAME}}',
  APP_URL: 'https://app.{{DOMAIN_NAME}}',
  API_URL: 'https://api.{{DOMAIN_NAME}}',
  
  // Contact information
  SUPPORT_EMAIL: 'support@{{DOMAIN_NAME}}',
  INFO_EMAIL: 'info@{{DOMAIN_NAME}}',
  CONTACT_EMAIL: 'contact@{{DOMAIN_NAME}}',
  
  // Resource names
  GITHUB_ORG: '{{GITHUB_ORG}}',
  DATABASE_PREFIX: '{{DATABASE_PREFIX}}',
  RESOURCE_PREFIX: '{{RESOURCE_PREFIX}}',
  
  // Branding colors
  PRIMARY_COLOR: '#{{PRIMARY_COLOR}}',
  SECONDARY_COLOR: '#{{SECONDARY_COLOR}}',
  ACCENT_COLOR: '#{{ACCENT_COLOR}}',
  
  // Assets
  LOGO_PATH: '/assets/logo.png',
  FAVICON_PATH: '/assets/favicon.ico',
  LOGO_ALT: '{{COMPANY_NAME}} Logo',
};

/**
 * Tenant information - contains settings specific to the tenant
 */
export const TENANT = {
  // Tenant settings
  ENABLE_MULTI_TENANCY: true,
  DEFAULT_TENANT_ID: 'default',
  
  // Authorization settings
  DEFAULT_ROLES: ['guest', 'member', 'admin', 'owner'],
};

/**
 * Email templates
 */
export const EMAIL_TEMPLATES = {
  WELCOME_SUBJECT: `Welcome to ${BRANDING.COMPANY_NAME}!`,
  WELCOME_BODY: `<h1>Welcome to ${BRANDING.COMPANY_NAME}!</h1>
<p>Thank you for signing up. We're excited to have you on board.</p>
<p>To get started, please visit our application at ${BRANDING.APP_URL}.</p>
<p>If you have any questions, feel free to contact us at ${BRANDING.SUPPORT_EMAIL}.</p>
<p>Best regards,</p>
<p>The ${BRANDING.COMPANY_NAME} Team</p>`,

  INVITATION_SUBJECT: `You've been invited to join ${BRANDING.COMPANY_NAME}`,
  INVITATION_BODY: `<h1>You've been invited to join ${BRANDING.COMPANY_NAME}!</h1>
<p>To accept the invitation, please use the following credentials:</p>
<p>Your username is {username}.</p>
<p>Visit ${BRANDING.APP_URL} to get started.</p>
<p>If you have any questions, please contact ${BRANDING.SUPPORT_EMAIL}.</p>
<p>Best regards,</p>
<p>The ${BRANDING.COMPANY_NAME} Team</p>
<p style="display:none">{####}</p>`
};

/**
 * AWS resource configuration
 */
export const AWS_CONFIG = {
  COGNITO_POOL_ID: `\${RESOURCE_PREFIX}userpool`,
  REGION: 'us-east-1',
};