"use client";

import { useEffect, useState } from "react";
import { MessageCircle, Bot, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
  if (chatOpen) {
    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";
  } else {
    document.body.style.overflow = "auto";
    document.body.style.touchAction = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
    document.body.style.touchAction = "auto";
  };
}, [chatOpen]);


  const faqs = [
    {
      question: "What services do you provide?",
      answer:
        "We provide Web Development, Mobile App Development, WordPress Development, UI/UX Design, SEO and Digital Marketing services.",
    },
    {
      question: "How much does a website cost?",
      answer:
        "Website cost depends on requirements. Basic business websites usually start from ₹10,000+.",
    },
    {
      question: "How long does development take?",
      answer:
        "Most websites are completed within 1–4 weeks depending on project complexity.",
    },
    {
      question: "Do you provide support?",
      answer:
        "Yes, we provide ongoing maintenance, support and updates after project delivery.",
    },
    {
      question: "Can you redesign my website?",
      answer:
        "Absolutely. We can redesign your existing website with a modern UI, better performance and SEO optimization.",
    },
  ];

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Welcome! How can we help you today? Select a question below.",
    },
  ]);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 
  const handleFaqClick = (faq: {
  question: string;
  answer: string;
}) => {
  setMessages((prev) => [
    ...prev,
    {
      sender: "user",
      text: faq.question,
    },
    {
      sender: "bot",
      text: faq.answer,
    },
  ]);

  setTimeout(() => {
    const phoneNumber = "917982616770";

    const message = encodeURIComponent(
      `Hello, I have a question:\n\n${faq.question}`
    );

    window.open(
      `https://wa.me/${phoneNumber}?text=${message}`,
      "_blank"
    );
  }, 2000);
};
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-20 right-5 flex flex-col items-end gap-3 z-50">
    {/* <div className="fixed bottom-24 right-5 "> */}
      {/* Chat Window */}
     {chatOpen && (
  <div className="z-50 w-[380px] max-h-[75vh] bg-white rounded-[30px] overflow-hidden border border-slate-200 shadow-[0_25px_80px_rgba(0,0,0,0.18)]">

    {/* Header */}
    <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-5">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
              <Bot size={24} className="text-blue-600" />
            </div>

            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></span>
          </div>

          <div>
            <h3 className="text-white font-semibold">
              Customer Support
            </h3>

            <p className="text-xs text-blue-100">
              Online now
            </p>
          </div>
        </div>

        <button
          onClick={() => setChatOpen(false)}
          className="text-white cursor-pointer"
        >
          <X size={18} />
        </button>
      </div>
    </div>

    {/* Messages */}
    <div className="h-[180px] overflow-y-auto p-4 space-y-3 bg-white">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`flex ${
            msg.sender === "user"
              ? "justify-end"
              : "justify-start"
          }`}
        >
          <div
            className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm ${
              msg.sender === "user"
                ? "bg-blue-600 text-white"
                : "bg-slate-100 text-slate-700"
            }`}
          >
            {msg.text}
          </div>
        </div>
      ))}
    </div>

    {/* FAQ Cards */}
    <div className="p-4 border-t flex-1 overflow-hidden">
      <h4 className="text-xs font-semibold uppercase text-slate-500 mb-3">
        Frequently Asked Questions
      </h4>

      <div className="space-y-2 max-h-[50px] overflow-y-auto">
        {faqs.map((faq, index) => (
          <button
            key={index}
            onClick={() => handleFaqClick(faq)}
            className="w-full text-left p-3 rounded-xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300"
          >
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-slate-700">
                {faq.question}
              </span>

              <span className="text-blue-500">
                →
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>

    {/* Footer */}
    <div className="p-4 border-t bg-slate-50">
      <Link
        href="https://wa.me/917982616770"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl font-semibold hover:scale-[1.02] transition-all duration-300"
      >
        <FaWhatsapp size={20} />
        Continue on WhatsApp
      </Link>
    </div>
  </div>
)}
      {/* Quick Actions */}
      {open && (
        <>
          <Link
            href="https://wa.me/917982616770"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
          >
            <FaWhatsapp size={22} />
            WhatsApp
          </Link>

          <button
            onClick={() => {
              setChatOpen(true);
              setOpen(false);
            }}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Bot size={20} />
            AI Assistant
          </button>
        </>
      )}

      {/* Floating Button */}
      <button
  onClick={() => {
    if (chatOpen) {
      setChatOpen(false);
    } else {
      setOpen(!open);
    }
  }}
  className="bg-[#25D366] text-white p-4 rounded-full shadow-xl cursor-pointer animate-bounce hover:scale-110 transition-all duration-300"
>
  {open || chatOpen ? (
    <X size={24} />
  ) : (
    <MessageCircle size={30} />
  )}
</button>
    </div>
  );
}