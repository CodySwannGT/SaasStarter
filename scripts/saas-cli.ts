#!/usr/bin/env bun
/**
 * SaaS Starter CLI Tool
 * 
 * A unified tool for setting up the SaaS starter kit and creating new projects.
 * This script combines functionality from setup-script.ts and create-saas-starter.js.
 * 
 * Usage:
 *   bun run scripts/saas-cli.ts setup    - Configure the existing repository
 *   bun run scripts/saas-cli.ts create   - Create a new project from the template
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import chalk from 'chalk';
import ora from 'ora';
import { program } from 'commander';

// Define configuration interface
interface Config {
  projectName?: string;
  companyName: string;
  companyLegalName?: string;
  companyDescription?: string;
  domainName: string;
  supportEmail: string;
  infoEmail?: string;
  contactEmail?: string;
  githubOrg: string;
  databasePrefix: string;
  resourcePrefix?: string;
  primaryColor?: string;
  secondaryColor?: string;
  accentColor?: string;
  authMethods?: string[];
  enableSubscriptions?: boolean;
  deploymentRegion?: string;
}

// Repository URL for cloning
const REPO_URL = 'https://github.com/your-org/saas-starter.git';

// Initialize command-line program
program
  .name('saas-cli')
  .description('SaaS Starter CLI Tool')
  .version('1.0.0');

// Setup command - Configure the existing repository
program
  .command('setup')
  .description('Configure the existing SaaS Starter repository')
  .action(async () => {
    await setupMode();
  });

// Create command - Create a new project from the template
program
  .command('create')
  .description('Create a new project based on the SaaS Starter template')
  .action(async () => {
    await createMode();
  });

// Branding command - Update branding in existing project
program
  .command('branding')
  .description('Update branding configuration in an existing project')
  .action(async () => {
    await brandingMode();
  });

// Parse command-line arguments
program.parse();

// If no command is provided, show help
if (!process.argv.slice(2).length) {
  program.help();
}

/**
 * Setup mode - Configure the existing repository
 */
async function setupMode() {
  console.log(chalk.blue('\n======================================'));
  console.log(chalk.blue('🚀 SaaS Starter Kit Setup'));
  console.log(chalk.blue('======================================\n'));
  console.log('This wizard will help you configure your existing SaaS application.\n');
  
  // Collect configuration information
  const config = await collectConfiguration();
  
  // Create .env file
  const spinner = ora('Creating .env file with your configuration...').start();
  try {
    createEnvFile(process.cwd(), config);
    spinner.succeed('Configuration complete! A .env file has been created with your settings.');
    
    console.log('\nNext steps:');
    console.log(chalk.blue('  1. Run `bun install` if you haven\'t already'));
    console.log(chalk.blue('  2. Run `bun run dev` to start the development server'));
    console.log(chalk.blue('  3. Open http://localhost:19006 in your browser'));
  } catch (error) {
    spinner.fail('Failed to create .env file');
    console.error(chalk.red(`Error: ${error.message}`));
    process.exit(1);
  }
}

/**
 * Create mode - Create a new project from the template
 */
async function createMode() {
  console.log(chalk.blue('\n======================================'));
  console.log(chalk.blue('🚀 SaaS Starter Kit Creation Wizard'));
  console.log(chalk.blue('======================================\n'));
  console.log('This wizard will help you set up a new SaaS project based on our starter kit.\n');
  
  // Get project name
  const projectName = await promptInput('What is the name of your project?', 'my-saas-app');
  const projectDir = path.resolve(process.cwd(), projectName);
  
  // Check if directory exists
  if (fs.existsSync(projectDir)) {
    const overwrite = await promptConfirm(`Directory ${projectName} already exists. Do you want to overwrite it?`, false);
    if (!overwrite) {
      console.log(chalk.yellow('Setup canceled.'));
      process.exit(0);
    }
    
    fs.rmSync(projectDir, { recursive: true, force: true });
  }
  
  // Clone the repository
  const cloneSpinner = ora('Cloning template repository...').start();
  try {
    execSync(`git clone ${REPO_URL} ${projectDir}`, { stdio: 'pipe' });
    cloneSpinner.succeed('Repository cloned successfully');
  } catch (error) {
    cloneSpinner.fail('Failed to clone repository');
    console.error(chalk.red(`Error: ${error.message}`));
    process.exit(1);
  }
  
  // Remove .git directory
  fs.rmSync(path.join(projectDir, '.git'), { recursive: true, force: true });
  
  // Initialize new git repository
  process.chdir(projectDir);
  execSync('git init', { stdio: 'pipe' });
  
  // Collect configuration information
  console.log(chalk.blue('\n📝 Project Configuration'));
  const config: Config = await collectConfiguration(projectName);
  
  // Create .env file
  const envSpinner = ora('Creating .env file with your configuration...').start();
  try {
    createEnvFile(projectDir, config);
    envSpinner.succeed('.env file created successfully');
  } catch (error) {
    envSpinner.fail('Failed to create .env file');
    console.error(chalk.red(`Error: ${error.message}`));
  }
  
  // Apply configuration to the project
  const configSpinner = ora('Applying configuration to project...').start();
  try {
    // Replace placeholder values in files
    replaceInFiles(projectDir, {
      '{{COMPANY_NAME}}': config.companyName,
      '{{COMPANY_LEGAL_NAME}}': config.companyName,
      '{{COMPANY_DESCRIPTION}}': `${config.companyName} - SaaS Application`,
      '{{DOMAIN_NAME}}': config.domainName,
      '{{SUPPORT_EMAIL}}': config.supportEmail,
      '{{INFO_EMAIL}}': `info@${config.domainName}`,
      '{{CONTACT_EMAIL}}': `contact@${config.domainName}`,
      '{{GITHUB_ORG}}': config.githubOrg,
      '{{DATABASE_PREFIX}}': config.databasePrefix,
      '{{PROJECT_NAME}}': config.projectName || '',
      '{{PRIMARY_COLOR}}': '4F46E5',
      '{{SECONDARY_COLOR}}': '10B981',
      '{{ACCENT_COLOR}}': 'F59E0B',
      '{{RESOURCE_PREFIX}}': config.databasePrefix,
    });
    
    configSpinner.succeed('Configuration applied successfully');
  } catch (error) {
    configSpinner.fail('Failed to apply configuration');
    console.error(chalk.red(`Error: ${error.message}`));
  }
  
  // Install dependencies
  const installSpinner = ora('Installing dependencies... (this may take a few minutes)').start();
  try {
    execSync('bun install', { stdio: 'pipe' });
    installSpinner.succeed('Dependencies installed successfully');
  } catch (error) {
    installSpinner.fail('Failed to install dependencies');
    console.error(chalk.red(`Error: ${error.message}`));
  }
  
  // Done!
  console.log(chalk.green('\n✅ SaaS Starter Kit Setup Complete!'));
  console.log('\nNext steps:');
  console.log(chalk.blue(`  1. cd ${projectName}`));
  console.log(chalk.blue('  2. Set up external services (AWS, RevenueCat, etc.)'));
  console.log(chalk.blue('  3. Update configuration in .env file if needed'));
  console.log(chalk.blue('  4. Run "bun run dev" to start the development server'));
  console.log('\nFor more information, see the documentation at:');
  console.log(chalk.blue('  https://github.com/your-org/saas-starter#readme'));
}

/**
 * Collect configuration information from the user
 */
async function collectConfiguration(projectName?: string): Promise<Config> {
  const initialConfig: Partial<Config> = {};
  
  if (projectName) {
    initialConfig.projectName = projectName;
  }
  
  // Base configuration (common to both modes)
  const config: Config = {
    companyName: await promptInput('Company/App Name', projectName || 'MySaaS'),
    domainName: await promptInput('Domain Name (without protocol)', 
      projectName ? `${projectName.toLowerCase().replace(/[^a-z0-9]/g, '')}.com` : 'example.com'),
    supportEmail: await promptInput('Support Email', `support@${initialConfig.domainName || 'example.com'}`),
    githubOrg: await promptInput('GitHub Organization', 'myorganization'),
    databasePrefix: await promptInput('Database Table Prefix', 'saas_'),
  };
  
  // Additional configuration for create mode
  if (projectName) {
    config.authMethods = await promptCheckbox('Select authentication methods to enable:', [
      { name: 'Email/Password', value: 'email', checked: true },
      { name: 'Phone Number', value: 'phone' },
      { name: 'Google', value: 'google', checked: true },
      { name: 'Apple', value: 'apple', checked: true },
      { name: 'Facebook', value: 'facebook' },
      { name: 'Magic Link (Passwordless)', value: 'magic_link' },
    ]);
    
    config.enableSubscriptions = await promptConfirm('Enable subscription management with RevenueCat?', true);
    
    config.deploymentRegion = await promptList('Primary AWS deployment region:', [
      { name: 'US East (N. Virginia) - us-east-1', value: 'us-east-1' },
      { name: 'US East (Ohio) - us-east-2', value: 'us-east-2' },
      { name: 'US West (Oregon) - us-west-2', value: 'us-west-2' },
      { name: 'Europe (Ireland) - eu-west-1', value: 'eu-west-1' },
      { name: 'Europe (Frankfurt) - eu-central-1', value: 'eu-central-1' },
      { name: 'Asia Pacific (Tokyo) - ap-northeast-1', value: 'ap-northeast-1' },
      { name: 'Asia Pacific (Singapore) - ap-southeast-1', value: 'ap-southeast-1' },
    ], 'us-east-1');
  }
  
  return config;
}

/**
 * Create .env file with configuration
 */
function createEnvFile(dirPath: string, config: Config): void {
  let envContent = `# This file was generated by the SaaS Starter CLI

# Company Information
COMPANY_NAME=${config.companyName}
DOMAIN_NAME=${config.domainName}
SUPPORT_EMAIL=${config.supportEmail}
GITHUB_ORG=${config.githubOrg}
DATABASE_PREFIX=${config.databasePrefix}

# Environment
NODE_ENV=development

# API Configuration
API_URL=http://localhost:3000
WS_URL=ws://localhost:3000

# Authentication (placeholder values, replace with real ones)
AUTH_REGION=${config.deploymentRegion || 'us-east-1'}
USER_POOL_ID=placeholder
USER_POOL_CLIENT_ID=placeholder
`;

  // Add additional configuration for create mode
  if (config.authMethods) {
    envContent += `
# Authentication Methods
AUTH_METHODS=${config.authMethods.join(',')}
FEATURE_SOCIAL_LOGIN=true
FEATURE_APPLE_LOGIN=${config.authMethods.includes('apple')}
FEATURE_GOOGLE_LOGIN=${config.authMethods.includes('google')}
FEATURE_FACEBOOK_LOGIN=${config.authMethods.includes('facebook')}
FEATURE_PHONE_LOGIN=${config.authMethods.includes('phone')}
FEATURE_MAGIC_LINK=${config.authMethods.includes('magic_link')}
FEATURE_ENTERPRISE_SSO=false
`;
  }

  if (config.enableSubscriptions !== undefined) {
    envContent += `
# Subscription Management
ENABLE_SUBSCRIPTIONS=${config.enableSubscriptions}
`;
  }

  // Write the .env file
  fs.writeFileSync(path.join(dirPath, '.env'), envContent);
}

/**
 * Replace placeholder strings in all files
 */
function replaceInFiles(dir: string, replacements: Record<string, string>): void {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    
    if (file.isDirectory()) {
      // Skip node_modules and .git directories
      if (file.name === 'node_modules' || file.name === '.git') continue;
      replaceInFiles(fullPath, replacements);
    } else {
      // Skip binary files and images
      if (/\.(jpg|jpeg|png|gif|svg|woff|woff2|ttf|eot|ico|pdf|zip|tar|gz|bin)$/i.test(file.name)) continue;
      
      try {
        let content = fs.readFileSync(fullPath, 'utf8');
        let modified = false;
        
        for (const [placeholder, value] of Object.entries(replacements)) {
          if (content.includes(placeholder)) {
            content = content.replace(new RegExp(placeholder.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), value);
            modified = true;
          }
        }
        
        if (modified) {
          fs.writeFileSync(fullPath, content);
        }
      } catch (error) {
        // Skip files that can't be read as text
        continue;
      }
    }
  }
}

// Simple CLI prompts (using readline for compatibility)
// In a real implementation, you'd want to use inquirer for better UI

async function promptInput(question: string, defaultValue?: string): Promise<string> {
  const readline = (await import('readline')).createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    const defaultText = defaultValue ? ` (${defaultValue})` : '';
    readline.question(chalk.cyan(`${question}${defaultText}: `), (answer) => {
      readline.close();
      resolve(answer || defaultValue || '');
    });
  });
}

async function promptConfirm(question: string, defaultValue = false): Promise<boolean> {
  const answer = await promptInput(`${question} (y/n)`, defaultValue ? 'y' : 'n');
  return answer.toLowerCase()[0] === 'y';
}

async function promptList(question: string, choices: Array<{name: string, value: string}>, defaultValue?: string): Promise<string> {
  console.log(chalk.cyan(`${question}`));
  choices.forEach((choice, index) => {
    const isDefault = choice.value === defaultValue;
    console.log(`  ${index + 1}. ${choice.name}${isDefault ? ' (default)' : ''}`);
  });
  
  const answer = await promptInput(`Enter number (1-${choices.length})`, (choices.findIndex(c => c.value === defaultValue) + 1).toString());
  const index = parseInt(answer, 10) - 1;
  
  if (index >= 0 && index < choices.length) {
    return choices[index].value;
  }
  
  return defaultValue || choices[0].value;
}

async function promptCheckbox(question: string, choices: Array<{name: string, value: string, checked?: boolean}>): Promise<string[]> {
  console.log(chalk.cyan(`${question}`));
  choices.forEach((choice, index) => {
    console.log(`  ${index + 1}. ${choice.name} ${choice.checked ? '(default)' : ''}`);
  });
  
  const answer = await promptInput('Enter numbers separated by comma (e.g., 1,2,4) or "all"');
  
  if (answer.toLowerCase() === 'all') {
    return choices.map(choice => choice.value);
  }
  
  const selectedIndices = answer.split(',').map(num => parseInt(num.trim(), 10) - 1);
  const selectedValues = selectedIndices
    .filter(index => index >= 0 && index < choices.length)
    .map(index => choices[index].value);
  
  if (selectedValues.length === 0) {
    return choices.filter(choice => choice.checked).map(choice => choice.value);
  }
  
  return selectedValues;
}

/**
 * Branding mode - Update branding in existing project
 */
async function brandingMode() {
  console.log(chalk.blue('\n======================================'));
  console.log(chalk.blue('🎨 SaaS Starter Kit Branding Configuration'));
  console.log(chalk.blue('======================================\n'));
  console.log('This wizard will help you update branding in your SaaS application.\n');
  
  // Collect branding configuration
  const config = await collectBrandingConfig();
  
  // Files that need to be updated with branding information
  const filesToUpdate = [
    { 
      path: 'packages/config/src/branding.ts', 
      replacements: [
        { pattern: /COMPANY_NAME: '.*?'/g, replacement: `COMPANY_NAME: '${config.companyName}'` },
        { pattern: /COMPANY_LEGAL_NAME: '.*?'/g, replacement: `COMPANY_LEGAL_NAME: '${config.companyLegalName}'` },
        { pattern: /COMPANY_DESCRIPTION: '.*?'/g, replacement: `COMPANY_DESCRIPTION: '${config.companyDescription}'` },
        { pattern: /DOMAIN_NAME: '.*?'/g, replacement: `DOMAIN_NAME: '${config.domainName}'` },
        { pattern: /GITHUB_ORG: '.*?'/g, replacement: `GITHUB_ORG: '${config.githubOrg}'` },
        { pattern: /DATABASE_PREFIX: '.*?'/g, replacement: `DATABASE_PREFIX: '${config.databasePrefix}'` },
        { pattern: /RESOURCE_PREFIX: '.*?'/g, replacement: `RESOURCE_PREFIX: '${config.resourcePrefix}'` },
        { pattern: /PRIMARY_COLOR: '#.*?'/g, replacement: `PRIMARY_COLOR: '#${config.primaryColor}'` },
        { pattern: /SECONDARY_COLOR: '#.*?'/g, replacement: `SECONDARY_COLOR: '#${config.secondaryColor}'` },
        { pattern: /ACCENT_COLOR: '#.*?'/g, replacement: `ACCENT_COLOR: '#${config.accentColor}'` },
      ]
    },
    {
      path: 'infrastructure/lib/cognito-stack.ts',
      replacements: [
        { pattern: /"gsauserpool"/g, replacement: `"${config.resourcePrefix}userpool"` },
        { pattern: /Welcome to Gemini Sports Analytics!/g, replacement: `Welcome to ${config.companyName}!` },
        { pattern: /The Gemini Team/g, replacement: `The ${config.companyName} Team` },
        { pattern: /geminisports.co/g, replacement: `${config.domainName}` },
        { pattern: /geminisports.ai/g, replacement: `${config.domainName}` },
        { pattern: /"Gemini Sports Analytics"/g, replacement: `"${config.companyName}"` },
      ]
    },
    {
      path: 'README.md',
      replacements: [
        { pattern: /Gemini Sports Analytics/g, replacement: config.companyName },
      ]
    },
  ];
  
  // Update files with branding information
  const updateSpinner = ora('Updating files with branding information...').start();
  try {
    for (const file of filesToUpdate) {
      const filePath = path.join(process.cwd(), file.path);
      
      // Skip if file doesn't exist
      if (!fs.existsSync(filePath)) {
        updateSpinner.info(`Skipping ${file.path} - file not found`);
        continue;
      }
      
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Apply all replacements
        for (const replacement of file.replacements) {
          content = content.replace(replacement.pattern, replacement.replacement);
        }
        
        // Write updated content back to file
        fs.writeFileSync(filePath, content);
      } catch (error) {
        updateSpinner.warn(`Error updating ${file.path}: ${error.message}`);
      }
    }
    updateSpinner.succeed('Updated files with branding information');
  } catch (error) {
    updateSpinner.fail('Failed to update files');
    console.error(chalk.red(`Error: ${error.message}`));
  }
  
  // Create .env.branding file
  const envSpinner = ora('Creating .env.branding file...').start();
  try {
    const envContent = Object.entries(config)
      .filter(([key]) => key !== 'projectName' && key !== 'authMethods' && key !== 'enableSubscriptions')
      .map(([key, value]) => `${key.toUpperCase()}=${value}`)
      .join('\n');
    
    fs.writeFileSync(path.join(process.cwd(), '.env.branding'), envContent);
    envSpinner.succeed('Created .env.branding file successfully');
  } catch (error) {
    envSpinner.fail('Failed to create .env.branding file');
    console.error(chalk.red(`Error: ${error.message}`));
  }
  
  // Done!
  console.log(chalk.green('\n✅ Branding configuration complete!'));
  console.log('\nNext steps:');
  console.log(chalk.blue('  1. Run "bun install" to update dependencies'));
  console.log(chalk.blue('  2. Run "bun run build" to build the packages'));
  console.log(chalk.blue('  3. Run "bun run dev" to start the development environment'));
}

/**
 * Collect branding configuration
 */
async function collectBrandingConfig(): Promise<Config> {
  const config: Config = {
    companyName: await promptInput('Company Name (displayed to users)', 'Acme Inc.'),
    companyLegalName: await promptInput('Legal Company Name (for terms of service)', 'Acme Incorporated'),
    companyDescription: await promptInput('Company Description (short tagline)', 'Modern SaaS Solutions'),
    domainName: await promptInput('Domain Name (without http/https)', 'acme.com'),
    supportEmail: await promptInput('Support Email', `support@acme.com`),
    infoEmail: await promptInput('Info Email', `info@acme.com`),
    contactEmail: await promptInput('Contact Email', `contact@acme.com`),
    githubOrg: await promptInput('GitHub Organization or Username', 'acme-org'),
    databasePrefix: await promptInput('Database Prefix (used for tables)', 'acme_'),
    resourcePrefix: await promptInput('Resource Prefix (for AWS resources)', 'acme'),
    primaryColor: await promptInput('Primary Brand Color (hex without #)', '3B82F6'),
    secondaryColor: await promptInput('Secondary Brand Color (hex without #)', '1E40AF'),
    accentColor: await promptInput('Accent Brand Color (hex without #)', '60A5FA'),
  };
  
  // Show summary and confirm
  console.log(chalk.blue('\n📋 Configuration Summary:'));
  Object.entries(config).forEach(([key, value]) => {
    console.log(`  ${key}: ${value}`);
  });
  
  const confirmed = await promptConfirm('Does this look correct?', true);
  if (!confirmed) {
    console.log('\nLet\'s try again...');
    return collectBrandingConfig();
  }
  
  return config;
}