'use client';

import { useState } from 'react';

interface Scene {
  id: number;
  title: string;
  location: string;
  dialogue: string;
  action: string;
  bg: string;
}

export default function Home() {
  const [currentScene, setCurrentScene] = useState(0);
  const [showScript, setShowScript] = useState(false);

  const scenes: Scene[] = [
    {
      id: 1,
      title: "Scene 1 - Arrival at Dutch Fort",
      location: "Dutch Fort, Surat",
      dialogue: "Hey everyone! Today, I, Imran, from Imran AI Seven, am taking this awesome car for a spin around Surat. First up, the Dutch Fort, then we'll cruise along the Tapi Riverfront and check out some cool spots. Let's go!",
      action: "A sleek sports car pulls up in front of the Dutch Fort. Imran steps out of the car, looking around with a smile.",
      bg: "from-orange-500 to-red-600"
    },
    {
      id: 2,
      title: "Scene 2 - Driving Past Dutch Garden",
      location: "Dutch Garden, Surat",
      dialogue: "Wow, Surat is such a vibrant city! And this car handles like a dream.",
      action: "The car starts moving. We drive past the Dutch Garden, with the beautiful scenery of Surat in the background.",
      bg: "from-green-500 to-teal-600"
    },
    {
      id: 3,
      title: "Scene 3 - Tapi Riverfront",
      location: "Tapi Riverfront, Surat",
      dialogue: "The Tapi Riverfront is so beautiful, isn't it? Surat has a unique charm.",
      action: "The car cruises along the Tapi Riverfront. We see the beautiful views of the river and the city skyline.",
      bg: "from-blue-500 to-indigo-600"
    },
    {
      id: 4,
      title: "Scene 4 - Return to Dutch Fort",
      location: "Dutch Fort, Surat",
      dialogue: "Yes! I made it! That was an amazing drive.",
      action: "The car returns to the Dutch Fort. Imran gets out of the car, throwing his hands up in excitement.",
      bg: "from-purple-500 to-pink-600"
    },
    {
      id: 5,
      title: "Scene 5 - Call to Action",
      location: "Dutch Fort, Surat",
      dialogue: "If you enjoyed this video, don't forget to like and share it. And subscribe to my channel, Imran AI Seven, for more adventures!",
      action: "Imran addresses the viewers.",
      bg: "from-yellow-500 to-orange-600"
    },
    {
      id: 6,
      title: "Scene 6 - Trophy Presentation",
      location: "Dutch Fort, Surat",
      dialogue: "Celebrity/Official: You drove really well. Here's your prize for completing the Surat challenge in record time!\n\nImran: Thank you! This is awesome!",
      action: "A local celebrity or official presents Imran with a trophy.",
      bg: "from-red-500 to-rose-600"
    }
  ];

  const nextScene = () => {
    if (currentScene < scenes.length - 1) {
      setCurrentScene(currentScene + 1);
    }
  };

  const prevScene = () => {
    if (currentScene > 0) {
      setCurrentScene(currentScene - 1);
    }
  };

  const scene = scenes[currentScene];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">Imran AI Seven</h1>
              <p className="text-gray-300 mt-1">Surat Drive Challenge - Video Script</p>
            </div>
            <button
              onClick={() => setShowScript(!showScript)}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
            >
              {showScript ? 'Hide' : 'Show'} Full Script
            </button>
          </div>
        </div>
      </header>

      {/* Full Script Modal */}
      {showScript && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto">
          <div className="container mx-auto px-4 py-8">
            <div className="bg-slate-800 rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl border border-white/10">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-white">Complete Video Script</h2>
                <button
                  onClick={() => setShowScript(false)}
                  className="text-white hover:text-red-400 transition-colors text-2xl"
                >
                  ✕
                </button>
              </div>
              <div className="space-y-8">
                {scenes.map((s) => (
                  <div key={s.id} className="border-l-4 border-blue-500 pl-6">
                    <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                    <p className="text-blue-400 text-sm mb-2">📍 {s.location}</p>
                    <p className="text-gray-400 italic mb-3">({s.action})</p>
                    <p className="text-gray-200 whitespace-pre-line leading-relaxed">{s.dialogue}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <button
                  onClick={() => setShowScript(false)}
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Scene Display */}
      <div className="container mx-auto px-4 py-12">
        <div className={`bg-gradient-to-br ${scene.bg} rounded-3xl p-1 shadow-2xl mb-8`}>
          <div className="bg-slate-900/95 backdrop-blur-sm rounded-3xl p-8 md:p-12">
            {/* Scene Header */}
            <div className="text-center mb-8">
              <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md rounded-full mb-4">
                <span className="text-white font-semibold">Scene {scene.id} of {scenes.length}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 text-shadow">
                {scene.title}
              </h2>
              <p className="text-xl text-white/90 flex items-center justify-center gap-2">
                <span className="text-2xl">📍</span> {scene.location}
              </p>
            </div>

            {/* Action Description */}
            <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 mb-6 border border-white/20">
              <h3 className="text-lg font-semibold text-yellow-400 mb-3 flex items-center gap-2">
                <span className="text-2xl">🎬</span> Action
              </h3>
              <p className="text-gray-200 italic leading-relaxed">{scene.action}</p>
            </div>

            {/* Dialogue */}
            <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-green-400 mb-3 flex items-center gap-2">
                <span className="text-2xl">💬</span> Dialogue
              </h3>
              <p className="text-gray-100 text-lg leading-relaxed whitespace-pre-line">{scene.dialogue}</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between gap-4 max-w-2xl mx-auto">
          <button
            onClick={prevScene}
            disabled={currentScene === 0}
            className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-lg ${
              currentScene === 0
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700'
            }`}
          >
            ← Previous
          </button>

          <div className="text-center">
            <div className="flex gap-2 justify-center mb-2">
              {scenes.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentScene(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === currentScene ? 'bg-white w-8' : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
            <p className="text-gray-400 text-sm">Scene {currentScene + 1} / {scenes.length}</p>
          </div>

          <button
            onClick={nextScene}
            disabled={currentScene === scenes.length - 1}
            className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-lg ${
              currentScene === scenes.length - 1
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700'
            }`}
          >
            Next →
          </button>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <div className="text-4xl mb-3">🎥</div>
            <h3 className="text-xl font-bold text-white mb-2">Video Production</h3>
            <p className="text-gray-400">Professional script for shooting in Surat's iconic locations</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <div className="text-4xl mb-3">🚗</div>
            <h3 className="text-xl font-bold text-white mb-2">Drive Challenge</h3>
            <p className="text-gray-400">Exciting journey through Dutch Fort, Gardens & Tapi Riverfront</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <div className="text-4xl mb-3">🏆</div>
            <h3 className="text-xl font-bold text-white mb-2">Trophy Finale</h3>
            <p className="text-gray-400">Grand celebration with award ceremony at the end</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-md border-t border-white/10 mt-12">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-gray-400 mb-4">
            Subscribe to <span className="text-white font-bold">Imran AI Seven</span> for more adventures!
          </p>
          <div className="flex gap-4 justify-center">
            <div className="px-4 py-2 bg-red-600 text-white rounded-lg font-semibold">
              ▶️ Subscribe
            </div>
            <div className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold">
              👍 Like
            </div>
            <div className="px-4 py-2 bg-green-600 text-white rounded-lg font-semibold">
              📤 Share
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
