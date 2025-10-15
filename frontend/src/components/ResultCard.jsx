import React from "react";
import { motion } from "framer-motion";
import { getResponsiveCloudinaryUrl } from "../utils/cloudinary";
import { Star, Heart, ExternalLink } from "lucide-react";

export default function ResultCard({ product }) {
  const optimizedImageUrl = getResponsiveCloudinaryUrl(product.imageUrl, 400, 400);
  const similarityPercentage = Math.round((product.similarity || 0) * 100);
  
  const getSimilarityColor = (percentage) => {
    if (percentage >= 80) return "from-green-500 to-emerald-500";
    if (percentage >= 60) return "from-blue-500 to-cyan-500";
    if (percentage >= 40) return "from-yellow-500 to-orange-500";
    return "from-red-500 to-orange-400";
  };

  const getSimilarityText = (percentage) => {
    if (percentage >= 80) return "Excellent Match";
    if (percentage >= 60) return "Good Match";
    if (percentage >= 40) return "Fair Match";
    return "Basic Match";
  };
  
  return (
    <motion.div whileHover={{ y: -4 }} className="group relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg transition-all duration-300 bg-gray-800 border border-gray-700">
      <div className="w-full bg-gray-900 flex items-center justify-center h-40 sm:h-48 lg:h-56">
        <img src={optimizedImageUrl} alt={product.productDisplayName || product.name} className="object-contain h-32 sm:h-40 lg:h-48 max-w-full" loading="lazy" />
      </div>

      {product.similarity !== undefined && (
        <div className="absolute top-2 sm:top-3 right-2 sm:right-3">
          <div className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
            {similarityPercentage}%
          </div>
        </div>
      )}

      <div className="p-3 sm:p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-xs sm:text-sm text-white line-clamp-2">{product.productDisplayName || product.name}</h3>
            <div className="text-xs text-gray-400 mt-1 sm:mt-2">{product.masterCategory || '—'}</div>
          </div>
          <div className="text-right flex-shrink-0">
            <div className="text-sm sm:text-base text-white font-bold">${product.price || '0.00'}</div>
            <div className="text-xs text-gray-500 mt-1 hidden sm:block">ID: {product._id ? String(product._id).slice(0,6) : '—'}</div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-2 sm:mt-3">
          <div className="flex items-center gap-1 sm:gap-2 text-xs text-gray-400">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400 inline-block" />
            <span>Available</span>
          </div>
          <div className="text-xs text-gray-400 truncate max-w-16 sm:max-w-none">{product.baseColour || ''}</div>
        </div>
      </div>
    </motion.div>
  );
}
