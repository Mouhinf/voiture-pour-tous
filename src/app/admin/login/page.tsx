
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

// WARNING: This is a basic, insecure authentication method suitable only for simple admin pages
// where security is not a high concern. For any production application, especially those handling sensitive
// data or having multiple users, you should use a proper authentication service like Firebase Authentication,
// NextAuth.js, or other identity providers.

// The password is hardcoded here for simplicity. In a real-world scenario, this should be
// stored securely as an environment variable on the server.
const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'admin123';

export default function AdminLoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      // In a real app, you would set a secure, HTTP-only cookie or session token.
      // For this simple case, we'll use localStorage, but be aware of its security implications.
      localStorage.setItem('isAdminAuthenticated', 'true');
      router.push('/admin');
    } else {
      setError('Mot de passe incorrect.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-800">Accès Administrateur</h1>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="password" className="text-sm font-medium text-gray-700">Mot de passe</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Se connecter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
