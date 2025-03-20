import React, { useState ,useEffect} from 'react';
import { MessageSquare, Send, User, Bot, ChevronRight, Star, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from "react-router-dom";
interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "Mumbai",
    text: "The AI assistant helped me understand my rights as a tenant. Very clear and helpful responses!",
    rating: 5,
    date: "2024-02-15"
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Delhi",
    text: "Got instant clarity on consumer protection laws. Saved me time and money on initial legal consultation.",
    rating: 5,
    date: "2024-02-10"
  },
  {
    id: 3,
    name: "Amit Patel",
    location: "Bangalore",
    text: "The suggestions were practical and helped me take the right steps for my business registration.",
    rating: 4,
    date: "2024-02-05"
  }
];

const suggestedQuestions = [
  "What are my rights as a tenant?",
  "How do I file a consumer complaint?",
  "What's the process for divorce in India?",
  "How can I register a company?",
];

const previousQuestions = [
  {
    question: "What documents are needed for company registration?",
    answer: "For company registration in India, you'll need: 1) Director's ID proof 2) Address proof 3) Passport-size photos 4) Digital signature certificate 5) Proposed company name..."
  },
  {
    question: "How long does a civil case typically take?",
    answer: "The duration of a civil case in India varies, but typically takes 2-3 years. Factors affecting duration include case complexity, court backlog, and cooperation between parties..."
  },
  {
    question: "What are the grounds for divorce in India?",
    answer: "Common grounds for divorce in India include: 1) Cruelty 2) Adultery 3) Desertion 4) Conversion 5) Mental disorder 6) Mutual consent. The process and requirements vary by personal law..."
  }
];

const AIBot = () => {


const navigate=useNavigate();

 async function fun() {
    if (!localStorage.getItem("user")) {
      navigate("/signup");
    } 
  }

  useEffect(() => {
    fun();
  }, []);





  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your AI Legal Assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: text,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: `Thank you for your question about "${text}". As an AI assistant, I can provide general legal information, but please note that this should not be considered as legal advice. For specific legal matters, I recommend consulting with a qualified lawyer.`,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuestionClick = (question: string) => {
    handleSendMessage(question);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <MessageSquare className="mx-auto h-12 w-12 text-primary-600" />
        <h1 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
          AI Legal Assistant
        </h1>
        <p className="mt-4 text-lg text-gray-500">
          Get instant answers to your legal questions powered by AI
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Suggested Questions */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-1 bg-white rounded-lg shadow-lg p-6"
        >
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Suggested Questions
          </h2>
          <div className="space-y-3">
            {suggestedQuestions.map((question, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full text-left p-3 rounded-lg bg-gradient-to-r from-primary-50 to-secondary-50 hover:from-primary-100 hover:to-secondary-100 flex items-center justify-between group transition-all duration-300"
                onClick={() => handleQuestionClick(question)}
              >
                <span className="text-sm text-gray-700">{question}</span>
                <ChevronRight className="h-4 w-4 text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Chat Interface */}
        <div className="lg:col-span-3 bg-white rounded-lg shadow-lg flex flex-col h-[600px]">
          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            <AnimatePresence>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`flex items-start space-x-3 ${
                    message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}
                >
                  <div
                    className={`flex items-center justify-center h-8 w-8 rounded-full ${
                      message.sender === 'user'
                        ? 'bg-primary-500'
                        : 'bg-secondary-500'
                    }`}
                  >
                    {message.sender === 'user' ? (
                      <User className="h-5 w-5 text-white" />
                    ) : (
                      <Bot className="h-5 w-5 text-white" />
                    )}
                  </div>
                  <div
                    className={`flex-1 rounded-2xl p-4 ${
                      message.sender === 'user'
                        ? 'bg-primary-500 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p
                      className={`text-xs mt-1 ${
                        message.sender === 'user'
                          ? 'text-primary-200'
                          : 'text-gray-500'
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {isTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center space-x-2 text-gray-500"
              >
                <Bot className="h-5 w-5" />
                <span>AI is typing...</span>
              </motion.div>
            )}
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-200 p-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputMessage);
              }}
              className="flex space-x-4"
            >
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your legal question..."
                className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-2 rounded-lg flex items-center space-x-2 hover:from-primary-600 hover:to-secondary-600 transition-all duration-300"
              >
                <span>Send</span>
                <Send className="h-4 w-4" />
              </motion.button>
            </form>
          </div>
        </div>
      </div>

      {/* New Sections */}
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Previous Questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Previously Asked Questions
          </h2>
          <div className="space-y-6">
            {previousQuestions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="border-l-4 border-primary-500 pl-4 py-2"
              >
                <h3 className="font-medium text-gray-900">{item.question}</h3>
                <p className="mt-2 text-sm text-gray-600 line-clamp-3">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            What People Say
          </h2>
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-gradient-to-r from-primary-50 to-secondary-50 p-6 rounded-lg"
              >
                <Quote className="absolute top-4 right-4 h-8 w-8 text-primary-200" />
                <div className="flex items-center mb-4">
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.text}</p>
                <p className="mt-2 text-sm text-gray-500">{testimonial.date}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AIBot;