import LayoutApp from "@/layout/LayoutApp";
import { DashboardOutlined } from '@ant-design/icons'
import type { MyRouterObject } from '@/types/router'

const DashboardRouter: MyRouterObject[] = [
  {
    path: '/dashboard',
    meta: {
      title: 'Dashboard',
      key: 'dashboard',
      icon: <DashboardOutlined />,
      index: 1
    },
    element: <LayoutApp />,
    children: [
      {
        path: 'index',
        element: <div>Dashboard</div>,
      },
      {
        path: '/dashboard/upload',
        element: <div>Upload</div>,
      }
    ]
  },
]

export default DashboardRouter
