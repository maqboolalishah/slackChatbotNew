#!/bin/bash

# Deployment script for Slack GPT Support

echo "🚀 Starting deployment process..."

# Check if environment variables are set
if [ -z "$OPENAI_API_KEY" ]; then
    echo "❌ OPENAI_API_KEY is not set"
    exit 1
fi

if [ -z "$SLACK_BOT_TOKEN" ]; then
    echo "❌ SLACK_BOT_TOKEN is not set"
    exit 1
fi

if [ -z "$SUPPORT_CHANNEL_ID" ]; then
    echo "❌ SUPPORT_CHANNEL_ID is not set"
    exit 1
fi

echo "✅ Environment variables are set"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the application
echo "🔨 Building the application..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful"
else
    echo "❌ Build failed"
    exit 1
fi

# Start the application
echo "🚀 Starting the application..."
npm start
