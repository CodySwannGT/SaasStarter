# AWS End User Messaging SMS Registration Guide

This guide provides step-by-step instructions on how to obtain a `registrationId` from the AWS End User Messaging SMS console, which is required for provisioning TEN_DLC phone numbers in our infrastructure.

## Prerequisites

- An AWS account with appropriate permissions
- Access to the AWS End User Messaging SMS console

## Step 1: Access the AWS End User Messaging SMS Console

1. Sign in to the AWS Management Console
2. Navigate to the AWS End User Messaging SMS console by:
   - Typing "End User Messaging" in the search bar, or
   - Going to https://console.aws.amazon.com/sms-voice/

## Step 2: Register Your Company

1. In the left navigation pane, click on **Registrations**
2. Click on the **Create registration** button
3. Select **Company registration** and click **Next**
4. Fill in the required company information:
   - Company name
   - Company website
   - Address
   - Contact information
   - Tax ID or business registration number
5. Review the information and click **Create registration**
6. Note: Company registration may take 1-3 business days for approval

## Step 3: Create a Campaign

Once your company registration is approved:

1. In the left navigation pane, click on **Registrations**
2. Click on the **Create registration** button
3. Select **10DLC campaign** and click **Next**
4. Select your registered company from the dropdown
5. Fill in the campaign details:
   - Campaign name
   - Vertical (industry category)
   - Campaign use case (e.g., marketing, notifications)
   - **Campaign description**: This is a critical field where you must identify:
     - Who the sender is (your company/organization)
     - Who the recipients are (your customers/users)
     - Why messages are being sent to the intended recipients
     - Note: Text is limited to 4096 characters
   - Sample message content
   - Opt-in workflow description
   - Help message
6. Review the information and click **Create campaign**
7. Note: Campaign registration may take a few hours to a day for approval

## Step 4: Obtain the Registration ID

Once your campaign is approved:

1. In the left navigation pane, click on **Registrations**
2. In the **10DLC campaigns** tab, find your approved campaign
3. Click on the campaign name to view its details
4. Look for the **Campaign ID** or **Registration ID** field
5. This alphanumeric string is your `registrationId` (it typically starts with "c-" followed by a UUID)
6. Copy this ID for use in your infrastructure deployment

## Step 5: Use the Registration ID in Your Infrastructure

1. When deploying the SMS infrastructure stack, provide the `registrationId` as a parameter:

```bash
# Using AWS CDK CLI
cdk deploy SmsInfrastructureStack --parameters registrationId=YOUR_REGISTRATION_ID

# Or if using CloudFormation directly
aws cloudformation deploy \
  --template-file path/to/template.yaml \
  --stack-name SmsInfrastructureStack \
  --parameter-overrides registrationId=YOUR_REGISTRATION_ID
```

2. Alternatively, you can modify your CDK app code to include the registrationId:

```typescript
new SmsInfrastructureStack(app, 'SmsInfrastructureStack', {
  stage: 'dev',
  registrationId: 'YOUR_REGISTRATION_ID'
});
```

## Sample Campaign Description Template

When creating your campaign, you can use the following template for the campaign description:

```
Sender Information:
[Company Name] is a [brief description of your company/organization, e.g., "sports analytics platform providing real-time game insights"].

Recipient Information:
Recipients are [describe your user base, e.g., "registered users who have opted in to receive SMS notifications through our platform"].

Purpose of Messages:
Messages will be sent to recipients for the following purposes:
1. [Purpose 1, e.g., "Account security notifications including one-time passwords for multi-factor authentication"]
2. [Purpose 2, e.g., "Time-sensitive alerts about game updates and scores"]
3. [Purpose 3, e.g., "Important account notifications"]

Opt-in Process:
Users explicitly opt in to receive these messages by [describe your opt-in process, e.g., "checking a box during account registration and confirming their phone number through a verification code"].

Opt-out Process:
Recipients can opt out at any time by [describe your opt-out process, e.g., "replying STOP to any message or updating their notification preferences in their account settings"].
```

Customize this template with your specific information while ensuring you clearly address who is sending the messages, who is receiving them, and why they're being sent.

## Important Notes

- There are fees associated with company registration (~$4 one-time fee) and campaign registration (~$50 one-time fee)
- Monthly fees may apply for maintaining the registration
- TEN_DLC numbers have higher throughput and deliverability compared to other number types
- Registration approval times can vary, so plan accordingly
- Registration requirements and processes may change over time, always refer to the latest AWS documentation

## Troubleshooting

If you encounter issues with your registration:

1. Check the status of your registrations in the AWS End User Messaging SMS console
2. Ensure all required information is provided accurately
3. Contact AWS Support if your registration is rejected or stuck in pending status
4. Verify that your AWS account has the necessary permissions to create and manage SMS resources