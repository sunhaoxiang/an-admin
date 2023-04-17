import { useContext } from 'react'
import { AuthContext } from '@/components/AuthProvider'
import type { AuthContextType } from '@/types/context'

export const useAuth = () => {
  return useContext(AuthContext) as AuthContextType
}
