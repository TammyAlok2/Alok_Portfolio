'use client';

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { Home, RefreshCw, ArrowLeft } from "lucide-react";
import Image from "next/image";

const NotFound = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [animateAstronaut, setAnimateAstronaut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    // Astronaut animation interval
    const animationInterval = setInterval(() => {
      setAnimateAstronaut(prev => !prev);
    }, 2500);

    return () => {
      clearTimeout(timer);
      clearInterval(animationInterval);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b dark:from-blue-900 dark:to-black relative overflow-hidden">
      {/* Stars background */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              opacity: Math.random() * 0.8 + 0.2,
              animation: `twinkle ${Math.random() * 5 + 3}s infinite`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-3xl w-full px-6 text-center space-y-8">
        
        {/* Message */}
        <h2 className="text-2xl md:text-3xl font-medium dark:text-white mb-2">
          Houston, we have a problem!
        </h2>
        <p className="text-lg dark:text-blue-200 mb-8">
          The page you're looking for seems to have drifted into deep space.
        </p>
        
        {/* Floating astronaut */}
        <div className={`relative mx-auto w-64 h-64 mb-8 transition-transform duration-1000 ${animateAstronaut ? 'translate-y-4' : '-translate-y-4'}`}>
          <Image 
            src="/page-not-found/404.png" 
            alt="Lost astronaut" 
            width={600} 
            height={600}
            className="object-contain dark:invert-[1]"
          />
        </div>
        
        {/* Action buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg hover:shadow-lg active:scale-95 transition-all duration-200"
          >
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-blue-400 dark:text-blue-100 hover:bg-blue-800/30 rounded-lg hover:shadow-lg active:scale-95 transition-all duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </button>
          
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-purple-400 dark:text-purple-100 hover:bg-purple-800/30 rounded-lg hover:shadow-lg active:scale-95 transition-all duration-200"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Try Again
          </button>
        </div>
      </div>
      
      {/* CSS animations */}
      <style jsx global>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default NotFound;