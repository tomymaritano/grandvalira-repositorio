import { render, screen } from '@testing-library/react';
import HomePage from '../app/page';
import { AuthProvider } from '../app/context/AuthContext';

const renderWithProvider = (ui: React.ReactElement) => {
  return render(<AuthProvider>{ui}</AuthProvider>);
};

describe('HomePage', () => {
  test('shows login link when not authenticated', () => {
    renderWithProvider(<HomePage />);
    expect(screen.getByText('Go to Login')).toBeInTheDocument();
  });
});
