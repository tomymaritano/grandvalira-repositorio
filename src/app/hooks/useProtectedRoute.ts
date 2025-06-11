'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/context/AuthContext';

/**
 * Hook para proteger rutas.
 * 
 * @param allowedRoles array de roles permitidos (por ejemplo: ['USER', 'MODERATOR'])
 */
export const useProtectedRoute = (allowedRoles: string[]) => {
  const { isAuthenticated, role } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      // Si no está autenticado → redirect a login
      router.push('/login');
    } else if (!allowedRoles.includes(role)) {
      // Si no tiene el role adecuado → redirect a contacts
      router.push('/contacts');
    }
    // Si pasa ambas validaciones, se queda en la página.
  }, [isAuthenticated, role, router, allowedRoles]);
};