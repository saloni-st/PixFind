import React from "react";
import { motion } from "framer-motion";
import { Filter, Sliders } from "lucide-react";

export default function FilterPanel({ filters, setFilters }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="max-w-5xl mx-auto mb-6 sm:mb-8 px-3 sm:px-4 lg:px-0"
    >
      <div className="filter-panel backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-colors duration-300">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <Filter className="w-3 h-3 sm:w-5 sm:h-5 text-white" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-theme-primary">Smart Filters</h2>
          </div>
          <div className="text-xs text-theme-muted sm:ml-auto">
            Filters apply automatically
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
          <div className="space-y-2">
            <label className="text-xs font-semibold text-theme-muted uppercase tracking-wider">Gender</label>
            <select
              value={filters.gender}
              onChange={(e) => setFilters({ ...filters, gender: e.target.value })}
              className="input-field w-full rounded-lg px-3 sm:px-4 py-2 sm:py-3 transition-all appearance-none cursor-pointer text-sm sm:text-base"
            >
              <option value="">All Genders</option>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Unisex">Unisex</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold text-theme-muted uppercase tracking-wider">Color</label>
            <select
              value={filters.baseColour}
              onChange={(e) => setFilters({ ...filters, baseColour: e.target.value })}
              className="input-field w-full rounded-lg px-3 sm:px-4 py-2 sm:py-3 transition-all appearance-none cursor-pointer text-sm sm:text-base"
            >
              <option value="">All Colors</option>
              <option value="Black">Black</option>
              <option value="White">White</option>
              <option value="Blue">Blue</option>
              <option value="Red">Red</option>
              <option value="Green">Green</option>
              <option value="Grey">Grey</option>
              <option value="Navy Blue">Navy Blue</option>
              <option value="Orange">Orange</option>
              <option value="Purple">Purple</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold text-theme-muted uppercase tracking-wider">Category</label>
            <select
              value={filters.category}
              onChange={(e) => setFilters({ ...filters, category: e.target.value })}
              className="input-field w-full rounded-lg px-3 sm:px-4 py-2 sm:py-3 transition-all appearance-none cursor-pointer text-sm sm:text-base"
            >
              <option value="">All Categories</option>
              <option value="Footwear">Footwear</option>
              <option value="Apparel">Apparel</option>
              <option value="Accessories">Accessories</option>
              <option value="Sporting Goods">Sporting Goods</option>
            </select>
          </div>
        </div>

        <div className="border-t border-gray-700/50 dark:border-gray-700/50 light:border-gray-200/50 pt-3 sm:pt-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 gap-2">
            <label className="text-xs font-semibold text-gray-400 dark:text-gray-400 light:text-gray-600 uppercase tracking-wider flex items-center gap-2">
              <Sliders className="w-3 h-3 sm:w-4 sm:h-4" />
              Minimum Similarity
              {filters.similarity > 0 && (
                <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full">
                  Active
                </span>
              )}
            </label>
            <span className="text-sm font-bold text-blue-400">{filters.similarity}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            step="5"
            value={filters.similarity}
            onChange={(e) => setFilters({ ...filters, similarity: parseInt(e.target.value) })}
            className="w-full h-2 sm:h-3 bg-gray-700 dark:bg-gray-700 light:bg-gray-300 rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${filters.similarity}%, ${document.documentElement.classList.contains('light') ? '#d1d5db' : '#374151'} ${filters.similarity}%, ${document.documentElement.classList.contains('light') ? '#d1d5db' : '#374151'} 100%)`
            }}
          />
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-500 light:text-gray-600 mt-1">
            <span className="text-xs">0% - Show All</span>
            <span className="text-xs">100% - Exact Match</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
