import { render, screen } from '@testing-library/react';
import { AuthContext } from '../context/AuthContext';
import LoginPage from './page';

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: vi.fn() }),
}));

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <AuthContext.Provider
    value={{
      token: '',
      role: '',
      isAuthenticated: false,
      isInitialized: true,
      login: vi.fn(),
      logout: vi.fn(),
    }}
  >
    {children}
  </AuthContext.Provider>
);

describe('LoginPage', () => {
  it('renders email and password fields', () => {
    render(<LoginPage />, { wrapper: Wrapper });
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });
});
