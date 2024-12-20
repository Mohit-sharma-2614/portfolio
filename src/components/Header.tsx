import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

export default function Header() {
  return (
    <header className="min-h-screen flex items-center justify-center bg-[#0D1117] text-[#E6EDF3]">
      <div className="container mx-auto px-4 py-16 flex flex-col items-center text-center">
        <div className="mb-8 relative">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#238636]">
            <img
              src="src\images\profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
          John Doe
        </h1>
        <h2 className="text-xl md:text-2xl text-[#30363D] mb-6">
          Full Stack Developer
        </h2>
        <p className="max-w-2xl mb-8 text-lg">
          Building elegant solutions to complex problems with modern web technologies
        </p>
        
        <div className="flex gap-4 mb-8">
          <a href="#contact" className="bg-[#238636] hover:bg-[#2ea043] text-white px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2">
            <Mail size={20} />
            Contact Me
          </a>
          <a href="/resume.pdf" className="border border-[#30363D] hover:border-[#238636] px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2">
            <FileText size={20} />
            Resume
          </a>
        </div>

        <div className="flex gap-6">
          <a href="https://github.com" className="text-[#E6EDF3] hover:text-[#238636] transition-colors">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com" className="text-[#E6EDF3] hover:text-[#238636] transition-colors">
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </header>
  );
}