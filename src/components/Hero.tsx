import { Github, Linkedin, Mail } from 'lucide-react';
import { FaPinterest } from 'react-icons/fa';
import profileImage from 'figma:asset/d5ecfab3dbbfa7654faf0f7cd264d472b0eb4214.png';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden border-4 border-blue-500">
            <img src={profileImage} alt="Md Fardwish Ali" className="w-full h-full object-cover" />
          </div>
        </div>
        
        <h1 className="text-gray-900 mb-4">
          Hi, I'm <span className="text-blue-600">Md Fardwish Ali</span>
        </h1>
        
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          A passionate developer, researcher, and creative mind. I craft meaningful digital experiences
          through code, design, and storytelling. Welcome to my digital space where I share my journey,
          projects, and creative expressions.
        </p>

        <div className="flex justify-center gap-4 mb-12">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://pinterest.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
          >
            <FaPinterest size={24} />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="text-blue-600 mb-2">5+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="text-blue-600 mb-2">4+</div>
            <div className="text-gray-600">Case Studies</div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="text-blue-600 mb-2">2+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}
