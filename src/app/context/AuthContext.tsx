'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

export type AuthContextType = {
  role: string;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<string | null>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({
  role: '',
  isAuthenticated: false,
  login: async () => null,
  logout: async () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [role, setRole] = useState<string>('');

  const fetchSession = async () => {
    try {
      const res = await fetch(`${API_URL}/auth/session`, { credentials: 'include' });
      if (res.ok) {
        const data = await res.json();
        setRole(data.role);
      } else {
        setRole('');
      }
    } catch {
      setRole('');
    }
  };

  useEffect(() => {
    fetchSession();
  }, []);

  const login = async (email: string, password: string): Promise<string | null> => {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      const data = await res.json();
      setRole(data.role);
      return data.role as string;
    }

    return null;
  };

  const logout = async () => {
    await fetch(`${API_URL}/auth/logout`, { method: 'POST', credentials: 'include' });
    setRole('');
  };

  return (
    <AuthContext.Provider value={{ role, isAuthenticated: role !== '', login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
