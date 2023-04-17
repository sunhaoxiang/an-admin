import { LoginRes } from '@/types/user'

export interface AuthContextType {
  user: LoginRes
  login: (user: LoginRes) => void
  logout: () => void
  setToken: (token: string) => void
}
