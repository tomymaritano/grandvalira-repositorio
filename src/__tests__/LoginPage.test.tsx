import { render, screen } from '@testing-library/react';
import LoginPage from '../app/login/page';
import { AuthProvider } from '../app/context/AuthContext';

jest.mock('next/navigation', () => ({ useRouter: () => ({ push: jest.fn() }) }));

describe('LoginPage', () => {
  test('renders login button', () => {
    render(
      <AuthProvider>
        <LoginPage />
      </AuthProvider>
    );
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });
});
