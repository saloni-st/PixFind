import React from 'react';
import { Search, Image, AlertCircle } from 'lucide-react';

export default function EmptyState({ 
  type = 'search', 
  title, 
  description, 
  action, 
  onAction 
}) {
  const getIcon = () => {
    switch (type) {
      case 'search':
        return Search;
      case 'image':
        return Image;
      case 'error':
        return AlertCircle;
      default:
        return Search;
    }
  };

  const getDefaultContent = () => {
    switch (type) {
      case 'search':
        return {
          title: 'No Results Found',
          description: 'Try adjusting your search or filters to find what you\'re looking for.',
          action: 'Try Different Search'
        };
      case 'image':
        return {
          title: 'No Image Selected',
          description: 'Upload an image or paste a URL to start searching for similar products.',
          action: 'Upload Image'
        };
      case 'error':
        return {
          title: 'Something Went Wrong',
          description: 'We encountered an error while processing your request. Please try again.',
          action: 'Try Again'
        };
      default:
        return {
          title: 'No Data Available',
          description: 'There\'s nothing to show here right now.',
          action: 'Refresh'
        };
    }
  };

  const Icon = getIcon();
  const content = getDefaultContent();
  const displayTitle = title || content.title;
  const displayDescription = description || content.description;
  const displayAction = action || content.action;

  return (
    <div className="flex flex-col items-center justify-center py-16 px-8">
      <div className="text-center max-w-md">
        {/* Enhanced Icon */}
        <div className="w-20 h-20 bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Icon className="w-10 h-10 text-gray-400" />
        </div>
        
        {/* Enhanced Content */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          {displayTitle}
        </h3>
        
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          {displayDescription}
        </p>
        
        {/* Enhanced Action Button */}
        {onAction && (
          <button
            onClick={onAction}
            className="bg-blue-400 hover:bg-blue-500 text-white px-8 py-3 rounded-xl font-medium transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
          >
            {displayAction}
          </button>
        )}
      </div>
    </div>
  );
}