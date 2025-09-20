export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
  slackContext?: string;
}

export interface ChatResponse {
  response: string;
  slackContext: string;
}

export interface SlackMessage {
  text: string;
  channel?: {
    id: string;
  };
  timestamp?: string;
  user?: string;
}
