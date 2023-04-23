import { Navigate, useLocation } from 'react-router-dom'
import {Watermark} from "antd";
import { rootRouter } from '@/router/router'
import { searchRoute, storage } from '@/utils'
import { useAuth } from '@/hooks/useAuth'

function AuthRouter({ children }: { children: JSX.Element }) {
  const { pathname } = useLocation()
  const auth = useAuth()
  const token = storage.getToken()

  const route = searchRoute(pathname, rootRouter)

  if (route.meta?.auth === false)
    return children

  if (!auth.user || !token)
    return <Navigate to="/login" replace={true} />

  return <Watermark content={auth.user.email}>
    {children}
  </Watermark>
}

export default AuthRouter
