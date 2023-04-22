import { Outlet } from 'react-router-dom'
import { Layout, Space } from 'antd'
import Header from '@/components/layout/Header'
import SideBar from '@/components/layout/SideBar'

const {
  Content,
  Footer,
} = Layout

function LayoutApp() {
  return <Space direction="vertical" size={[0, 48]} style={{ width: '100%' }}>
    <Layout>
      <Header />
      <Layout style={{ padding: '0 24px' }}>
        <SideBar />
        <Content>
          <Outlet />
        </Content>
        <Footer>footer</Footer>
      </Layout>
    </Layout>
  </Space>
}

export default LayoutApp
