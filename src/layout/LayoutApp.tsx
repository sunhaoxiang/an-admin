import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import {Button, Result, Layout, Space } from 'antd'
import {useAuth} from '@/hooks/useAuth'

const {
  Content,
  Footer,
  Header
} = Layout

function LayoutApp() {
  return <Space direction="vertical" size={[0, 48]} style={{width: '100%'}}>
    <Layout>
      <Header>Header</Header>
      <Layout style={{padding: '0 24px'}}>
        <Content>
          <Outlet />
        </Content>
        <Footer>footer</Footer>
      </Layout>
    </Layout>
  </Space>
}

export default LayoutApp
