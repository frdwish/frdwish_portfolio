import { ExternalLink, Github, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    id: 1,
    title: 'RecycloVision: AI Waste Sorting',
    description: 'A computer vision-based machine learning project that automatically identifies and sorts waste materials into categories such as plastic, paper, metal, and glass using deep learning models.',
    tags: ['Python', 'OpenCV', 'CNN', 'TensorFlow'],
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800',
    github: 'https://github.com/yourusername/RecycloVision-AI-Waste-Sorting',
    demo: '#',
    highlights: [
      'Automated waste classification with 90%+ accuracy',
      'Real-time detection using computer vision',
      'Deployed CNN model trained on diverse waste datasets'
    ]
  },
  {
    id: 2,
    title: 'Customer Support Classifier',
    description: 'End-to-end NLP system built with FastAPI and Streamlit that intelligently classifies customer support tickets into categories like billing, technical issues, cancellations, and general inquiries.',
    tags: ['Python', 'NLP', 'FastAPI', 'Streamlit', 'TF-IDF', 'XGBoost'],
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800',
    github: 'https://github.com/yourusername/customer-support-classifier',
    demo: '#',
    highlights: [
      'Multi-class text classification with XGBoost',
      'Interactive web interface with Streamlit',
      'RESTful API for seamless integration'
    ]
  },
  {
    id: 3,
    title: 'YouTube Analytics Dashboard',
    description: 'A comprehensive data analysis project that extracts meaningful insights from YouTube channel performance metrics and visualizes them through an interactive dashboard with various charts and graphs.',
    tags: ['Python', 'Jupyter Notebook', 'Pandas', 'Matplotlib'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    github: 'https://github.com/yourusername/youtube-analytics-dashboard',
    demo: '#',
    highlights: [
      'Data-driven insights on channel performance',
      'Visualizations for engagement and growth trends',
      'Jupyter notebooks for reproducible analysis'
    ]
  },
  {
    id: 4,
    title: 'Student Success Predictor',
    description: 'A machine learning model that predicts student performance and success rates using various academic and demographic factors, deployed as an interactive web application using Streamlit.',
    tags: ['Python', 'Scikit-Learn', 'Streamlit'],
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800',
    github: 'https://github.com/yourusername/student-success-predictor',
    demo: '#',
    highlights: [
      'Predictive modeling with scikit-learn',
      'User-friendly interface for educators',
      'Feature importance analysis for intervention'
    ]
  },
  {
    id: 5,
    title: 'To Automate or Not Chatbot',
    description: 'A lightweight Python-based conversational chatbot that helps users decide whether a specific workflow or task should be automated, using decision tree logic and interactive queries.',
    tags: ['Python', 'Chatbot', 'NLP'],
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800',
    github: 'https://github.com/yourusername/To-Automate-or-not-chatbot',
    demo: '#',
    highlights: [
      'Decision-making assistant for automation',
      'Interactive conversation flow',
      'Simple and efficient Python implementation'
    ]
  },
];

export function Projects() {
  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A collection of my GitHub projects showcasing machine learning, data analysis, and full-stack development.
            Each project represents hands-on experience with real-world applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video overflow-hidden bg-gray-200">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                {/* Highlights */}
                <div className="mb-4 space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle2 size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-gray-100">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Github size={18} />
                    <span>View Code</span>
                  </a>
                  {project.demo !== '#' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
