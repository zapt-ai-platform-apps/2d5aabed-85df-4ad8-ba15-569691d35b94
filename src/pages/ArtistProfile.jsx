import React, { useEffect, useState } from 'react';
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';

export default function ArtistProfile() {
  const supabase = useSupabaseClient();
  const user = useUser();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (user) {
      // Fetch user profile data
      supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single()
        .then(({ data, error }) => {
          if (error) {
            console.error('Error fetching profile:', error);
          } else {
            setProfile(data);
          }
        });
    }
  }, [user]);

  const handleUpdate = async () => {
    // Update profile data
    const { data, error } = await supabase
      .from('profiles')
      .update(profile)
      .eq('id', user.id);
    if (error) {
      console.error('Error updating profile:', error);
    } else {
      console.log('Profile updated:', data);
    }
  };

  if (!user) {
    return <div className="p-4">Cargando...</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Perfil de Artista</h2>
      {profile ? (
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            value={profile.username || ''}
            onChange={(e) => setProfile({ ...profile, username: e.target.value })}
            placeholder="Nombre de usuario"
            className="p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none"
          />
          <input
            type="text"
            value={profile.full_name || ''}
            onChange={(e) => setProfile({ ...profile, full_name: e.target.value })}
            placeholder="Nombre completo"
            className="p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none"
          />
          <button
            onClick={handleUpdate}
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded cursor-pointer"
          >
            Actualizar Datos
          </button>
        </div>
      ) : (
        <div>Cargando perfil...</div>
      )}
    </div>
  );
}