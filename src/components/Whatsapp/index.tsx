"use client";

import { useEffect, useState } from "react";
import { MessageCircle, Bot, X } from "lucide-react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll(); // run once on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 👇 Hide completely before scroll
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-20 right-5 flex flex-col items-end gap-3 z-50 ">

      {/* Chatbot Panel */}
      {chatOpen && (
        <div className="w-80 h-96 bg-white rounded-xl shadow-xl flex flex-col overflow-hidden ">
          
          <div className="flex justify-between items-center p-3 border-b">
            <h2 className="font-semibold">Chatbot</h2>
            <button onClick={() => setChatOpen(false)}>
              <X size={18} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            <div className="bg-gray-100 p-2 rounded-lg w-fit">
              👋 Hi! How can I help you?
            </div>

            <div className="bg-blue-500 text-white p-2 rounded-lg w-fit self-end">
              Hello!
            </div>

            <div className="bg-gray-100 p-2 rounded-lg w-fit">
              Tell me your query 😊
            </div>
          </div>

          <div className="p-3 border-t">
            <input
              type="text"
              placeholder="Type a message..."
              className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none"
            />
          </div>
        </div>
      )}

      {/* Options */}
      {open && (
        <>
          <a
            href="https://wa.me/917982616770"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg"
          >
            <MessageCircle size={20} />
            WhatsApp
          </a>

          <button
            onClick={() => {
              setChatOpen(true);
              setOpen(false);
            }}
            className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            <Bot size={20} />
            Chatbot
          </button>
        </>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-primary text-white p-4 rounded-full shadow-xl cursor-pointer"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
}