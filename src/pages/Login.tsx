import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Form, Input, Space, message } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import SparkMd5 from 'spark-md5'
import { userLoginApi } from '@/api/user'
import { useAuth } from '@/hooks/useAuth'
import type { LoginData } from '@/types/user'
import { storage } from '@/utils'
import CanvasBackground from '@/components/CanvasBackground'
import './Login.css'

const Login = () => {
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const auth = useAuth()

  async function onFinish(values: LoginData) {
    const obj: LoginData = {
      email: values.email,
      passwd: SparkMd5.hash(values.passwd),
      captcha: values.captcha
    }
    const result = await userLoginApi(obj)
    if (result.token) {
      storage.setToken(result.token)
      auth.login(result)
      message.success('Login success')
      navigate('/dashboard')
    }
  }

  const [captcha, setCaptcha] = useState('/api/captcha')

  function handleCaptcha() {
    setCaptcha('/api/captcha?' + SparkMd5.hash(new Date().getTime().toString()))
  }

  function handleTest () {
    fetch('/api/user/hi', {
      headers: {
        'apiKey': import.meta.env.VITE_APP_API_KEY
      }
    })
      .then(res => res.json())
      .then(res => {
        console.log(res)
      })
  }

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="login-title">SOLAR ADMIN</div>
        <Form
          form={form}
          name="login"
          labelCol={{ span: 5 }}
          size="large"
          initialValues={{
            email: '316783812@qq.com',
            passwd: '316783812'
          }}
          onFinish={onFinish}
        >
          <Form.Item name="email" rules={
            [
              { required: true, message: 'Please enter the Email' },
              { type: 'email', message: 'Please enter the correct Email' }
            ]
          }>
            <Input placeholder="Username" prefix={<UserOutlined />} />
          </Form.Item>
          <Form.Item name="passwd" rules={
            [
              { required: true, message: 'Please enter the password' },
              { min: 6, message: 'The password must be at least 6 characters' },
            ]
          }>
            <Input.Password placeholder="Password" prefix={<LockOutlined />} />
          </Form.Item>
          <Form.Item name="captcha" rules={
            [{ required: true, message: 'Please enter the captcha' }]
          }>
            <Space>
              <Input placeholder="Captcha" />
              <img src={captcha} onClick={handleCaptcha} alt="captcha" />
            </Space>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">Submit</Button>
            <Button onClick={handleTest}>Test</Button>
          </Form.Item>
        </Form>
      </div>
      <CanvasBackground />
    </div>
  )
}

export default Login
