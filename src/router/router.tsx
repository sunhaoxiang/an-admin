import { Navigate, useRoutes } from 'react-router-dom'
import Dashboard from '@/pages/Dashboard'
import Login from '@/pages/Login'
import NotFound from '@/pages/NotFound'

const authRouter = []

const rootRouter = [
  {
    path: '/',
    element: <Navigate to='/dashboard' replace={true} />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  ...authRouter,
  {
    path: '/404',
    element: <NotFound />,
  },
  {
    path: '*',
    element: <Navigate to="/404" replace={true} />,
  },
]

function router() {
  const routes = useRoutes(rootRouter)

  return routes
}

export default router
