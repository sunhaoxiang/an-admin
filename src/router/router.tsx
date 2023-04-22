import { Navigate, useRoutes } from 'react-router-dom'
import Login from '@/pages/Login'
import NotFound from '@/pages/NotFound'
import { normalizeRoute } from '@/utils'
import type { MyRouterObject } from '@/types/router'

const dynamicRoutes: MyRouterObject[] = []

const authRouteModules: Record<string, {
  [key: string]: MyRouterObject[]
}> = import.meta.glob('./dynamic/*.tsx', { eager: true })

Object.keys(authRouteModules).forEach((item) => {
  const module = authRouteModules[item].default.map((route) => {
    route.meta!.auth = true
    route.meta!.index = route.meta?.index || -1

    return route
  })
  dynamicRoutes.push(...module)
})

export const authRoutes = normalizeRoute(dynamicRoutes)

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
  ...authRoutes,
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
