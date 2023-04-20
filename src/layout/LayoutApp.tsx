import { Outlet, useNavigate } from 'react-router-dom'

function LayoutApp() {
  const navigate = useNavigate()
  function goHome() {
    navigate('/')
  }

  return (
    <div>
      <div>header</div>
      <div>sidebar</div>
      <div>
        <h2>hello</h2>
        <Outlet />
      </div>
      <div>footer</div>
    </div>
  )
}

export default LayoutApp
