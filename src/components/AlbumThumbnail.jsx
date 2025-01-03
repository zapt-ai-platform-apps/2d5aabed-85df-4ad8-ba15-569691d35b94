import React from 'react';

export default function AlbumThumbnail({ album, onPlay }) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <img src={album.cover} alt={album.title} className="w-full h-48 object-cover rounded" />
      <h3 className="mt-2 text-lg">{album.title}</h3>
      <p className="text-sm text-gray-400">{album.artist}</p>
      <button
        onClick={() => onPlay(album)}
        className="mt-2 bg-green-500 hover:bg-green-600 text-white py-1 px-4 rounded cursor-pointer"
      >
        Reproducir
      </button>
    </div>
  );
}