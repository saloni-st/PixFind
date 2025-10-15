import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, X, AlertCircle } from 'lucide-react';

export default function ErrorMessage({ 
  type = 'error',
  title,
  message,
  onRetry,
  onDismiss,
  retryText = 'Try Again',
  dismissible = true
}) {
  const getIcon = () => {
    switch (type) {
      case 'warning':
        return AlertTriangle;
      case 'error':
        return AlertCircle;
      default:
        return AlertCircle;
    }
  };

  const getColorClasses = () => {
    switch (type) {
      case 'warning':
        return {
          container: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-700',
          icon: 'text-yellow-600 dark:text-yellow-400',
          title: 'text-yellow-800 dark:text-yellow-300',
          message: 'text-yellow-700 dark:text-yellow-400',
          button: 'bg-yellow-600 hover:bg-yellow-700 text-white'
        };
      case 'error':
      default:
        return {
          container: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-700',
          icon: 'text-red-600 dark:text-red-400',
          title: 'text-red-800 dark:text-red-300',
          message: 'text-red-700 dark:text-red-400',
          button: 'bg-red-600 hover:bg-red-700 text-white'
        };
    }
  };

  const Icon = getIcon();
  const colors = getColorClasses();

  const defaultTitle = type === 'warning' ? 'Warning' : 'Error';
  const defaultMessage = type === 'warning' 
    ? 'Please check your input and try again.' 
    : 'Something went wrong. Please try again.';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -10 }}
      transition={{ duration: 0.3 }}
      className={`relative rounded-2xl border-2 p-6 shadow-lg backdrop-blur-sm ${colors.container}`}
    >
      {/* Dismiss button */}
      {dismissible && onDismiss && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onDismiss}
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
        >
          <X className="w-4 h-4 text-gray-500 dark:text-gray-400" />
        </motion.button>
      )}

      <div className="flex items-start space-x-4">
        {/* Animated Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
          className="flex-shrink-0"
        >
          <div className={`p-3 rounded-full ${colors.icon}`}>
            <Icon className="w-6 h-6" />
          </div>
        </motion.div>

        <div className="flex-1 min-w-0">
          {/* Title */}
          <motion.h4
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className={`text-lg font-semibold mb-2 ${colors.title}`}
          >
            {title || defaultTitle}
          </motion.h4>

          {/* Message */}
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className={`text-sm leading-relaxed mb-4 ${colors.message}`}
          >
            {message || defaultMessage}
          </motion.p>

          {/* Action Button */}
          {onRetry && (
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onRetry}
              className={`inline-flex items-center space-x-2 px-4 py-2 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg ${colors.button}`}
            >
              <RefreshCw className="w-4 h-4" />
              <span>{retryText}</span>
            </motion.button>
          )}
        </div>
      </div>

      {/* Subtle animation background */}
      <motion.div
        animate={{
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.02, 1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background: type === 'warning' 
            ? 'radial-gradient(circle at 30% 70%, rgba(245, 158, 11, 0.1), transparent 50%)'
            : 'radial-gradient(circle at 30% 70%, rgba(239, 68, 68, 0.1), transparent 50%)'
        }}
      />
    </motion.div>
  );
}