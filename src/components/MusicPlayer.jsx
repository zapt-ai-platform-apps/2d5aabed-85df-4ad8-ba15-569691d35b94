import React from 'react';

export default function MusicPlayer({ currentTrack }) {
  if (!currentTrack) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 p-4 flex items-center">
      <img src={currentTrack.albumCover} alt={currentTrack.title} className="w-12 h-12" />
      <div className="ml-4">
        <div className="text-lg">{currentTrack.title}</div>
        <div className="text-sm text-gray-400">{currentTrack.artist}</div>
      </div>
      <audio controls src={currentTrack.audioSrc} className="ml-auto"></audio>
    </div>
  );
}