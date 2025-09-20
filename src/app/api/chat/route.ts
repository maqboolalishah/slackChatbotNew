import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { WebClient } from '@slack/web-api';
import { SlackMessage } from '@/types';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const slack = new WebClient(process.env.SLACK_BOT_TOKEN);

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    // Search Slack support channel for relevant messages
    const slackMessages = await searchSlackSupport(message);
    
    // Create context from Slack messages
    const context = slackMessages.length > 0 
      ? `Based on our support channel discussions:\n${slackMessages.map(msg => `- ${msg.text}`).join('\n')}\n\nUser question: ${message}`
      : `User question: ${message}`;

    // Get response from OpenAI
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a helpful support assistant. Use the provided context from our Slack support channel to answer questions accurately and helpfully. If the context doesn't contain relevant information, provide general helpful guidance."
        },
        {
          role: "user",
          content: context
        }
      ],
      max_tokens: 1000,
      temperature: 0.7,
    });

    const response = completion.choices[0]?.message?.content || 'Sorry, I could not generate a response.';

    return NextResponse.json({ 
      response,
      slackContext: slackMessages.length > 0 ? `Found ${slackMessages.length} relevant messages from support channel` : 'No relevant support messages found'
    });

  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

async function searchSlackSupport(query: string): Promise<SlackMessage[]> {
  try {
    // Search for messages in the support channel
    const result = await slack.search.messages({
      query: query,
      count: 10,
      sort: 'timestamp',
      sort_dir: 'desc'
    });

    if (result.messages?.matches) {
      // Filter to only include messages from our support channel
      const supportChannelId = process.env.SUPPORT_CHANNEL_ID;
      return result.messages.matches.filter((msg: SlackMessage) => 
        msg.channel?.id === supportChannelId
      ).slice(0, 5); // Limit to 5 most relevant messages
    }

    return [];
  } catch (error) {
    console.error('Error searching Slack:', error);
    return [];
  }
}
