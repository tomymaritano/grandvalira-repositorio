'use client';

import { useAuth } from '../context/AuthContext';

export const useApi = () => {
  const { token } = useAuth();

 const get = async (url: string) => {
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    return { data, ok: response.ok };
  } catch (error) {
    console.error('GET error:', error);
    return { data: null, ok: false };
  }
};

const post = async (url: string, body: unknown) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return { data, ok: response.ok };
  } catch (error) {
    console.error('POST error:', error);
    return { data: null, ok: false };
  }
};

  return { get, post };
};