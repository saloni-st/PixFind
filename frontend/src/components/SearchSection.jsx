import React from 'react';
import { Upload, Link, Search, Image as ImageIcon } from 'lucide-react';
import Dropzone from 'react-dropzone';

export default function SearchSection({ 
  file, 
  setFile, 
  url, 
  setUrl, 
  onSearch, 
  loading, 
  error 
}) {
  const onDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
    setUrl('');
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
    setFile(null);
  };

  return (
    <div className="hero-bg flex flex-col items-center px-3 sm:px-4 lg:px-8 transition-colors duration-300">
      <div className="w-full">
        <div className="w-full hero-bg py-12 sm:py-16 lg:py-24 text-center mb-8 sm:mb-12 relative overflow-hidden transition-colors duration-300">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px] sm:bg-[size:50px_50px]"></div>
          
          <div className="max-w-5xl mx-auto relative z-10 px-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-4 sm:mb-6">
              <div className="relative">
                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <Search className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                </div>
                <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-xl sm:rounded-2xl blur-xl"></div>
              </div>
              <div className="text-center sm:text-left">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent tracking-tight leading-tight">
                  PixFind
                </h1>
                <div className="h-0.5 sm:h-1 w-16 sm:w-20 lg:w-24 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto sm:mx-0 mt-1 sm:mt-2"></div>
              </div>
            </div>
            <div className="space-y-2 sm:space-y-3">
              <p className="text-lg sm:text-xl text-theme-secondary font-medium">Find Similar Products by Image</p>
              <p className="text-sm sm:text-lg text-theme-muted flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse"></span>
                Upload photo, discover matching items instantly
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse"></span>
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-theme-muted mt-3 sm:mt-4">
                <span className="flex items-center gap-1">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-cyan-400 rounded-full"></div>
                  Image Search
                </span>
                <span className="flex items-center gap-1">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-400 rounded-full"></div>
                  Product Matching
                </span>
                <span className="flex items-center gap-1">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-400 rounded-full"></div>
                  Smart Filters
                </span>
              </div>
            </div>
            
            <div className="absolute top-6 sm:top-10 left-6 sm:left-10 w-2 h-2 sm:w-3 sm:h-3 bg-blue-400/30 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
            <div className="absolute top-12 sm:top-20 right-12 sm:right-20 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400/40 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-12 sm:bottom-20 left-12 sm:left-20 w-3 h-3 sm:w-4 sm:h-4 bg-blue-500/20 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-6 sm:bottom-10 right-6 sm:right-10 w-2 h-2 sm:w-3 sm:h-3 bg-cyan-300/30 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
          </div>
        </div>

        <div className="max-w-xs sm:max-w-lg lg:max-w-2xl mx-auto space-y-4 sm:space-y-6">
          <div className="w-full">
            <Dropzone onDrop={onDrop} accept={{ 'image/*': [] }} multiple={false}>
              {({ getRootProps, getInputProps, isDragActive }) => (
                <div
                  {...getRootProps()}
                  className={`upload-area w-full ${file ? 'min-h-48 sm:min-h-64' : 'h-60 sm:h-80'} border-2 border-dashed rounded-xl sm:rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all ${
                    isDragActive 
                      ? 'border-blue-400 bg-blue-50/50' 
                      : 'border-gray-600'
                  }`}
                >
                  <input {...getInputProps()} />
                  {file ? (
                    <div className="flex flex-col items-center space-y-2 sm:space-y-3 p-4 sm:p-6 w-full">
                      <img 
                        src={URL.createObjectURL(file)} 
                        alt="preview" 
                        className="max-h-64 sm:max-h-80 lg:max-h-96 max-w-full w-auto h-auto object-contain rounded-lg sm:rounded-xl shadow-lg" 
                      />
                      <div className="text-center">
                        <span className="text-xs sm:text-sm text-blue-400 font-medium truncate max-w-48 sm:max-w-64 block">{file.name}</span>
                        <p className="text-xs text-theme-muted mt-1">Ready to search</p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center space-y-3 sm:space-y-4">
                      <Upload className="w-8 h-8 sm:w-12 sm:h-12 text-theme-muted" />
                      <div className="text-center px-4">
                        <p className="text-sm sm:text-lg font-medium text-theme-secondary">Drag & drop an image here</p>
                        <p className="text-xs sm:text-sm text-theme-muted">or tap to select from your device</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </Dropzone>
          </div>

          <div className="w-full">
            <button
              onClick={onSearch}
              disabled={loading || (!file && !url)}
              className={`w-full py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-lg transition-all ${
                loading || (!file && !url) 
                  ? 'bg-gray-700 text-gray-400 cursor-not-allowed' 
                  : 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1'
              }`}
            >
              {loading ? 'Searching...' : 'Find Similar Products'}
            </button>
          </div>

          <div className="w-full">
            <div className="filter-panel rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <Link className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                <label className="text-xs sm:text-sm font-medium text-theme-primary">Or paste an image URL</label>
              </div>
              <input
                type="url"
                value={url}
                onChange={handleUrlChange}
                placeholder="https://example.com/image.jpg"
                className="input-field w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}