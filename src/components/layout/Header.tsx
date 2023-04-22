import { useEffect } from 'react'
import type { CSSProperties } from 'react'
import { Layout } from 'antd'
import { userInfoApi } from '@/api/user'
import { useAuth } from '@/hooks/useAuth'
import { storage } from '@/utils'

const { Header: AntdHeader } = Layout

export const headerStyle: CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  lineHeight: '64px',
}

function Header() {
  const auth = useAuth()
  const token = storage.getToken()
  useEffect(() => {
    if (token && !auth.user._id) {
      userInfoApi().then((res) => {
        auth.login({
          _id: res._id,
          email: res.email,
          token,
        })
      })
    }
  })

  return <AntdHeader style={headerStyle}>
    <div>
      Welcome, {auth.user.email}
    </div>
  </AntdHeader>
}

export default Header
