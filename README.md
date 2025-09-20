# Support Assistant - GPT & Slack Integration

A Next.js application that allows users to ask questions and get AI-powered responses based on Slack support channel discussions.

## Features

- 🤖 AI-powered responses using OpenAI GPT-4
- 📱 Modern chat interface similar to ChatGPT
- 🔍 Real-time search through Slack support channels
- 💬 Message history and context awareness
- ⚡ Fast and responsive UI with Tailwind CSS

## Prerequisites

- Node.js 18+ 
- OpenAI API key
- Slack Bot Token with appropriate permissions
- Slack Support Channel ID

## Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd slack-gpt-support
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env.local` file in the root directory with:
   ```env
   # OpenAI
   OPENAI_API_KEY=your_openai_api_key_here
   
   # Slack
   SLACK_BOT_TOKEN=your_slack_bot_token_here
   SUPPORT_CHANNEL_ID=your_support_channel_id_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## Slack Bot Setup

To use this application, you need a Slack bot with the following permissions:

- `search:read` - To search messages in channels
- `channels:read` - To read channel information
- `groups:read` - To read private channel information

### Required Slack App Scopes:
- `search:read`
- `channels:read`
- `groups:read`

## API Endpoints

### POST /api/chat
Sends a message to the AI assistant with Slack context.

**Request Body:**
```json
{
  "message": "Your question here"
}
```

**Response:**
```json
{
  "response": "AI-generated response",
  "slackContext": "Information about Slack messages found"
}
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

The application can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `OPENAI_API_KEY` | Your OpenAI API key | Yes |
| `SLACK_BOT_TOKEN` | Your Slack bot token | Yes |
| `SUPPORT_CHANNEL_ID` | ID of your Slack support channel | Yes |

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **OpenAI API** - AI responses
- **Slack Web API** - Slack integration
- **Lucide React** - Icons

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see LICENSE file for details
