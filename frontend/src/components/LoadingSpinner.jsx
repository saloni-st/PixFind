import React from 'react';
import { Loader2 } from 'lucide-react';

export default function LoadingSpinner({ size = 'medium', message = 'Loading...' }) {
  const sizeClasses = {
    small: 'w-6 h-6',
    medium: 'w-8 h-8',
    large: 'w-12 h-12'
  };

  return (
    <div className="flex flex-col items-center justify-center p-12 space-y-6">
      <div className="relative">
        {/* Enhanced spinner */}
        <div className={`${sizeClasses[size]} text-blue-600 animate-spin`}>
          <Loader2 className="w-full h-full" />
        </div>
        
        {/* Pulse ring */}
        <div className={`absolute inset-0 ${sizeClasses[size]} border-2 border-blue-200 rounded-full animate-pulse`}></div>
      </div>
      
      {/* Enhanced loading message */}
      <div className="text-center">
        <p className="text-lg font-medium text-gray-700 mb-1">{message}</p>
        <p className="text-sm text-gray-500">This may take a few seconds...</p>
      </div>
      
      {/* Progress dots */}
      <div className="flex space-x-2">
        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      </div>
    </div>
  );
}