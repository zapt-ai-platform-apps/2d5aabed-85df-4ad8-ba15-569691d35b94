import React, { useState } from 'react';
import AlbumThumbnail from '../components/AlbumThumbnail';
import MusicPlayer from '../components/MusicPlayer';

const sampleAlbums = [
  {
    id: 1,
    title: 'Album Uno',
    artist: 'Artista Uno',
    cover: 'PLACEHOLDER',
    audioSrc: 'PLACEHOLDER_AUDIO_1',
  },
  {
    id: 2,
    title: 'Album Dos',
    artist: 'Artista Dos',
    cover: 'PLACEHOLDER',
    audioSrc: 'PLACEHOLDER_AUDIO_2',
  },
  // Add more albums as needed
];

export default function Home() {
  const [currentTrack, setCurrentTrack] = useState(null);

  const handlePlay = (album) => {
    setCurrentTrack({
      title: album.title,
      artist: album.artist,
      albumCover: album.cover,
      audioSrc: album.audioSrc,
    });
  };

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      {sampleAlbums.map((album) => (
        <AlbumThumbnail key={album.id} album={album} onPlay={handlePlay} />
      ))}
      <MusicPlayer currentTrack={currentTrack} />
    </div>
  );
}