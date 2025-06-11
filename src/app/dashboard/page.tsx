'use client';

import { useEffect, useState } from 'react';
import { useApi } from '@/app/hooks/useApi';
import { useProtectedRoute } from '@/app/hooks/useProtectedRoute';

export default function DashboardPage() {
  useProtectedRoute(['MODERATOR', 'ADMIN']); // 👈 Solo estos roles pueden entrar

  const { get, post } = useApi();

  type Contact = { id: string | number; name: string; email: string; status: string };

  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const { data, ok } = await get('/contacts');

      if (ok) {
        setContacts(data);
      } else {
        console.error('Failed to fetch contacts');
      }
    };

    fetchContacts();
  }, [get]);

  const handleBanContact = async (contactId: string | number) => {
    const { ok } = await post(`/contacts/${contactId}/ban`, {});

    if (ok) {
      alert('Contact banned');
      // Refetch contacts
      const { data } = await get('/contacts');
      setContacts(data);
    } else {
      alert('Failed to ban contact');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Contacts Dashboard</h1>

        <div className="flex justify-end mb-4">
          <button
            onClick={() => alert('TODO: Add Contact')}
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
                      onClick={() => alert('TODO: Edit Contact')}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-xs"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => alert('TODO: Delete Contact')}
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
              {contacts.length === 0 && (
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