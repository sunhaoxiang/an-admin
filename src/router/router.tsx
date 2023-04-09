import { Navigate, useRoutes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'

const rootRouter = [
  {
    path: '/',
    element: <Navigate to='/dashboard' replace={true} />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    // need to be logged in to access this route
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: '/404/',
    element: <NotFound />
  },
  {
    path: '*',
    element: <Navigate to="/404" replace={true} />
  }
]

const router = () => {
  const routes = useRoutes(rootRouter)

  return routes
}

export default router
