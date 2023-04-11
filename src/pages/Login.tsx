import { useState } from 'react'
import { Form, Input, Button} from 'antd'
import {} from '@ant-design/icons'
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
          <Form.Item>
            <Input placeholder="Username" />
          </Form.Item>
          <Form.Item>
            <Input placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">Login</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login
