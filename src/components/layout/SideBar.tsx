import { useLocation, useNavigate } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import type { MenuProps } from 'antd'
import { authRoutes } from '@/router/router'

const { Sider } = Layout

function SideBar() {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const items: MenuProps['items'] = authRoutes.map((route, i) => {
    const key = route.path || String(i)

    return {
      key,
      icon: route.meta?.icon,
      label: route.meta?.title,
      children: route.children?.map((child, j) => {
        return {
          key: child.path,
          label: child.meta?.title,
        }
      }),
    }
  })

  const onClick: MenuProps['onClick'] = ({ key }) => {
    navigate(key)
  }

  return <Sider>
    <Menu
      mode="inline"
      selectedKeys={[pathname]}
      style={{ height: '100%' }}
      items={items}
      onClick={onClick}
    >

    </Menu>
  </Sider>
}

export default SideBar
