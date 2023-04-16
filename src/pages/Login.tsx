import { useState } from 'react'
import { Button, Form, Input, Space } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import axios from 'axios'
import SparkMd5 from 'spark-md5'
import CanvasBackground from '@/components/CanvasBackground'
import './Login.css'

interface LoginData {
  email: string
  passwd: string
  captcha: string
}

function Login() {
  const [form] = Form.useForm()

  function onFinish(values: LoginData) {
    console.log(values)
    const obj: LoginData = {
      email: values.email,
      passwd: SparkMd5.hash(values.passwd),
      captcha: values.captcha
    }
    axios.post('/api/user/login', obj, {
      headers: {
        'apiKey': import.meta.env.VITE_APP_API_KEY
      }
    })
      .then(res => {
        console.log(res)
      })
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
          <Form.Item name="captcha">
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
