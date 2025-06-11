'use client';

import { useCallback } from 'react';
import { useAuth } from '../context/AuthContext';

export const useApi = () => {
  const { token } = useAuth();

  const get = useCallback(async (url: string) => {
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json().catch(() => null);
      if (!response.ok) {
        let message = 'Request failed';
        if (response.status === 401) message = 'Unauthorized';
        return { data, ok: false, status: response.status, error: message };
      }

      return { data, ok: true, status: response.status };
    } catch (error) {
      console.error('GET error:', error);
      return { data: null, ok: false, status: 0, error: 'Network error' };
    }
  }, [token]);

  const post = useCallback(async (url: string, body: unknown) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });

      const data = await response.json().catch(() => null);
      if (!response.ok) {
        let message = 'Request failed';
        if (response.status === 401) message = 'Unauthorized';
        return { data, ok: false, status: response.status, error: message };
      }

      return { data, ok: true, status: response.status };
    } catch (error) {
      console.error('POST error:', error);
      return { data: null, ok: false, status: 0, error: 'Network error' };
    }
  }, [token]);

  return { get, post };
};
