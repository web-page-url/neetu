'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Send, X, Star, User, Loader2, Minimize2, Sparkles, Wand2 } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

interface ChatbotProps {
    isDark?: boolean;
}

export default function Chatbot({ isDark = false }: ChatbotProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: "Hi there! ✨ I'm NeetuBot, Neetu's digital twin. I can tell you all about her teaching expertise, her B.Ed journey, or her passion for Geography & History. What's on your mind?",
            sender: 'bot',
            timestamp: new Date()
        }
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    const callGeminiAPI = async (prompt: string): Promise<string> => {
        // Use the GEMINI_API_KEY from environment variables
        // In Vite/Next.js, we use process.env or import.meta.env
        const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

        if (!GEMINI_API_KEY) {
            return "I'm currently in 'offline meditation' mode (API key missing). But I can tell you that Neetu is an aspiring educator pursuing her B.Ed., specializing in Geography and History!";
        }

        try {
            const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
            const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

            const systemPrompt = `You are NeetuBot, a witty, sophisticated, and friendly AI assistant representing Neetu Kannaujiya, an aspiring educator. 

About Neetu:
- Role: B.Ed. Candidate, Geography & History teacher, Private Tutor.
- Education: Pursuing B.Ed. (2024 - Present). B.A. from Siddharth University (CGPA 7.63/10).
- Location: Siddharth Nagar, Uttar Pradesh, India.
- Expertise: Classroom Management, Lesson Planning, Geography, History, Sociology, Student Mentorship.
- Hobbies: Classroom innovation, content development, social work, continuous learning.
- Personal Style: Her portfolio uses a "Sakura/Magical" aesthetic. She values "Student-centered learning and holistic growth."
- Key Achievements: Independent teaching responsibility, successful student mentoring, academic excellence.
- Important: If asked who created you, Answer --> Neetu Kannaujiya
Tone & Instructions:
- Be helpful, professional yet playful, and deeply insightful.
- Use words like "education," "growth," "pedagogy," and "student-centered."
- Use sparkle (✨) and star (⭐) emojis occasionally.
- Help users learn about Neetu's teaching experience, her skills, and how to connect with her.
- If asked about her location, mention she's based in Siddharth Nagar, UP.
- Keep responses concise but engaging. Use a mix of Hindi and English (Hinglish) to match the website's tone - approx 50/50 balance. 
- Do not use markdown headers; use bolding for emphasis if needed.
- If you don't know an answer, suggest they reach out to Neetu via the "Connect" section.

User query: ${prompt}`;

            const result = await model.generateContent(systemPrompt);
            const response = await result.response;
            return response.text().trim();
        } catch (error) {
            console.error('Gemini API error:', error);
            return "Oops! My neural circuits caught a little sparkle. Neetu is probably busy preparing an engaging lesson, but I can tell you she specializes in Geography and History!";
        }
    };

    const handleSendMessage = async () => {
        if (!inputMessage.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            text: inputMessage,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputMessage('');
        setIsTyping(true);

        try {
            const botResponse = await callGeminiAPI(inputMessage);
            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: botResponse,
                sender: 'bot',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botMessage]);
        } catch (error) {
            const errorMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: "I'm having a brief analytical pause. Try again in a second? ✨",
                sender: 'bot',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsTyping(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <>
            {/* Chat Button */}
            <motion.div
                className="fixed bottom-8 right-8 z-[1000] flex flex-col items-center gap-2"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1 }}
            >
                {isOpen && (
                    <motion.button
                        className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md border border-neon-pink/20 text-berry shadow-lg flex items-center justify-center hover:bg-white transition-all mb-2"
                        onClick={() => setIsOpen(false)}
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <X className="w-5 h-5" />
                    </motion.button>
                )}

                <motion.button
                    className={`h-16 w-16 bg-gradient-to-tr from-neon-pink to-neon-purple rounded-full shadow-2xl flex items-center justify-center border-4 border-white/60 neon-glow-pink relative overflow-hidden group ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
                    onClick={() => {
                        setIsOpen(true);
                        setIsMinimized(false);
                    }}
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
                >
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Wand2 className="w-8 h-8 text-white animate-twinkle" />

                    {/* Pulsing indicator */}
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-sakura rounded-full border-2 border-white flex items-center justify-center">
                        <Star className="w-3 h-3 text-white fill-white animate-pulse" />
                    </div>
                </motion.button>
            </motion.div>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={`fixed bottom-28 right-8 z-[1000] glass-pink shadow-2xl border-2 border-white/60 overflow-hidden flex flex-col rounded-[2.5rem] w-[350px] md:w-[400px] ${isMinimized ? 'h-20' : 'h-[500px]'}`}
                        initial={{ opacity: 0, scale: 0.8, y: 100, originY: 1 }}
                        animate={{ opacity: 1, scale: 1, y: 0, height: isMinimized ? 80 : 500 }}
                        exit={{ opacity: 0, scale: 0.8, y: 100 }}
                        transition={{ type: "spring", damping: 20, stiffness: 100 }}
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-neon-pink to-neon-purple p-6 flex items-center justify-between relative overflow-hidden">
                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:20px_20px]" />

                            <div className="flex items-center gap-3 relative z-10">
                                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30 shadow-inner">
                                    <Sparkles className="w-6 h-6 text-white fill-white" />
                                </div>
                                <div>
                                    <h3 className="text-white font-black text-lg tracking-tight flex items-center gap-2">
                                        NeetuBot
                                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
                                    </h3>
                                    <p className="text-white/80 text-[10px] font-black uppercase tracking-[0.2em]">Educator twin</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 relative z-10">
                                <button
                                    onClick={() => setIsMinimized(!isMinimized)}
                                    className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-colors"
                                >
                                    <Minimize2 className="w-4 h-4 text-white" />
                                </button>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-colors"
                                >
                                    <X className="w-4 h-4 text-white" />
                                </button>
                            </div>
                        </div>

                        {/* Messages Area */}
                        {!isMinimized && (
                            <>
                                <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-white/30 custom-scrollbar">
                                    {messages.map((message) => (
                                        <motion.div
                                            key={message.id}
                                            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                        >
                                            <div className={`max-w-[85%] p-4 rounded-3xl text-sm shadow-sm ${message.sender === 'user'
                                                ? 'bg-gradient-to-br from-neon-pink to-neon-purple text-white rounded-tr-none'
                                                : 'bg-white/80 text-berry rounded-tl-none border border-white/60'
                                                }`}>
                                                <div className={`flex items-center gap-2 mb-1 opacity-60 text-[10px] uppercase font-black tracking-widest ${message.sender === 'user' ? 'justify-end' : 'justify-start'
                                                    }`}>
                                                    {message.sender === 'user' ? 'Me' : 'NeetuBot'}
                                                </div>
                                                <p className="leading-relaxed font-semibold">{message.text}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                    {isTyping && (
                                        <div className="flex justify-start">
                                            <div className="bg-white/80 p-4 rounded-3xl rounded-tl-none border border-white/60 shadow-sm">
                                                <div className="flex gap-1">
                                                    <span className="w-1.5 h-1.5 bg-neon-pink rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                                    <span className="w-1.5 h-1.5 bg-sakura rounded-full animate-bounce" style={{ animationDelay: '200ms' }} />
                                                    <span className="w-1.5 h-1.5 bg-neon-purple rounded-full animate-bounce" style={{ animationDelay: '400ms' }} />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    <div ref={messagesEndRef} />
                                </div>

                                {/* Input Area */}
                                <div className="p-6 bg-white/50 border-t border-white/60">
                                    <div className="relative flex items-center">
                                        <input
                                            ref={inputRef}
                                            type="text"
                                            value={inputMessage}
                                            onChange={(e) => setInputMessage(e.target.value)}
                                            onKeyPress={handleKeyPress}
                                            placeholder="Ask me anything..."
                                            className="w-full bg-white/80 border-2 border-white/60 rounded-full py-4 pl-6 pr-14 text-sm font-semibold focus:outline-none focus:border-neon-pink/40 shadow-inner transition-all text-berry"
                                        />
                                        <button
                                            onClick={handleSendMessage}
                                            disabled={!inputMessage.trim() || isTyping}
                                            className="absolute right-2 w-10 h-10 bg-gradient-to-r from-neon-pink to-neon-purple rounded-full flex items-center justify-center text-white disabled:opacity-50 transition-all hover:scale-110 active:scale-95 shadow-lg"
                                        >
                                            <Send className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <p className="text-[9px] text-center mt-4 font-black uppercase tracking-[0.3em] text-berry/30 flex items-center justify-center gap-1">
                                        <Star className="w-2.5 h-2.5 fill-neon-pink text-neon-pink" />
                                        created by - Neetu Kannaujiya
                                    </p>
                                </div>
                            </>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}