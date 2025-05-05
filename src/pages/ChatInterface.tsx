import React, { useState } from 'react';
import { Send, Bot, User, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Message {
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'ai',
      content: 'Hello! I\'m your AI-powered DeFi assistant. How can I help you optimize your crypto strategy today?',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      type: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    setTimeout(() => {
      const aiResponse: Message = {
        type: 'ai',
        content: getAIResponse(input),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);

    setInput('');
  };

  const getAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('apy') || input.includes('yield')) {
      return 'Based on current market conditions, here are the safest yield options:\n\n' +
             '1. Lido stETH: 5.2% APY (Low Risk)\n' +
             '2. Aave USDC: 4.8% APY (Low Risk)\n' +
             '3. Curve 3pool: 4.2% APY (Low Risk)\n\n' +
             'Would you like me to simulate any of these strategies for you?';
    }
    
    if (input.includes('swap') || input.includes('exchange')) {
      return 'I can help you swap tokens with the best rates and lowest fees. ' +
             'Current recommendations:\n\n' +
             '• Use 1inch for best rates\n' +
             '• Current gas fees: 25 gwei (optimal time to trade)\n' +
             '• Slippage protection enabled\n\n' +
             'Would you like me to prepare a swap transaction for you?';
    }
    
    return 'I can help you with:\n\n' +
           '• Finding the best yields\n' +
           '• Swapping tokens efficiently\n' +
           '• Analyzing risks and opportunities\n' +
           '• Monitoring your portfolio\n\n' +
           'What would you like to know more about?';
  };

  return (
    <div className="min-h-screen bg-slate-900 pt-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-6 flex items-center">
          <Link to="/" className="text-indigo-400 hover:text-indigo-300 flex items-center">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
        </div>
        
        <div className="bg-slate-800 rounded-xl shadow-xl border border-slate-700 overflow-hidden">
          <div className="bg-slate-900 p-4 border-b border-slate-700">
            <div className="flex items-center">
              <Bot className="h-8 w-8 text-indigo-500 mr-3" />
              <div>
                <h2 className="text-lg font-semibold text-white">SageChain AI Assistant</h2>
                <p className="text-sm text-slate-400">Powered by advanced DeFi intelligence</p>
              </div>
            </div>
          </div>

          <div className="h-[600px] overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.type === 'user' ? 'bg-indigo-600 ml-3' : 'bg-slate-700 mr-3'
                  }`}>
                    {message.type === 'user' ? (
                      <User className="h-5 w-5 text-white" />
                    ) : (
                      <Bot className="h-5 w-5 text-white" />
                    )}
                  </div>
                  <div className={`rounded-lg p-4 ${
                    message.type === 'user'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-slate-700 text-slate-200'
                  }`}>
                    <p className="whitespace-pre-wrap">{message.content}</p>
                    <span className="text-xs opacity-70 mt-2 block">
                      {message.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-700 p-4 bg-slate-800">
            <form onSubmit={handleSubmit} className="flex space-x-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about yields, swaps, or strategy suggestions..."
                className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors"
              >
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;