import React, { useState } from 'react';

export default function Search() {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    // Implement search functionality
    console.log('Searching for:', query);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Buscar Música y Usuarios</h2>
      <div className="flex">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar..."
          className="w-full p-2 rounded-l bg-gray-800 border border-gray-700 focus:outline-none"
        />
        <button
          onClick={handleSearch}
          className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-r cursor-pointer"
        >
          Buscar
        </button>
      </div>
    </div>
  );
}