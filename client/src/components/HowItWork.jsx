import { Helmet } from "react-helmet";
export default function HowItWorks() {
    return (
      <div className="bg-gray-50 min-h-screen flex flex-col items-center p-6">
        <Helmet>
          <title>
            How AI Text Summarization Works - Fast & Accurate Summarizer
          </title>
          <meta
            name="description"
            content="Discover how our AI-powered text summarization tool quickly condenses long articles, reports, and research papers into concise, easy-to-read summaries."
          />
        </Helmet>
        <section className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            How AI Text Summarization Works
          </h2>
          <p className="text-gray-700 mt-2">
            Our <strong>AI-powered text summarizer</strong> uses advanced{" "}
            <strong>natural language processing (NLP)</strong> and
            <strong> machine learning</strong> to extract essential information
            from long-form content. Whether you're summarizing{" "}
            <strong>articles, research papers, reports, or essays</strong>, our AI
            ensures accuracy and readability.
          </p>
  
          <h3 className="text-xl font-semibold text-gray-800 mt-6">
            Step-by-Step Process
          </h3>
          <ol className="list-decimal pl-6 text-gray-700">
            <li>
              <strong>Enter Your Text:</strong> Paste any long article, academic
              paper, or document.
            </li>
            <li>
              <strong>AI Processing:</strong> The algorithm scans for key phrases,
              sentence structure, and context.
            </li>
            <li>
              <strong>Data Filtering:</strong> Our NLP model removes redundant
              text and retains crucial insights.
            </li>
            <li>
              <strong>Summary Generation:</strong> The AI produces a concise yet
              meaningful summary in seconds.
            </li>
          </ol>
  
          <h3 className="text-xl font-semibold text-gray-800 mt-6">
            Why Choose Our AI Summarizer?
          </h3>
          <ul className="list-disc pl-6 text-gray-700">
            <li>
              <strong>Instant Summaries:</strong> Save time by condensing lengthy
              content into key points.
            </li>
            <li>
              <strong>High Accuracy:</strong> Our AI extracts meaningful
              information while preserving readability.
            </li>
            <li>
              <strong>Free & Easy to Use:</strong> No registration required—simply
              paste text and summarize.
            </li>
            <li>
              <strong>Multiple Applications:</strong> Ideal for students,
              professionals, journalists, and researchers.
            </li>
          </ul>
  
          <h3 className="text-xl font-semibold text-gray-800 mt-6">
            Who Can Benefit from AI Summarization?
          </h3>
          <ul className="list-disc pl-6 text-gray-700">
            <li>
              <strong>Students & Educators:</strong> Summarize textbooks, research
              papers, and study materials.
            </li>
            <li>
              <strong>Journalists & Writers:</strong> Extract key points from
              interviews, articles, and reports.
            </li>
            <li>
              <strong>Business Professionals:</strong> Quickly review meeting
              notes, emails, and reports.
            </li>
            <li>
              <strong>Researchers & Academics:</strong> Identify critical insights
              from lengthy research documents.
            </li>
          </ul>
        </section>
      </div>
    );
  }
  