import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-gray-800">
      <div className="flex items-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none md:hidden"
        >
          ☰
        </button>
        <Link to="/" className="flex items-center ml-2">
          <img src="https://images.unsplash.com/photo-1574607383172-1421479aec9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHw4fHxtdXNpY2FsJTIwbm90ZSUyMGljb258ZW58MHx8fHwxNzM1ODY2NDI3fDA&ixlib=rb-4.0.3&q=80&w=1080"
            
            alt="Logo"
            className="w-8 h-8"
            data-image-request="musical note icon"
          />
          <span className="ml-2 text-xl font-bold">MUSICAUDIO</span>
        </Link>
      </div>
      <nav className="hidden md:flex space-x-4">
        <Link to="/search" className="hover:underline">
          Buscar
        </Link>
        <Link to="/login" className="hover:underline">
          Acceso
        </Link>
      </nav>
      {isMenuOpen && <Menu onClose={() => setIsMenuOpen(false)} />}
    </header>
  );
}