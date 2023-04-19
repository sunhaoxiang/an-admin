import { useContext } from 'react'
import { AuthContext } from '@/components/AuthProvider'
import type { AuthContextType } from '@/components/AuthProvider'

export function useAuth() {
  return useContext(AuthContext) as AuthContextType
}
