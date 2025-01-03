import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu({ onClose }) {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-90 z-50 flex flex-col space-y-6 p-6">
      <button
        onClick={onClose}
        className="self-end text-white focus:outline-none"
      >
        ✕
      </button>
      <Link to="/search" onClick={onClose} className="text-xl hover:underline">
        Buscar
      </Link>
      <Link to="/login" onClick={onClose} className="text-xl hover:underline">
        Acceso
      </Link>
    </div>
  );
}