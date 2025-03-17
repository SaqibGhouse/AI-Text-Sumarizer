import React, { useState } from "react";
import { Helmet } from "react-helmet";

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [summary, setSummary] = useState("Your summarized text will appear here...");
  const [loading, setLoading] = useState(false);

  const summarizeText = async () => {
    if (!inputText.trim()) {
      setSummary("Please enter some text to summarize.");
      return;
    }

    setLoading(true); // Show loader
    try {
      const response = await fetch("https://ai-text-sumarizer.onrender.com/summarize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: inputText }),
      });
      const data = await response.json();
      setSummary(data.summary);
    } catch (error) {
      setSummary("Error summarizing text. Please try again.");
    }
    setLoading(false); // Hide loader
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center">
      <Helmet>
        <title>AI Text Summarizer - Free & Accurate AI Summary Tool</title>
        <meta
          name="description"
          content="AI Text Summarizer helps you summarize long articles, essays, and reports instantly. Save time and get key insights with our AI-powered summarization tool."
        />
      </Helmet>
      <main className="w-full max-w-6xl mx-auto p-6 flex flex-col items-center">
        <section className="bg-white shadow-md rounded-lg p-6 w-full flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Enter Text to Summarize
            </h2>
            <textarea
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 h-40 lg:h-80"
              placeholder="Paste your text here..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            ></textarea>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Summary Output
            </h2>
            <div className="w-full p-4 border border-gray-300 rounded-lg h-40 lg:h-80 text-gray-600 bg-gray-100" placeholder="Paste your text here...">
              {summary}
            </div>
          </div>
        </section>
        <button
          onClick={summarizeText}
          className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 flex items-center gap-2"
          disabled={loading}
        >
          {loading ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-white"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
              Summarizing...
            </>
          ) : (
            "Summarize Now"
          )}
        </button>
      </main>
    </div>
  );
}
