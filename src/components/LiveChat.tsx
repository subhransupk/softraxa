import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type Message = {
    id: string;
    text: string;
    sender: "user" | "bot";
    timestamp: Date;
};

const LiveChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [inputText, setInputText] = useState("");
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "welcome-1",
            text: "Hello! Welcome to Softraxa.",
            sender: "bot",
            timestamp: new Date(),
        },
        {
            id: "welcome-2",
            text: "How can we help you create something extraordinary today?",
            sender: "bot",
            timestamp: new Date(Date.now() + 500),
        },
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
            // Focus input when opened
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isOpen, messages, isTyping]);

    const handleSendMessage = (e?: React.FormEvent) => {
        e?.preventDefault();

        if (!inputText.trim()) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            text: inputText,
            sender: "user",
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMsg]);
        setInputText("");
        setIsTyping(true);

        // Simulate bot response
        setTimeout(() => {
            const botResponses = [
                "That's a great question! Our team specializes in that area.",
                "Could you provide a few more details so I can guide you better?",
                "I'd be happy to schedule a consultation with one of our experts.",
                "Thanks for reaching out! A member of our team receives this instantly.",
                "We craft premium digital experiences. Let's discuss your vision.",
            ];
            const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];

            const botMsg: Message = {
                id: (Date.now() + 1).toString(),
                text: randomResponse,
                sender: "bot",
                timestamp: new Date(),
            };

            setMessages((prev) => [...prev, botMsg]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            {/* Chat Window */}
            <div
                className={cn(
                    "mb-4 w-[350px] sm:w-[380px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl transition-all duration-300 origin-bottom-right",
                    isOpen
                        ? "translate-y-0 opacity-100 scale-100 pointer-events-auto"
                        : "translate-y-10 opacity-0 scale-95 pointer-events-none h-0"
                )}
            >
                {/* Header */}
                <div className="bg-dark-surface/90 backdrop-blur-md p-4 border-b border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <div className="w-10 h-10 rounded-full bg-violet-500/10 flex items-center justify-center border border-violet-500/20">
                                <MessageCircle className="w-5 h-5 text-violet-500" />
                            </div>
                            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-dark-surface"></span>
                        </div>
                        <div>
                            <h3 className="font-display font-semibold text-white">Softraxa Support</h3>
                            <p className="text-xs text-white/50">Typically replies immediately</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-1">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-1.5 hover:bg-white/5 rounded-full text-white/60 hover:text-white transition-colors"
                        >
                            <Minus className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Messages Area */}
                <div className="bg-dark/95 backdrop-blur-xl h-[400px] flex flex-col">
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                        <div className="text-center py-4">
                            <p className="text-xs text-white/30 uppercase tracking-widest">Today</p>
                        </div>

                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={cn(
                                    "flex w-full mb-2",
                                    msg.sender === "user" ? "justify-end" : "justify-start"
                                )}
                            >
                                <div
                                    className={cn(
                                        "max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed",
                                        msg.sender === "user"
                                            ? "bg-violet-600 text-white rounded-br-none"
                                            : "bg-white/5 border border-white/5 text-gray-200 rounded-bl-none"
                                    )}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}

                        {isTyping && (
                            <div className="flex justify-start w-full">
                                <div className="bg-white/5 border border-white/5 rounded-2xl rounded-bl-none px-4 py-3 flex items-center gap-1.5 min-h-[44px]">
                                    <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-[bounce_1.4s_infinite_0ms]"></span>
                                    <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-[bounce_1.4s_infinite_200ms]"></span>
                                    <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-[bounce_1.4s_infinite_400ms]"></span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-4 border-t border-white/5 bg-dark-surface/50">
                        <form
                            onSubmit={handleSendMessage}
                            className="relative flex items-center gap-2"
                        >
                            <input
                                ref={inputRef}
                                type="text"
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                placeholder="Type a message..."
                                className="w-full bg-white/5 border border-white/10 rounded-full pl-4 pr-12 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all"
                            />
                            <Button
                                type="submit"
                                size="icon"
                                disabled={!inputText.trim()}
                                className={cn(
                                    "absolute right-1 top-1 w-9 h-9 rounded-full transition-all duration-300",
                                    inputText.trim()
                                        ? "bg-violet-600 hover:bg-violet-500 text-white"
                                        : "bg-transparent text-white/20 hover:bg-transparent"
                                )}
                            >
                                <Send className="w-4 h-4 ml-0.5" />
                            </Button>
                        </form>
                        <div className="text-center mt-2">
                            <p className="text-[10px] text-white/20">
                                Powered by Softraxa AI
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Trigger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={cn(
                    "h-14 w-14 rounded-full flex items-center justify-center shadow-lg shadow-violet-500/20 transition-all duration-300 group z-50",
                    isOpen
                        ? "bg-dark-surface border border-white/10 rotate-90"
                        : "bg-violet-600 hover:bg-violet-500 hover:scale-110"
                )}
                aria-label="Open chat"
            >
                <span className={cn(
                    "absolute inset-0 rounded-full bg-violet-500 opacity-0 transition-opacity duration-1000",
                    !isOpen && "animate-ping opacity-20"
                )}></span>

                {isOpen ? (
                    <X className="w-6 h-6 text-white transition-transform" />
                ) : (
                    <MessageCircle className="w-6 h-6 text-white fill-current" />
                )}
            </button>
        </div>
    );
};

export default LiveChat;
