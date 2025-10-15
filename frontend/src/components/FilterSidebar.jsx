import React, { useState } from 'react';
import { Filter, X, ChevronDown, ChevronUp } from 'lucide-react';

export default function FilterSidebar({ filters, setFilters, onApply, isOpen, onClose }) {
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    price: true
  });

  const categories = [
    'Electronics', 'Clothing', 'Home & Garden', 'Sports', 'Books', 'Beauty'
  ];

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleCategoryChange = (category) => {
    const newCategories = filters.categories?.includes(category)
      ? filters.categories.filter(c => c !== category)
      : [...(filters.categories || []), category];
    
    setFilters(prev => ({ ...prev, categories: newCategories }));
  };

  const clearFilters = () => {
    setFilters({ categories: [], minPrice: '', maxPrice: '' });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:relative lg:inset-auto">
      {/* Backdrop for mobile */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 lg:hidden" 
        onClick={onClose}
      />
      
  <div className="fixed right-0 top-0 h-full w-80 bg-gray-800/95 backdrop-blur-xl shadow-2xl lg:relative lg:w-full lg:shadow-none border-l lg:border-l-0 lg:border-r border-gray-700/50">
        {/* Header */}
  <div className="flex items-center justify-between p-6 border-b border-gray-700/40">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-400 rounded-lg flex items-center justify-center">
              <Filter className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-bold text-white">Filter Products</h2>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden p-2 hover:bg-blue-400/10 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        <div className="p-6 space-y-8 overflow-y-auto h-full pb-24">
          {/* Categories */}
          <div>
            <button
              onClick={() => toggleSection('categories')}
              className="flex items-center justify-between w-full text-left py-3"
            >
              <h3 className="font-semibold text-white text-lg">Categories</h3>
              {expandedSections.categories ? 
                <ChevronUp className="w-5 h-5 text-blue-400" /> : 
                <ChevronDown className="w-5 h-5 text-blue-400" />
              }
            </button>
            
            {expandedSections.categories && (
              <div className="mt-4 space-y-3">
                {categories.map(category => (
                  <label key={category} className="flex items-center space-x-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={filters.categories?.includes(category) || false}
                      onChange={() => handleCategoryChange(category)}
                      className="w-4 h-4 rounded border-gray-600 bg-gray-700 text-blue-400 focus:ring-blue-400 focus:ring-2"
                    />
                    <span className="text-gray-300 group-hover:text-white transition-colors">{category}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Price Range */}
          <div>
            <button
              onClick={() => toggleSection('price')}
              className="flex items-center justify-between w-full text-left py-3"
            >
              <h3 className="font-semibold text-white text-lg">Price Range</h3>
              {expandedSections.price ? 
                <ChevronUp className="w-5 h-5 text-blue-400" /> : 
                <ChevronDown className="w-5 h-5 text-blue-400" />
              }
            </button>
            
            {expandedSections.price && (
              <div className="mt-4 space-y-4">
                <div className="flex space-x-3">
                  <input
                    type="number"
                    placeholder="$0"
                    value={filters.minPrice || ''}
                    onChange={(e) => setFilters(prev => ({ ...prev, minPrice: e.target.value }))}
                    className="flex-1 px-4 py-3 bg-gray-700/50 border border-gray-700/30 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                  />
                  <input
                    type="number"
                    placeholder="$999"
                    value={filters.maxPrice || ''}
                    onChange={(e) => setFilters(prev => ({ ...prev, maxPrice: e.target.value }))}
                    className="flex-1 px-4 py-3 bg-gray-700/50 border border-blue-500/30 rounded-lg text-white placeholder-blue-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="space-y-4 pt-6 border-t border-blue-500/30">
            <button
              onClick={onApply}
              className="w-full bg-blue-400 hover:bg-blue-500 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg"
            >
              Apply Filters
            </button>
            
            <button
              onClick={clearFilters}
              className="w-full border border-gray-700/30 text-gray-300 hover:text-white hover:bg-blue-400/10 py-3 px-6 rounded-xl font-medium transition-colors"
            >
              Clear All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}