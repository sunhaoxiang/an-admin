import { HashRouter } from 'react-router-dom'
import Router from './router/router'
import AuthProvider from '@/components/AuthProvider'
import AuthRouter from '@/components/AuthRouter'

// import './App.css'

function App() {
  return (
    <AuthProvider>
      <HashRouter>
        <AuthRouter>
          <Router />
        </AuthRouter>
      </HashRouter>
    </AuthProvider>
  )
}

export default App
