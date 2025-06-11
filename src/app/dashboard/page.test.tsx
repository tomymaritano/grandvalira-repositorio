import React from 'react';
import { render, waitFor } from '@testing-library/react';
import DashboardPage from './page';
import { AuthContext } from '../context/AuthContext';

vi.mock('../hooks/useProtectedRoute', () => ({
  useProtectedRoute: () => {},
}));

vi.mock('../components/ToastProvider', () => ({
  useToast: () => ({ showToast: vi.fn() }),
}));

const fetchMock = vi.fn(() =>
  Promise.resolve({ ok: true, json: () => Promise.resolve([]) })
);
vi.stubGlobal('fetch', fetchMock);

const Wrapper = (token: string) =>
  function WrapperComponent({ children }: { children: React.ReactNode }) {
    return (
      <AuthContext.Provider
        value={{
          token,
          role: 'ADMIN',
          isAuthenticated: true,
          isInitialized: true,
          login: vi.fn(),
          logout: vi.fn(),
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  };

describe('DashboardPage', () => {
  it('fetches contacts only once with stable token', async () => {
    render(
      <React.StrictMode>
        <DashboardPage />
      </React.StrictMode>,
      { wrapper: Wrapper('abc') }
    );

    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));
  });
});

