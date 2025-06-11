'use client';

import { useEffect, useState } from 'react';
import { useApi } from '@/app/hooks/useApi';
import { useProtectedRoute } from '@/app/hooks/useProtectedRoute';
import { useToast } from '../components/ToastProvider';

export default function DashboardPage() {
  useProtectedRoute(['MODERATOR', 'ADMIN']); // 👈 Solo estos roles pueden entrar

  const { get, post } = useApi();
  const { showToast } = useToast();

  type Contact = { id: string | number; name: string; email: string; status: string };

  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchContacts = async () => {
      setIsLoading(true);
      const { data, ok, error } = await get('http://localhost:3000/contacts');

      if (ok) {
        setContacts(data);
      } else {
        showToast(error || 'Failed to fetch contacts', 'error');
      }
      setIsLoading(false);
    };

    fetchContacts();
  }, [get]);

  const handleBanContact = async (contactId: string | number) => {
    const { ok, error } = await post(
      `http://localhost:3000/contacts/${contactId}/ban`,
      {}
    );

    if (ok) {
      showToast('Contact banned', 'success');
      // Refetch contacts
      const { data } = await get('http://localhost:3000/contacts');
      setContacts(data);
    } else {
      showToast(error || 'Failed to ban contact', 'error');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Contacts Dashboard</h1>

        <div className="flex justify-end mb-4">
          <button
            onClick={() => showToast('TODO: Add Contact')}
            className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors font-semibold"
          >
            + Add Contact
          </button>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 bg-gray-50 border-b text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-5 py-3 bg-gray-50 border-b text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-5 py-3 bg-gray-50 border-b text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-5 py-3 bg-gray-50 border-b text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-5 border-b text-sm text-gray-700">
                    {contact.name}
                  </td>
                  <td className="px-5 py-5 border-b text-sm text-gray-700">
                    {contact.email}
                  </td>
                  <td className="px-5 py-5 border-b text-sm text-gray-700">
                    {contact.status}
                  </td>
                  <td className="px-5 py-5 border-b text-sm text-gray-700 text-center space-x-2">
                    <button
                      onClick={() => showToast('TODO: Edit Contact')}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-xs"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => showToast('TODO: Delete Contact')}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-xs"
                    >
                      Delete
                    </button>
                    {contact.status !== 'BANNED' && (
                      <button
                        onClick={() => handleBanContact(contact.id)}
                        className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 text-xs"
                      >
                        Ban
                      </button>
                    )}
                  </td>
                </tr>
              ))}
              {isLoading && (
                <tr>
                  <td colSpan={4} className="px-5 py-5 border-b text-center">
                    <div className="mx-auto h-5 w-5 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin" />
                  </td>
                </tr>
              )}
              {!isLoading && contacts.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-5 py-5 border-b text-center text-gray-500">
                    No contacts found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
