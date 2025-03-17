import React, { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is this AI text summarizer free to use?",
      answer: "Yes! Our AI-powered text summarization tool is completely free to use with no sign-up required."
    },
    {
      question: "How does the AI summarization process work?",
      answer: "Our AI scans the text, identifies key points using NLP, and extracts the most relevant information to create a concise summary."
    },
    {
      question: "Does the AI provide accurate summaries?",
      answer: "Yes! Our AI uses advanced machine learning and NLP techniques to ensure accuracy and readability."
    },
    {
      question: "What types of text can I summarize?",
      answer: "You can summarize articles, research papers, essays, reports, and more with our AI tool."
    },
    {
      question: "Is there a word limit for text input?",
      answer: "Currently, the tool supports up to 10,000 characters per summarization request."
    },
    {
      question: "Is my data stored after summarization?",
      answer: "No, we respect user privacy. Your text is processed in real-time and is not stored or shared."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center p-6">
      <div className="w-[600px] bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left flex justify-between items-center py-3 text-lg font-medium text-gray-800 focus:outline-none"
              >
                {faq.question}
                <span className={`transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}>
                  ▼
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40 opacity-100 py-2" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
