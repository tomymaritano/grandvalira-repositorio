'use client';

import Link from 'next/link';
import { useAuth } from '@/app/context/AuthContext';

export default function HomePage() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">
          Welcome to the Employee Contacts App 🚀
        </h1>

        {isAuthenticated ? (
          <>
            <p className="text-green-600 font-semibold mb-4">You are logged in ✅</p>
            <button
              onClick={logout}
              className="mb-6 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors font-semibold"
            >
              Logout
            </button>

            <nav>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/contacts"
                    className="block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  >
                    Contacts
                  </Link>
                </li>
                <li>
                  <Link
                    href="/audit-log"
                    className="block bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors font-semibold"
                  >
                    Audit Log (Coming soon)
                  </Link>
                </li>
              </ul>
            </nav>
          </>
        ) : (
          <>
            <p className="text-gray-700 mb-4">Please log in to access contacts.</p>
            <Link
              href="/login"
              className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Go to Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
}