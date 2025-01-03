import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { createClient } from '@supabase/supabase-js';
import { SupabaseProvider } from './supabaseClient';

const supabase = createClient(
  import.meta.env.VITE_PUBLIC_SUPABASE_URL,
  import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY
);

export default function App() {
  return (
    <SupabaseProvider client={supabase}>
      <div className="min-h-screen bg-gray-900 text-white">
        <Header />
        <Outlet />
        <footer className="text-center py-4">
          <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="underline">
            Made on ZAPT
          </a>
        </footer>
      </div>
    </SupabaseProvider>
  );
}