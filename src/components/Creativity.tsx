import { Music, FileText, Mic, Image as ImageIcon, Clock } from 'lucide-react';
import { useState } from 'react';

const songs = [
  { id: 1, title: 'Song Title (Coming Soon)', duration: '—', genre: 'Coming Soon', isAvailable: false },
  { id: 2, title: 'Song Title (Coming Soon)', duration: '—', genre: 'Coming Soon', isAvailable: false },
  { id: 3, title: 'Song Title (Coming Soon)', duration: '—', genre: 'Coming Soon', isAvailable: false },
  { id: 4, title: 'Song Title (Coming Soon)', duration: '—', genre: 'Coming Soon', isAvailable: false },
];

const lyrics = [
  { id: 1, title: 'Lyrics Title (Coming Soon)', preview: 'New lyrics coming soon...', isAvailable: false },
  { id: 2, title: 'Lyrics Title (Coming Soon)', preview: 'New lyrics coming soon...', isAvailable: false },
  { id: 3, title: 'Lyrics Title (Coming Soon)', preview: 'New lyrics coming soon...', isAvailable: false },
];

const recordings = [
  { id: 1, title: 'Recording Title (Coming Soon)', date: '', type: 'Coming Soon', isAvailable: false },
  { id: 2, title: 'Recording Title (Coming Soon)', date: '', type: 'Coming Soon', isAvailable: false },
  { id: 3, title: 'Recording Title (Coming Soon)', date: '', type: 'Coming Soon', isAvailable: false },
];

const pinterestBoards = [
  { id: 1, title: 'Board (Coming Soon)', pins: 0, image: '', isAvailable: false },
  { id: 2, title: 'Board (Coming Soon)', pins: 0, image: '', isAvailable: false },
  { id: 3, title: 'Board (Coming Soon)', pins: 0, image: '', isAvailable: false },
  { id: 4, title: 'Board (Coming Soon)', pins: 0, image: '', isAvailable: false },
];

type Tab = 'songs' | 'lyrics' | 'recordings' | 'pinterest';

export function Creativity() {
  const [activeTab, setActiveTab] = useState<Tab>('songs');

  const tabs = [
    { id: 'songs' as Tab, label: 'Songs', icon: Music },
    { id: 'lyrics' as Tab, label: 'Lyrics', icon: FileText },
    { id: 'recordings' as Tab, label: 'Recordings', icon: Mic },
    { id: 'pinterest' as Tab, label: 'Pinterest', icon: ImageIcon },
  ];

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">Creative Corner</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Beyond code and design, I express myself through music, writing, and visual inspiration.
            Creative content coming soon!
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Icon size={20} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto">
          {activeTab === 'songs' && (
            <div className="space-y-4">
              {songs.map((song) => (
                <div
                  key={song.id}
                  className={`flex items-center justify-between p-4 rounded-lg transition-colors ${
                    song.isAvailable
                      ? 'bg-gray-50 hover:bg-gray-100'
                      : 'bg-gray-50/50 border border-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <button 
                      disabled={!song.isAvailable}
                      className={`p-3 rounded-full transition-colors ${
                        song.isAvailable
                          ? 'bg-blue-600 hover:bg-blue-700 text-white'
                          : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      {song.isAvailable ? (
                        <Music size={20} />
                      ) : (
                        <Clock size={20} />
                      )}
                    </button>
                    <div>
                      <div className={song.isAvailable ? 'text-gray-900' : 'text-gray-400'}>
                        {song.title}
                      </div>
                      <div className="text-gray-500 text-sm">{song.genre}</div>
                    </div>
                  </div>
                  <div className="text-gray-500">{song.duration}</div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'lyrics' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {lyrics.map((lyric) => (
                <div
                  key={lyric.id}
                  className={`p-6 rounded-lg border transition-shadow ${
                    lyric.isAvailable
                      ? 'bg-gradient-to-br from-blue-50 to-purple-50 border-gray-200 hover:shadow-md'
                      : 'bg-gray-50/50 border-gray-200'
                  }`}
                >
                  <h3 className={`mb-4 ${lyric.isAvailable ? 'text-gray-900' : 'text-gray-400'}`}>
                    {lyric.title}
                  </h3>
                  <p className={`italic mb-4 ${lyric.isAvailable ? 'text-gray-600' : 'text-gray-400'}`}>
                    {lyric.preview}
                  </p>
                  <button 
                    disabled={!lyric.isAvailable}
                    className={`transition-colors ${
                      lyric.isAvailable
                        ? 'text-blue-600 hover:text-blue-700'
                        : 'text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {lyric.isAvailable ? 'Read Full Lyrics →' : 'Not Available Yet'}
                  </button>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'recordings' && (
            <div className="space-y-4">
              {recordings.map((recording) => (
                <div
                  key={recording.id}
                  className={`flex items-center justify-between p-6 rounded-lg border transition-shadow ${
                    recording.isAvailable
                      ? 'bg-white border-gray-200 hover:shadow-md'
                      : 'bg-gray-50/50 border-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${
                      recording.isAvailable ? 'bg-red-50' : 'bg-gray-100'
                    }`}>
                      {recording.isAvailable ? (
                        <Mic className="text-red-600" size={24} />
                      ) : (
                        <Clock className="text-gray-400" size={24} />
                      )}
                    </div>
                    <div>
                      <div className={recording.isAvailable ? 'text-gray-900' : 'text-gray-400'}>
                        {recording.title}
                      </div>
                      <div className="text-gray-500 text-sm">
                        {recording.type}
                        {recording.date && ` • ${new Date(recording.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`}
                      </div>
                    </div>
                  </div>
                  <button 
                    disabled={!recording.isAvailable}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      recording.isAvailable
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {recording.isAvailable ? 'Listen' : 'Not Available'}
                  </button>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'pinterest' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <p className="text-gray-600">
                  My curated collections of visual inspiration and creative ideas (Coming Soon)
                </p>
                <a
                  href="https://pinterest.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  View on Pinterest →
                </a>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {pinterestBoards.map((board) => (
                  <div
                    key={board.id}
                    className="group"
                  >
                    <div className="aspect-square rounded-lg overflow-hidden mb-2 bg-gray-200 flex items-center justify-center border border-gray-300">
                      {board.isAvailable ? (
                        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200"></div>
                      ) : (
                        <Clock className="text-gray-400" size={32} />
                      )}
                    </div>
                    <h4 className={board.isAvailable ? 'text-gray-900' : 'text-gray-400'}>
                      {board.title}
                    </h4>
                    <p className="text-gray-500 text-sm">
                      {board.isAvailable ? `${board.pins} pins` : '— pins'}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
