import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { FaPinterest } from 'react-icons/fa';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-white mb-4">Frdwish</div>
            <p className="text-gray-400 text-sm">
              Developer, Designer, and Creative. Building digital experiences and sharing knowledge.
            </p>
          </div>

          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">Projects</a>
              </li>
              <li>
                <a href="#reports" className="hover:text-white transition-colors">Reports</a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-white transition-colors">Case Studies</a>
              </li>
              <li>
                <a href="#creativity" className="hover:text-white transition-colors">Creativity</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://pinterest.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              >
                <FaPinterest size={20} />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-sm">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-red-500" fill="currentColor" /> by Frdwish © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
