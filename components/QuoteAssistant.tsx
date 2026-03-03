import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, MessageSquare, RefreshCw } from 'lucide-react';
import { ChatMessage, LoadingState } from '../types';
import { sendMessageToGemini, initializeChat } from '../services/geminiService';

interface QuoteAssistantProps {
  initialMessage?: string;
}

const QuoteAssistant: React.FC<QuoteAssistantProps> = ({ initialMessage }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hello! I'm Papa's Bot. Tell me what you need printed (e.g., 'I need a shop sign' or 'Vehicle branding for a bakkie'), and I'll help you get the details right for a quote." }
  ]);
  const [input, setInput] = useState('');
  const [loadingState, setLoadingState] = useState<LoadingState>(LoadingState.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    initializeChat();
  }, []);

  useEffect(() => {
    if (initialMessage) {
      setInput(`I would like a quote for ${initialMessage}. Details: `);
      // Optional: Focus the input. We can use a ref for the input if needed.
    }
  }, [initialMessage]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSend = async () => {
    if (!input.trim() || loadingState === LoadingState.LOADING) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setLoadingState(LoadingState.LOADING);

    const responseText = await sendMessageToGemini(userMessage);

    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setLoadingState(LoadingState.SUCCESS);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section id="quote-assistant" className="py-20 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px]">
          
          {/* Sidebar Info */}
          <div className="md:w-1/3 bg-brand-dark p-8 text-white flex flex-col justify-between">
            <div>
              <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-brand-yellow" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Smart Quote Assistant</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Get an instant estimated cost for your project. Our AI assistant can guide you through options for vinyls, banners, and signage boards.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-sm text-gray-400">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                  AI Agent Online
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-2 font-bold">Popular Requests</p>
                  <ul className="text-sm space-y-2 text-gray-300">
                    <li className="cursor-pointer hover:text-brand-cyan transition-colors" onClick={() => setInput("I need 500 business cards")}>• "I need 500 business cards"</li>
                    <li className="cursor-pointer hover:text-brand-cyan transition-colors" onClick={() => setInput("Quote for a 3x1m PVC banner")}>• "Quote for a 3x1m PVC banner"</li>
                    <li className="cursor-pointer hover:text-brand-cyan transition-colors" onClick={() => setInput("Branding for a delivery van")}>• "Branding for a delivery van"</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-8 text-xs text-gray-500">
              Powered by Gemini AI. Material availability subject to confirmation.
            </div>
          </div>

          {/* Chat Interface */}
          <div className="md:w-2/3 flex flex-col">
            {/* Messages Area */}
            <div className="flex-1 p-6 overflow-y-auto bg-gray-50 h-[400px] md:h-auto scrollbar-hide">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex mb-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.role === 'model' && (
                    <div className="w-8 h-8 rounded-full bg-brand-cyan flex items-center justify-center mr-2 flex-shrink-0 mt-1">
                      <MessageSquare className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <div 
                    className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-brand-black text-white rounded-tr-none' 
                        : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-tl-none'
                    }`}
                  >
                    {msg.text.split('\n').map((line, i) => (
                      <span key={i} className="block min-h-[1em]">{line}</span>
                    ))}
                  </div>
                </div>
              ))}
              
              {loadingState === LoadingState.LOADING && (
                <div className="flex justify-start mb-4">
                   <div className="w-8 h-8 rounded-full bg-brand-cyan flex items-center justify-center mr-2 flex-shrink-0 mt-1">
                      <MessageSquare className="w-4 h-4 text-white" />
                    </div>
                  <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 flex items-center gap-2">
                    <RefreshCw className="w-4 h-4 animate-spin text-brand-cyan" />
                    <span className="text-gray-400 text-sm">Thinking...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-100">
              <div className="flex items-center gap-2 relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Describe what you need..."
                  className="w-full bg-gray-100 text-gray-800 rounded-full pl-5 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:bg-white transition-all"
                  disabled={loadingState === LoadingState.LOADING}
                />
                <button 
                  onClick={handleSend}
                  disabled={loadingState === LoadingState.LOADING || !input.trim()}
                  className="absolute right-2 p-2 bg-brand-cyan text-white rounded-full hover:bg-brand-magenta transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteAssistant;