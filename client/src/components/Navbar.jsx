import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md py-4 px-6 flex justify-between items-center">
      
        <Link to="/" className="text-gray-800 hover:text-blue-600">
        <h1 className="text-2xl font-bold text-gray-800">AI Text Summarizer</h1>
        </Link>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-800 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <span className="text-3xl">&times;</span> // Close icon (X)
        ) : (
          <span className="text-3xl">&#9776;</span> // Hamburger icon (☰)
        )}
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        <Link to="/" className="text-gray-800 hover:text-blue-600">
          Home
        </Link>
        <Link to="/how-it-works" className="text-gray-800 hover:text-blue-600">
          How It Works
        </Link>
        <Link to="/faq" className="text-gray-800 hover:text-blue-600">
          FAQ
        </Link>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute top-16 left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center space-y-4 py-4 transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <Link to="/" className="text-gray-800 hover:text-blue-600" onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link to="/how-it-works" className="text-gray-800 hover:text-blue-600" onClick={() => setIsOpen(false)}>
          How It Works
        </Link>
        <Link to="/faq" className="text-gray-800 hover:text-blue-600" onClick={() => setIsOpen(false)}>
          FAQ
        </Link>
      </div>
    </nav>
  );
}
