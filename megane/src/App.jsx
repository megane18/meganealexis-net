import React, { useState, useEffect } from 'react';
import './App.css'; // Assuming you have a CSS file for styles

export default function ComingSoon() {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      {/* Header */}
      <header className="px-6 py-4 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <img
            src="./public/blob-06d7ac6.png" // <-- update this path to your logo file
            alt="Megane Alexis Logo"
            className="h-8 w-8 object-contain"
          />
          <h1 className="text-xl font-medium text-white">Megane Alexis</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Status indicator */}
          <div className="inline-flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-full mb-8">
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-300 font-medium">In Development</span>
          </div>

          {/* Main message */}
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
            Something new is<br />
            being built{dots}
          </h2>

          <p className="text-lg text-gray-300 mb-12 max-w-lg mx-auto leading-relaxed">
            This space is under construction. In the meantime, you can explore my main website.
          </p>

          {/* CTA */}
          <div className="space-y-4">
            <a
              href="https://meganealexis.com"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-md font-medium transition-colors duration-200"
            >
              Visit meganealexis.com
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            
            <div className="text-sm text-gray-400">
              or bookmark this page for updates
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © 2025 Megane Alexis. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>meganealexis.net</span>
              <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
              <span>Coming Soon</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}