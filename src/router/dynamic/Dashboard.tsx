import { DashboardOutlined } from '@ant-design/icons'
import type { MyRouterObject } from '@/types/router'

const DashboardRouter: MyRouterObject[] = [
  {
    path: '/dashboard',
    meta: {
      title: 'Dashboard',
      key: 'dashboard',
      icon: <DashboardOutlined />,
    },
    element,
  },
]
