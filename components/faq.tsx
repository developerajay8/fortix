"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Do I need a webcam or mic to do a session?",
    answer:
      "We require our mentors to utilize a webcam and microphone during the mentoring session. While we also recommend that the mentee use a webcam to enhance transparency and clarity, we understand that there may be situations where this is not feasible Startup programs are designed to help new entrepreneurs with mentorship, funding strategies, and business growth guidance.",
  },
  {
    question: "Why is Expertbells better than Googling my questions?",
    answer:
      "Expertbells provides personalized guidance from industry experts, offering deeper insights and tailored advice that you can’t get from generic search results Startup programs are designed to help new entrepreneurs with mentorship, funding strategies, and business growth guidance.",
  },
  {
    question: "What if the call is accidentally cut off in between?",
    answer:
      "If the call is cut off, you can reconnect using the same meeting link. If the issue persists, contact support for assistance Startup programs are designed to help new entrepreneurs with mentorship, funding strategies, and business growth guidance.",
  },
  {
    question: "How do I book a session?",
    answer:
      "To book a session, visit our website, browse the mentor profiles, select a suitable mentor, and schedule a session at your convenience Startup programs are designed to help new entrepreneurs with mentorship, funding strategies, and business growth guidance.",
  },
  {
    question: "What is meant by packages by mentors?",
    answer:
      "Mentor packages are specially curated sessions that offer structured guidance over multiple sessions to help mentees achieve their goals Startup programs are designed to help new entrepreneurs with mentorship, funding strategies, and business growth guidance.",
  },
  {
    question: "What are startup programs?",
    answer:
      "Startup programs are designed to help new entrepreneurs with mentorship, funding strategies, and business growth guidance.Startup programs are designed to help new entrepreneurs with mentorship, funding strategies, and business growth guidance.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-[1200px] mx-auto  md:py-16 py-6 md:px-0 px-[16px]">
      <h2 className="md:text-4xl text-3xl font-medium text-center">Frequently Asked Questions</h2>
      <p className="text-center text-gray-600 mt-[10px] mb-[55px]">Have questions? We're here to help you.</p>

      {faqs.map((faq, index) => (
        <div key={index} className="mb-3">
          <button
            onClick={() => toggleFAQ(index)}
            className={`flex justify-between items-center w-full p-4 border rounded-lg transition-all ${
              openIndex === index ? "bg-gray-100 border-gray-300" : "bg-blue-50 border-blue-200"
            }`}
          >
            <span className="font-semibold text-left">{faq.question}</span>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {openIndex === index ? <Minus size={24} /> : <Plus size={24} />}
            </motion.div>
          </button>

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={openIndex === index ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-4 bg-white border border-gray-200 rounded-b-lg text-gray-600">
              {faq.answer}
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
