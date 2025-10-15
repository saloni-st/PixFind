import React from 'react';
import { ExternalLink, Star } from 'lucide-react';

export default function ProductCard({ product }) {
  const similarity = product.similarity || 0.75;
  const similarityPercentage = Math.round(similarity * 100);

  return (
  <div className="bg-gray-800/60 backdrop-blur-lg rounded-xl sm:rounded-2xl border border-blue-500/30 p-3 sm:p-4 lg:p-6 hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2 hover:border-blue-400/50 transition-all duration-300 group">
      <div className="relative mb-3 sm:mb-4 lg:mb-6">
        <div className="overflow-hidden rounded-lg sm:rounded-xl">
          <img
            src={product.image || product.imageUrl || '/api/placeholder/300/300'}
            alt={product.name || product.title || 'Product'}
            className="w-full h-36 sm:h-44 lg:h-48 object-cover group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-500"
            onError={(e) => {
              e.target.src = '/api/placeholder/300/300';
            }}
          />
        </div>
        <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
          <span className="bg-blue-400 text-white text-xs sm:text-sm font-bold px-2 sm:px-3 py-1 sm:py-2 rounded-full shadow-lg backdrop-blur-sm">
            {similarityPercentage}% match
          </span>
        </div>
      </div>

      <div className="space-y-2 sm:space-y-3 lg:space-y-4">
        <h3 className="font-bold text-theme-primary line-clamp-2 text-sm sm:text-base lg:text-lg group-hover:text-blue-200 transition-colors">
          {product.name || product.title || 'Product Name'}
        </h3>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
          <div className="flex items-center space-x-1 sm:space-x-2">
            <div className="flex items-center">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />
            </div>
            <span className="text-xs sm:text-sm text-blue-200 ml-1">
              {product.rating || '4.5'} ({product.reviews || '123'})
            </span>
          </div>
          
          <div className="text-right">
            <p className="text-base sm:text-lg lg:text-xl font-bold text-theme-primary">
              ${product.price || '99.99'}
            </p>
          </div>
        </div>

  <button className="w-full bg-blue-400 hover:bg-blue-500 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2 group-hover:shadow-lg transform hover:-translate-y-0.5 text-sm sm:text-base">
          <span>View Product</span>
          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
        </button>
      </div>
    </div>
  );
}