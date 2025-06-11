import { useState } from 'react';

export const useAuth = () => {
  const [token, setToken] = useState(() => localStorage.getItem('token') || '');

  const login = async (email, password) => {
    const response = await fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem('token', data.token);
      setToken(data.token);
      return true;
    } else {
      console.error('Login failed:', data.error);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken('');
  };

  return {
    token,
    login,
    logout,
  };
};