'use client';

import { useEffect, useState } from 'react';
import { useApi } from '@/app/hooks/useApi';
import { useProtectedRoute } from '@/app/hooks/useProtectedRoute'; // 👈 Importas el hook

export default function ContactsPage() {
  // 👈 Proteges esta página → todos los roles pueden entrar
  useProtectedRoute(['USER', 'MODERATOR', 'ADMIN']);

  const { get } = useApi();

  type Contact = { id: string | number; name: string; email: string };

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

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Contacts</h1>

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
                </tr>
              ))}
              {contacts.length === 0 && (
                <tr>
                  <td
                    colSpan={2}
                    className="px-5 py-5 border-b text-center text-gray-500"
                  >
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