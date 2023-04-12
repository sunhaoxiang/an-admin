import { useState } from 'react'
import { Form, Input, Button} from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import './Login.css'

const Login = () => {
  const [form] = Form.useForm()

  function onFinish(values: any) {
    console.log('Success:', values)
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
          onFinish={onFinish}
        >
          <Form.Item name="username" rules={
            [ {required: true, message: 'Please enter the username'} ]
          }>
            <Input placeholder="Username" prefix={<UserOutlined />} />
          </Form.Item>
          <Form.Item name="password" rules={
            [ {required: true, message: 'Please enter the password'} ]
          }>
            <Input.Password placeholder="Password" prefix={<LockOutlined />} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login
