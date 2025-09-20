#!/bin/bash

echo "🧪 Testing WhyReboot GPT Support"
echo "==============================="
echo ""

# Test health endpoint
echo "📊 Testing Health Endpoint..."
HEALTH_RESPONSE=$(curl -s http://localhost:3000/api/health)
echo "Response: $HEALTH_RESPONSE"
echo ""

# Test chat endpoint
echo "💬 Testing Chat Endpoint..."
CHAT_RESPONSE=$(curl -s -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "How do I contact support?"}')

echo "Response: $CHAT_RESPONSE"
echo ""

# Check if Slack context was found
if echo "$CHAT_RESPONSE" | grep -q "No relevant support messages found"; then
    echo "⚠️  Warning: No Slack messages found"
    echo "   This means the Slack bot token needs proper permissions"
    echo "   Follow the setup guide to fix this"
else
    echo "✅ Slack integration working!"
fi

echo ""
echo "🎯 Next Steps:"
echo "1. Fix Slack bot permissions (see setup-guide.sh)"
echo "2. Deploy to Vercel (see DEPLOYMENT_GUIDE.md)"
echo "3. Configure domain: gpt.whyreboot.com"
echo ""
