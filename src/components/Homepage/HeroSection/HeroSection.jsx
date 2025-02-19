import React from 'react';
import { Download, Github, Instagram, Linkedin } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {/* Greeting */}
            <div className="inline-block border-2 border-emerald-400 rounded-lg px-4 py-2">
              <p className="text-gray-800">Hi everyone 👋 I'm Your Name</p>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold">Visual Designer</h1>
              <h2 className="text-4xl md:text-5xl font-bold">Based in California</h2>
            </div>

            {/* Description */}
            <p className="text-gray-600 max-w-lg">
              I'm a UI/UX designer passionate about creating designs that
              not only meet the functional requirements but also delight
              users and evoke emotional connections.
            </p>

            {/* Social Links */}
            <div className="">
              <p className="text-gray-600 mb-4">Find me on:</p>
              <div className="flex space-x-4">
                <a href="#" className="p-2 border-2 border-gray-200 rounded-full hover:border-gray-300 transition">
                  <Github size={20} />
                </a>
                <a href="#" className="p-2 border-2 border-gray-200 rounded-full hover:border-gray-300 transition">
                  <Instagram size={20} />
                </a>
                <a href="#" className="p-2 border-2 border-gray-200 rounded-full hover:border-gray-300 transition">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden relative">
              <img
                src="/api/placeholder/600/600"
                alt="Portfolio"
                className="object-cover w-full h-full"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-400 -z-10 rounded-tr-[100px]"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;