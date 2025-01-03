import { createContext, useContext } from 'react';
import { createClient } from '@supabase/supabase-js';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-react';

const SupabaseContext = createContext(null);

export const SupabaseProvider = ({ children, client }) => {
  return (
    <SupabaseContext.Provider value={client}>
      {children}
    </SupabaseContext.Provider>
  );
};

export const useSupabaseClient = () => {
  const context = useContext(SupabaseContext);
  if (context === undefined) {
    throw new Error('useSupabaseClient must be used within a SupabaseProvider');
  }
  return context;
};

export const createEvent = async (eventType, dataInput) => {
  // Implement createEvent if needed
};