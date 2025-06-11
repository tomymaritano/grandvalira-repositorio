'use client'

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react'

type AuthContextType = {
  token: string
  role: string
  isAuthenticated: boolean
  login: (token: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType>({
  token: '',
  role: '',
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
})

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string>('')
  const [role, setRole] = useState<string>('')

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('role')

    setToken('')
    setRole('')
  }

  const login = (newToken: string): string => {
    const decoded = JSON.parse(atob(newToken.split('.')[1]))
    const userRole = decoded.role

    localStorage.setItem('token', newToken)
    localStorage.setItem('role', userRole)

    setToken(newToken)
    setRole(userRole)

    return userRole // 👈 muy importante para que LoginPage pueda redirigir
  }

  useEffect(() => {
    const storedToken = localStorage.getItem('token')
    const storedRole = localStorage.getItem('role')

    if (storedToken) {
      try {
        const decoded = JSON.parse(atob(storedToken.split('.')[1]))

        if (decoded.exp && decoded.exp * 1000 < Date.now()) {
          logout()
          return
        }

        setToken(storedToken)

        if (storedRole) {
          setRole(storedRole)
        } else if (decoded.role) {
          setRole(decoded.role)
        }
      } catch {
        logout()
      }
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{ token, role, isAuthenticated: !!token, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
