import { renderHook } from '@testing-library/react';
import { AuthContext } from '../context/AuthContext';
import { useApi } from './useApi';

const fetchMock = vi.fn(() =>
  Promise.resolve({ ok: true, json: () => Promise.resolve({}) })
);

vi.stubGlobal('fetch', fetchMock);

describe('useApi', () => {
  it('sends Authorization header', async () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <AuthContext.Provider
        value={{
          token: 'abc123',
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

    const { result } = renderHook(() => useApi(), { wrapper });
    await result.current.get('/test');

    expect(fetchMock).toHaveBeenCalledWith('/test', expect.objectContaining({
      headers: expect.objectContaining({ Authorization: 'Bearer abc123' }),
    }));
  });
});
