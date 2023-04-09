import { useNavigate } from 'react-router-dom'
import { Button, Result } from "antd"

const NotFound = () => {
  function goHome() {
    const navigate = useNavigate()
    navigate('/')
  }

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="primary" onClick={goHome}>Back Home</Button>}
    ></Result>
  )
}

export default NotFound
