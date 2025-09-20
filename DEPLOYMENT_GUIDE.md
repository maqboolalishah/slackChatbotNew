# 🚀 Deployment Guide for gpt.whyreboot.com

## Prerequisites

- GitHub account
- Vercel account (free)
- Domain: gpt.whyreboot.com (already owned)

## Step 1: Prepare Your Code

### 1.1 Push to GitHub

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit: Slack GPT Support"

# Create a new repository on GitHub
# Then push your code
git remote add origin https://github.com/YOUR_USERNAME/slack-gpt-support.git
git branch -M main
git push -u origin main
```

### 1.2 Fix Slack Bot Token

1. Go to [api.slack.com/apps](https://api.slack.com/apps)
2. Find your app or create a new one
3. Go to "OAuth & Permissions"
4. Add these scopes:
   - `search:read`
   - `channels:read`
   - `groups:read`
5. Install to workspace
6. Copy the new Bot User OAuth Token

## Step 2: Deploy to Vercel

### 2.1 Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "New Project"
4. Import your GitHub repository

### 2.2 Configure Environment Variables

In Vercel dashboard, add these environment variables:

```
OPENAI_API_KEY

SLACK_BOT_TOKEN=xoxb-YOUR_NEW_BOT_TOKEN_HERE

SUPPORT_CHANNEL_ID=
```

### 2.3 Deploy

1. Click "Deploy"
2. Wait for build to complete
3. Your app will be available at `https://your-project.vercel.app`

## Step 3: Configure Custom Domain

### 3.1 Add Domain in Vercel

1. Go to your project settings in Vercel
2. Click "Domains"
3. Add `gpt.whyreboot.com`
4. Follow DNS configuration instructions

### 3.2 Configure DNS

Add these DNS records to your domain provider:

```
Type: CNAME
Name: gpt
Value: cname.vercel-dns.com
```

## Step 4: Test Your Deployment

### 4.1 Health Check

```bash
curl https://gpt.whyreboot.com/api/health
```

Expected response:

```json
{
  "status": "healthy",
  "environment": {
    "openai": "configured",
    "slack": "configured",
    "channel": "configured"
  }
}
```

### 4.2 Test Chat

1. Visit `https://gpt.whyreboot.com`
2. Ask a question like "How do I contact support?"
3. Check if Slack context is found

## Step 5: Monitor and Maintain

### 5.1 Monitor Logs

- Check Vercel dashboard for deployment logs
- Monitor API usage in OpenAI dashboard
- Check Slack app usage

### 5.2 Update Environment Variables

If you need to update API keys:

1. Go to Vercel project settings
2. Update environment variables
3. Redeploy automatically

## Troubleshooting

### Common Issues:

1. **Slack API Errors**

   - Ensure bot token has correct permissions
   - Check if app is installed to workspace
   - Verify support channel ID is correct

2. **OpenAI API Errors**

   - Check API key is valid
   - Monitor usage limits
   - Verify billing is set up

3. **Domain Issues**
   - DNS propagation can take up to 48 hours
   - Check CNAME record is correct
   - Verify SSL certificate is active

### Debug Commands:

```bash
# Test health endpoint
curl https://gpt.whyreboot.com/api/health

# Test chat endpoint
curl -X POST https://gpt.whyreboot.com/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "test message"}'

# Check deployment status
vercel ls
```

## Success Indicators

✅ **Application deployed successfully** when:

- Health endpoint returns 200 status
- All environment variables show "configured"
- Chat interface loads without errors
- Slack context is found for relevant questions

🎉 **Your gpt.whyreboot.com is ready!**
