import { Navigate, useRoutes } from 'react-router-dom'
import Login from '@/pages/Login'
import NotFound from '@/pages/NotFound'
import { normalizeRoute } from '@/utils'
import type { MyRouterObject } from '@/types/router'

const dynamicRoutes: MyRouterObject[] = []

const authRoutes: Record<string, {
  [key: string]: MyRouterObject[]
}> = import.meta.glob('./dynamic/*.tsx', { eager: true })

Object.keys(authRoutes).forEach((item) => {
  const module = authRoutes[item].default.map((route) => {
    route.meta!.auth = true
    route.meta!.index = route.meta?.index || -1

    return route
  })
  dynamicRoutes.push(...module)
})

export const normalizeAuthRoutes = normalizeRoute(dynamicRoutes)

export const rootRouter = [
  {
    path: '/',
    element: <Navigate to="/dashboard" replace={true} />,
  },
  {
    path: '/login',
    element: <Login />,
    meta: {
      title: 'Login',
      key: 'login',
      auth: false,
    },
  },
  ...normalizeAuthRoutes,
  {
    path: '/404',
    element: <NotFound />,
    meta: {
      title: 'Not Found',
      key: 'notfound',
      auth: false,
    },
  },
  {
    path: '*',
    element: <Navigate to="/404" replace={true} />,
  },
]

function Router() {
  const routes = useRoutes(rootRouter)

  return routes
}

export default Router
