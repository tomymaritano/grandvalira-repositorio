import { render, screen } from '@testing-library/react';
import ContactsPage from '../app/contacts/page';
import { AuthProvider } from '../app/context/AuthContext';

jest.mock('../app/hooks/useApi', () => ({
  useApi: () => ({ get: jest.fn().mockResolvedValue({ data: [], ok: true }) }),
}));

jest.mock('../app/hooks/useProtectedRoute', () => ({
  useProtectedRoute: () => {},
}));

describe('ContactsPage', () => {
  test('shows heading', () => {
    render(
      <AuthProvider>
        <ContactsPage />
      </AuthProvider>
    );
    expect(screen.getByText('Contacts')).toBeInTheDocument();
  });
});
