import { HashRouter } from 'react-router-dom'
import Router from './router/router'
import AuthProvider from '@/components/AuthProvider'
// import './App.css'

const App = () => {
  return (
    <AuthProvider>
      <HashRouter>
        <Router />
      </HashRouter>
    </AuthProvider>
  )
}

export default App
