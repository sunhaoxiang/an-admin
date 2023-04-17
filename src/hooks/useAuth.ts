import { useContext } from 'react'
import { AuthContext } from '@/components/AuthProvider'
import type { AuthContextType } from '@/components/AuthProvider'

export const useAuth = () => {
  return useContext(AuthContext) as AuthContextType
}
