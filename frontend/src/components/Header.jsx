import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
  <header className="bg-gray-900/80 backdrop-blur-md border-b border-blue-500/30 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-400 rounded-xl flex items-center justify-center shadow-lg">
              <Search className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-blue-400">
              PixFind
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-blue-200 hover:text-white font-medium transition-colors flex items-center">
              <span className="mr-1">✨</span>
              Features
            </a>
            <a href="#" className="text-blue-200 hover:text-white font-medium transition-colors flex items-center">
              <span className="mr-1">❓</span>
              How it Works
            </a>
            <a href="#" className="text-blue-200 hover:text-white font-medium transition-colors flex items-center">
              <span className="mr-1">🔍</span>
              Search
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-blue-500/20 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-blue-500/30 py-4 bg-gray-900/90">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-blue-200 hover:text-white transition-colors flex items-center py-2">
                <span className="mr-2">✨</span>
                Features
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors flex items-center py-2">
                <span className="mr-2">❓</span>
                How it Works
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors flex items-center py-2">
                <span className="mr-2">🔍</span>
                Search
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}