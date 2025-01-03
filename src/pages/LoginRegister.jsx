import React, { useState } from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useSupabaseClient, useSession, useUser } from '@supabase/auth-helpers-react';
import { useNavigate } from 'react-router-dom';

export default function LoginRegister() {
  const supabase = useSupabaseClient();
  const session = useSession();
  const user = useUser();
  const navigate = useNavigate();
  const [view, setView] = useState('sign_in');

  if (session) {
    navigate('/profile');
  }

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-2xl mb-4">Sign in with ZAPT</h2>
      <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="underline mb-4">
        Visit ZAPT
      </a>
      <div className="w-full max-w-md">
        <Auth
          supabaseClient={supabase}
          providers={['google', 'facebook', 'apple']}
          socialLayout="horizontal"
          socialButtonSize="xlarge"
          appearance={{ theme: ThemeSupa }}
          view={view}
        />
        <div className="mt-4 text-center">
          {view === 'sign_in' ? (
            <>
              <p>¿No tienes una cuenta?{' '}
                <button onClick={() => setView('sign_up')} className="underline">
                  Regístrate
                </button>
              </p>
            </>
          ) : (
            <>
              <p>¿Ya tienes una cuenta?{' '}
                <button onClick={() => setView('sign_in')} className="underline">
                  Inicia sesión
                </button>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}