import { ArrowRight, Clock } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: 'Case Study Title (Coming Soon)',
    client: '',
    challenge: '',
    solution: '',
    results: [],
    tags: ['Coming Soon'],
    isAvailable: false,
  },
  {
    id: 2,
    title: 'Case Study Title (Coming Soon)',
    client: '',
    challenge: '',
    solution: '',
    results: [],
    tags: ['Coming Soon'],
    isAvailable: false,
  },
  {
    id: 3,
    title: 'Case Study Title (Coming Soon)',
    client: '',
    challenge: '',
    solution: '',
    results: [],
    tags: ['Coming Soon'],
    isAvailable: false,
  },
  {
    id: 4,
    title: 'Case Study Title (Coming Soon)',
    client: '',
    challenge: '',
    solution: '',
    results: [],
    tags: ['Coming Soon'],
    isAvailable: false,
  },
];

export function CaseStudies() {
  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">Case Studies</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Deep dives into projects where I've solved complex problems and achieved measurable results.
            Detailed case studies coming soon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className={`rounded-lg overflow-hidden shadow-sm border transition-shadow ${
                study.isAvailable
                  ? 'bg-white border-gray-200 hover:shadow-lg'
                  : 'bg-gray-50/50 border-gray-100'
              }`}
            >
              {/* Image Placeholder */}
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                {study.isAvailable ? (
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200"></div>
                ) : (
                  <div className="flex flex-col items-center gap-3">
                    <Clock className="text-gray-400" size={48} />
                    <span className="text-gray-400">Coming Soon</span>
                  </div>
                )}
              </div>

              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 rounded-full text-sm ${
                        study.isAvailable
                          ? 'bg-blue-50 text-blue-600'
                          : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className={`mb-2 ${study.isAvailable ? 'text-gray-900' : 'text-gray-400'}`}>
                  {study.title}
                </h3>

                {study.isAvailable ? (
                  <>
                    <p className="text-gray-500 mb-6">{study.client}</p>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-gray-900 mb-2">Challenge</h4>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>

                      <div>
                        <h4 className="text-gray-900 mb-2">Solution</h4>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>

                      <div>
                        <h4 className="text-gray-900 mb-2">Results</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-600">
                              <span className="text-green-500 mt-1">✓</span>
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
                      <span>Read Full Case Study</span>
                      <ArrowRight size={18} />
                    </button>
                  </>
                ) : (
                  <>
                    <p className="text-gray-400 mb-6 italic">
                      Detailed case study documentation in progress. Check back soon for in-depth analysis, methodologies, and results.
                    </p>

                    <button
                      disabled
                      className="flex items-center gap-2 text-gray-400 cursor-not-allowed"
                    >
                      <span>Not Available Yet</span>
                      <ArrowRight size={18} />
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
