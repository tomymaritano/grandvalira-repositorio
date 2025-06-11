'use client';

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

export const useApi = () => {

 const get = async (url: string) => {
  try {
    const response = await fetch(`${API_URL}${url}`, {
      credentials: 'include',
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
    const response = await fetch(`${API_URL}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
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