# Slack GPT Support - Complete Setup Guide

## 🎯 Project Overview

This is a Next.js application that creates a ChatGPT-like interface for searching and responding to questions using your Slack support channel data. Users can ask questions at `gpt.whyreboot.com` and get AI-powered responses based on your Slack support discussions.

## 🚀 Quick Start

### 1. Prerequisites

- Node.js 18+ installed
- OpenAI API key
- Slack Bot Token with appropriate permissions
- Slack Support Channel ID

### 2. Installation

```bash
# Navigate to the project directory
cd slack-gpt-support

# Install dependencies
npm install

# The environment variables are already configured in .env.local
```

### 3. Run Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 🔧 Configuration

### Environment Variables (Already Set)

The following environment variables are configured in `.env.local`:

```env
# OpenAI
OPENAI_API_KEY=

# Slack
SLACK_BOT_TOKEN=xoxb
SUPPORT_CHANNEL_ID=
```

### Slack Bot Permissions Required

Your Slack bot needs these scopes:

- `search:read` - To search messages in channels
- `channels:read` - To read channel information
- `groups:read` - To read private channel information

## 🏗️ Architecture

### Frontend

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Lucide React** for icons
- Modern chat interface similar to ChatGPT

### Backend

- **API Routes** for handling chat requests
- **OpenAI GPT-4** integration for AI responses
- **Slack Web API** for searching support channels
- **Health check endpoint** for monitoring

### Key Features

1. **Real-time Chat Interface** - Modern UI with message history
2. **Slack Integration** - Searches support channel for relevant context
3. **AI-Powered Responses** - Uses GPT-4 with Slack context
4. **Error Handling** - Graceful error handling and user feedback
5. **Responsive Design** - Works on desktop and mobile

## 📁 Project Structure

```
slack-gpt-support/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── chat/route.ts      # Chat API endpoint
│   │   │   └── health/route.ts    # Health check endpoint
│   │   ├── page.tsx               # Main page
│   │   ├── layout.tsx             # App layout
│   │   └── globals.css            # Global styles
│   ├── components/
│   │   └── Chat.tsx               # Main chat component
│   └── types/
│       └── index.ts               # TypeScript types
├── .env.local                     # Environment variables
├── package.json                   # Dependencies
├── deploy.sh                      # Deployment script
└── README.md                      # Documentation
```

## 🚀 Deployment

### Option 1: Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Option 2: Manual Deployment

```bash
# Build the application
npm run build

# Start production server
npm start
```

### Option 3: Using Deployment Script

```bash
# Make script executable (if needed)
chmod +x deploy.sh

# Run deployment
./deploy.sh
```

## 🔍 API Endpoints

### POST /api/chat

Handles chat requests and returns AI responses with Slack context.

**Request:**

```json
{
  "message": "How do I reset my password?"
}
```

**Response:**

```json
{
  "response": "Based on our support channel, here's how to reset your password...",
  "slackContext": "Found 3 relevant messages from support channel"
}
```

### GET /api/health

Health check endpoint for monitoring application status.

**Response:**

```json
{
  "status": "healthy",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "environment": {
    "openai": "configured",
    "slack": "configured",
    "channel": "configured"
  },
  "version": "1.0.0"
}
```

## 🧪 Testing

### Local Testing

1. Start the development server: `npm run dev`
2. Open `http://localhost:3000`
3. Ask questions in the chat interface
4. Check browser console for any errors

### API Testing

```bash
# Test health endpoint
curl http://localhost:3000/api/health

# Test chat endpoint
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "How do I contact support?"}'
```

## 🔧 Customization

### Styling

- Modify `src/components/Chat.tsx` for UI changes
- Update `src/app/globals.css` for global styles
- Tailwind classes can be customized in `tailwind.config.js`

### AI Behavior

- Adjust system prompt in `src/app/api/chat/route.ts`
- Modify temperature and max_tokens for different response styles
- Change the number of Slack messages retrieved (currently 5)

### Slack Integration

- Update search parameters in `searchSlackSupport` function
- Add additional Slack API calls for more context
- Implement message threading or conversation history

## 🐛 Troubleshooting

### Common Issues

1. **Environment Variables Not Set**

   - Ensure `.env.local` exists and has correct values
   - Restart the development server after changes

2. **Slack API Errors**

   - Verify bot token is correct
   - Check bot has required permissions
   - Ensure support channel ID is correct

3. **OpenAI API Errors**

   - Verify API key is valid
   - Check API quota and billing
   - Ensure model name is correct

4. **Build Errors**
   - Run `npm install` to ensure all dependencies
   - Check TypeScript errors with `npm run lint`
   - Clear Next.js cache: `rm -rf .next`

### Debug Mode

Add `DEBUG=*` to environment variables for detailed logging.

## 📈 Monitoring

### Health Checks

- Use `/api/health` endpoint for monitoring
- Check environment variable status
- Monitor API response times

### Logs

- Check browser console for frontend errors
- Monitor server logs for API errors
- Use Vercel logs for production monitoring

## 🔒 Security Considerations

1. **API Keys** - Never commit `.env.local` to version control
2. **Rate Limiting** - Consider implementing rate limiting for production
3. **Input Validation** - Sanitize user inputs
4. **CORS** - Configure CORS for production domains
5. **HTTPS** - Always use HTTPS in production

## 📞 Support

For issues or questions:

1. Check the troubleshooting section
2. Review the API documentation
3. Test with the health endpoint
4. Check Slack bot permissions

---

**Ready to deploy to gpt.whyreboot.com!** 🚀
