import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Search } from "lucide-react";

export default function Navbar() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'dark';
  });

  useEffect(() => {
    console.log('Theme changed to:', theme);
    const root = document.documentElement;
    
    root.classList.remove('dark', 'light');
    root.classList.add(theme);
    root.style.colorScheme = theme;
    localStorage.setItem('theme', theme);
    
    console.log('HTML classes:', root.className);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    console.log('Toggling from', theme, 'to', newTheme);
    setTheme(newTheme);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 navbar-bg backdrop-blur-sm border-b transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <motion.div 
            className="flex items-center space-x-2 sm:space-x-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl shadow-lg bg-gradient-to-r from-blue-500 to-cyan-400">
                <Search className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </div>
              <motion.div
                className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <div>
              <h1 className="text-lg sm:text-2xl font-bold tracking-tight text-theme-primary">
                PixFind
              </h1>
              <p className="text-xs sm:text-xs text-theme-muted hidden sm:block">
                Visual Product Search
              </p>
            </div>
          </motion.div>

          <div className="flex items-center">
            <motion.button
              onClick={() => {
                console.log('Theme button clicked!', theme);
                toggleTheme();
              }}
              className="theme-btn p-1.5 sm:p-2 rounded-lg sm:rounded-xl transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              <motion.div
                initial={false}
                animate={{ rotate: theme === 'dark' ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {theme === 'light' ? (
                  <Moon className="w-4 h-4 sm:w-5 sm:h-5" />
                ) : (
                  <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}