import { SignInType } from '@/schema/signin.schema'
import { UserType } from '@/schema/user.schema'
import { authenticateUser, signOut } from '@/service/auth'
import { getCurrentUser } from '@/service/user'
import { createContext, useContext, useState, useEffect } from 'react'

interface AuthContextType {
  user: UserType | null
  loading: boolean
  login: (data: SignInType) => Promise<UserType | void>
  logout: () => void
  refresh: () => Promise<UserType | void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserType | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    refresh().finally(() => setLoading(false))
  }, [])

  const login = async (data: SignInType) => {
    await authenticateUser(data)
    return await refresh()
  }

  const refresh = async () => {
    const user = await getCurrentUser()
    if (user) {
      setUser(user)
      return user
    } else {
      setUser(null)
    }
  }

  const logout = async () => {
    await signOut()
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, refresh }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
