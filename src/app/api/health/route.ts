import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Check if required environment variables are set
    const openaiKey = process.env.OPENAI_API_KEY;
    const slackToken = process.env.SLACK_BOT_TOKEN;
    const channelId = process.env.SUPPORT_CHANNEL_ID;

    const status = {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      environment: {
        openai: openaiKey ? 'configured' : 'missing',
        slack: slackToken ? 'configured' : 'missing',
        channel: channelId ? 'configured' : 'missing',
      },
      version: '1.0.0',
    };

    const hasAllConfig = openaiKey && slackToken && channelId;

    return NextResponse.json(status, {
      status: hasAllConfig ? 200 : 503,
    });
  } catch {
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
