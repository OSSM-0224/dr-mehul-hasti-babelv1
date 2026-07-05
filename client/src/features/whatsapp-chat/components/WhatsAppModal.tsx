"use client"

import React, { useState, useEffect, useRef } from "react";
import { X, PaperPlaneRight, ShieldCheck, Heart } from "@phosphor-icons/react";
import { useApp } from "@/src/hooks/index.js";

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBookingModal: () => void;
}

interface Message {
  sender: "user" | "bot";
  text: string;
  time: string;
}

export default function WhatsAppModal({ isOpen, onClose, onOpenBookingModal }: WhatsAppModalProps) {
  const { selectedBranch } = useApp();
  const doctorName = selectedBranch === "chembur" ? "Dr. Saloni Mehul Hasti" : "Dr. Mehul Hasti Babel";

  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    if (isOpen) {
      setMessages([
        {
          sender: "bot",
          text: `Hello! Welcome to Unique Dental Care Support. I am Aarav, assistant to ${doctorName}. How can I help you design your healthy smile today?`,
          time: "Just now"
        }
      ]);
    }
  }, [isOpen, doctorName]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  if (!isOpen) return null;

  const quickReplies = [
    "Is the Laser RCT actually painless?",
    "Can I get a dental crown in 1 day?",
    "What is the cost of robotic implants?",
    "Book an appointment for today"
  ];

  const handleSend = (textToSend: string) => {
    if (!textToSend.trim()) return;

    const currentTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const userMsg: Message = { sender: "user", text: textToSend, time: currentTime };
    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setIsTyping(true);

    setTimeout(() => {
      let responseText = "";
      const query = textToSend.toLowerCase();

      if (query.includes("rct") || query.includes("root") || query.includes("pain")) {
        responseText = `Yes, absolutely! Our Root Canal is 100% painless. ${doctorName.split(" ")[0] + " " + doctorName.split(" ")[1]} uses dental lasers to sterilize canals instantly, which minimizes post-op discomfort. Most patients describe feeling nothing at all!`;
      } else if (query.includes("crown") || query.includes("1 day") || query.includes("one day")) {
        responseText = "Indeed! We offer premium zirconia and E.max ceramic crowns custom-designed and custom-milled for a perfect, long-lasting fit.";
      } else if (query.includes("implant")) {
        responseText = `${doctorName} specializes in advanced dental implants. Using digital CBCT 3D bone mapping, we ensure perfect angle placement and ultra-fast healing. Let's schedule a diagnostic consultation!`;
      } else if (query.includes("book") || query.includes("appointment") || query.includes("schedule") || query.includes("today")) {
        responseText = "I can certainly help arrange that! You can click 'Book Slot' right inside this chat, or fill out the booking form on our website.";
      } else {
        responseText = `Thank you for the message. At Unique Dental Care, we provide advanced luxury aesthetics and painless clinical dentistry. Our clinic director ${doctorName} is available for specialized consultations. Would you like to schedule an appointment?`;
      }

      const botMsg: Message = { sender: "bot", text: responseText, time: currentTime };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div
        className="bg-slate-100 rounded-2xl shadow-2xl max-w-md w-full overflow-hidden flex flex-col h-[550px] border border-slate-200 animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* WhatsApp Custom Header */}
        <div className="bg-[#075E54] p-4 text-white flex items-center justify-between shadow-md">
          <div className="flex items-center space-x-3">
            {/* Circular Avatar */}
            <div className="relative w-10 h-10 rounded-full bg-teal-100/20 overflow-hidden border border-white/20 flex items-center justify-center">
              <span className="font-playfair font-bold text-lg text-white">D</span>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-[#075E54]" />
            </div>
            <div className="text-left font-inter">
              <h3 className="font-bold text-sm leading-tight">Unique Dental Care</h3>
              <p className="text-[10px] text-teal-100 font-medium">Aarav (Assistant) • Online</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => {
                onClose();
                onOpenBookingModal();
              }}
              className="text-xs bg-emerald-600 hover:bg-emerald-700 px-2.5 py-1.5 rounded font-inter font-bold transition-all border border-emerald-500/30 cursor-pointer text-white"
            >
              Book Slot
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-black/10 text-white transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X size={18} weight="bold" />
            </button>
          </div>
        </div>

        {/* WhatsApp Subtitle Bar */}
        <div className="bg-[#128C7E] px-4 py-1.5 text-white/90 text-[10px] font-inter flex justify-between items-center select-none shadow-sm text-left">
          <span className="flex items-center"><ShieldCheck size={14} className="mr-1 text-emerald-300" weight="fill" /> End-to-end clinical security</span>
          <span className="flex items-center"><Heart size={14} className="mr-1 text-rose-300" weight="fill" /> Pain-free treatment</span>
        </div>

        {/* Chat Message Stream */}
        <div
          className="flex-grow p-4 overflow-y-auto space-y-4 text-left"
          style={{
            backgroundImage: "url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')",
            backgroundSize: "cover",
            backgroundBlendMode: "overlay"
          }}
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex flex-col max-w-[85%] rounded-lg px-3 py-2 text-sm shadow-sm font-inter relative ${
                msg.sender === "user"
                  ? "bg-[#DCF8C6] text-slate-800 ml-auto border-l-4 border-emerald-400"
                  : "bg-white text-slate-800 border-l-4 border-teal-500"
              }`}
            >
              <p className="leading-relaxed whitespace-pre-line text-xs sm:text-sm">{msg.text}</p>
              <span className="block text-[8px] text-slate-400 text-right mt-1 select-none font-semibold uppercase">
                {msg.time}
              </span>
            </div>
          ))}

          {isTyping && (
            <div className="bg-white text-slate-800 rounded-lg px-4 py-2.5 text-sm shadow-sm font-inter w-fit border-l-4 border-teal-500 flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" />
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:0.2s]" />
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:0.4s]" />
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* WhatsApp Quick Reply Chips */}
        <div className="bg-white/80 p-2.5 flex items-center space-x-2 overflow-x-auto border-t border-slate-150 shrink-0">
          {quickReplies.map((reply, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(reply)}
              className="bg-teal-50 border border-teal-100 hover:bg-teal-100 text-teal-800 text-[11px] font-inter font-bold px-3 py-1.5 rounded-full shrink-0 transition-colors cursor-pointer"
            >
              {reply}
            </button>
          ))}
        </div>

        {/* Message Input Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend(inputText);
          }}
          className="p-3 bg-white border-t border-slate-150 flex items-center space-x-2 shrink-0"
        >
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type a clinical message..."
            className="flex-grow px-4 py-2.5 rounded-full border border-slate-200 text-xs sm:text-sm focus:border-secondary outline-none font-inter bg-slate-50 text-slate-800"
          />
          <button
            type="submit"
            className="p-2.5 rounded-full bg-[#075E54] hover:bg-[#128C7E] text-white shadow-md transition-colors shrink-0 cursor-pointer flex items-center justify-center"
            aria-label="Send message"
          >
            <PaperPlaneRight size={18} weight="fill" />
          </button>
        </form>

      </div>
    </div>
  );
}
