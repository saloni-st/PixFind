import React, { useState, useEffect } from "react";
import axios from "axios";
import Dropzone from "react-dropzone";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import SearchSection from "./components/SearchSection";
import FilterPanel from "./components/FilterPanel";
import ResultCard from "./components/ResultCard";
import { enhanceCloudinaryUrl } from "./utils/cloudinary";
import { Upload, Search, Sparkles, Image as ImageIcon, Filter } from "lucide-react";

export default function App() {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");
  const [allResults, setAllResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [filters, setFilters] = useState({
    gender: "",
    baseColour: "",
    category: "",
    similarity: 0,
  });

  const [currentTheme, setCurrentTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    const handleThemeChange = () => {
      const theme = localStorage.getItem('theme') || 'dark';
      setCurrentTheme(theme);
    };

    window.addEventListener('storage', handleThemeChange);
    
    const observer = new MutationObserver(() => {
      const theme = document.documentElement.classList.contains('light') ? 'light' : 'dark';
      setCurrentTheme(theme);
    });
    
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['class'] 
    });

    return () => {
      window.removeEventListener('storage', handleThemeChange);
      observer.disconnect();
    };
  }, []);

  const handleSearch = async () => {
    if (!file && !url)
      return setError("😊 Upload a file or enter a URL first!");
    
    setAllResults([]);
    setFilteredResults([]);
    setError("");
    setLoading(true);
    try {
      const formData = new FormData();
      if (file) formData.append("file", file);
      if (url) {
        const optimizedUrl = enhanceCloudinaryUrl(url);
        formData.append("imageUrl", optimizedUrl);
      }
      formData.append("filters", JSON.stringify(filters));

      const backendURL =
        import.meta.env.VITE_BACKEND_URL + "/api/products/search";

      const res = await axios.post(backendURL, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const topResults = res.data.slice(0, 16);
      setAllResults(topResults);
      setFilteredResults(topResults);
    } catch {
      setError("😔 Failed to fetch results. Try again!");
    } finally {
      setLoading(false);
    }
  };

  const handleFrontendFilter = () => {
    if (!file && url.trim() === "") {
      setError("😊 Please upload an image or enter a URL to apply filters!");
      return;
    }

    let results = allResults;
    setError("");

    if (filters.gender)
      results = results.filter((r) => r.gender === filters.gender);
    if (filters.baseColour)
      results = results.filter((r) => r.baseColour === filters.baseColour);
    if (filters.category)
      results = results.filter((r) => r.masterCategory === filters.category);
    if (filters.similarity)
      results = results.filter((r) => r.similarity >= filters.similarity / 100);

    if (results.length === 0) {
      setError(
        "😔 No products found matching your filters. Try changing them!"
      );
    }

    setFilteredResults(results.slice(0, 12));
  };

  useEffect(() => {
    if (allResults.length > 0) {
      let results = allResults;
      setError("");

      if (filters.gender)
        results = results.filter((r) => r.gender === filters.gender);
      if (filters.baseColour)
        results = results.filter((r) => r.baseColour === filters.baseColour);
      if (filters.category)
        results = results.filter((r) => r.masterCategory === filters.category);
      if (filters.similarity > 0)
        results = results.filter((r) => r.similarity >= filters.similarity / 100);

      if (results.length === 0) {
        setError(
          "😔 No products found matching your filters. Try changing them!"
        );
      }

      setFilteredResults(results.slice(0, 12));
    }
  }, [filters, allResults]);

  const removeFile = () => {
    setFile(null);
    setAllResults([]);
    setFilteredResults([]);
    setError("");
  };

  const handleUrlChange = (e) => {
    const val = e.target.value;
    setUrl(val);
    if (val.trim() === "") {
      setAllResults([]);
      setFilteredResults([]);
      setError("");
    }
  };

  return (
    <div className="min-h-screen hero-bg transition-all duration-300">
      <Navbar />
      
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 pb-8 sm:pb-12">
        <SearchSection
          file={file}
          setFile={setFile}
          url={url}
          setUrl={setUrl}
          onSearch={handleSearch}
          loading={loading}
          error={error}
        />
        
        {allResults.length > 0 && (
          <FilterPanel
            filters={filters}
            setFilters={setFilters}
          />
        )}

        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="max-w-4xl mx-auto mb-4 sm:mb-6 px-3 sm:px-0"
            >
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg sm:rounded-xl p-3 sm:p-4 text-red-300 text-center text-sm sm:text-base">
                {error}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-6 sm:mb-8 px-3 sm:px-0"
          >
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/5 backdrop-blur-xl rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-white/10">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-blue-400 border-t-transparent rounded-full"
              />
              <span className="text-blue-300 font-medium text-sm sm:text-base">AI is finding similar products...</span>
            </div>
          </motion.div>
        )}

        {loading && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6 max-w-7xl mx-auto mb-6 sm:mb-8 px-3 sm:px-0">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 h-48 sm:h-64 lg:h-80 rounded-xl sm:rounded-2xl animate-pulse border border-white/10"
              />
            ))}
          </div>
        )}

        <AnimatePresence>
          {!loading && filteredResults.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6 max-w-7xl mx-auto px-3 sm:px-0"
            >
              {filteredResults.map((product, i) => (
                <motion.div
                  key={product._id || i}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <ResultCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {!loading && allResults.length === 0 && !error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 sm:py-16 px-3 sm:px-0"
          >
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-8 sm:p-12 max-w-xs sm:max-w-md mx-auto border border-white/10">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mb-4 sm:mb-6"
              >
                <ImageIcon className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mx-auto opacity-50" />
              </motion.div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-300 mb-2">Ready to Search</h3>
              <p className="text-sm sm:text-base text-gray-400">
                Upload an image or paste a URL to discover visually similar products
              </p>
            </div>
          </motion.div>
        )}

        {!loading && allResults.length > 0 && filteredResults.length === 0 && !error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 sm:py-16 px-3 sm:px-0"
          >
            <div className="bg-orange-500/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-8 sm:p-12 max-w-xs sm:max-w-md mx-auto border border-orange-500/20">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mb-4 sm:mb-6"
              >
                <Filter className="w-12 h-12 sm:w-16 sm:h-16 text-orange-400 mx-auto opacity-70" />
              </motion.div>
              <h3 className="text-lg sm:text-xl font-semibold text-orange-300 mb-2">No Matches Found</h3>
              <p className="text-sm sm:text-base text-orange-200/80 mb-4">
                Your current filters are too restrictive. Try adjusting them to see more results.
              </p>
              <button
                onClick={() => setFilters({ gender: "", baseColour: "", category: "", similarity: 0 })}
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 py-2 rounded-lg font-medium transition-colors text-sm sm:text-base"
              >
                Clear All Filters
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
