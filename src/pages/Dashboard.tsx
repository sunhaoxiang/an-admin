import { useState, useEffect } from 'react'
import { axios } from '@/utils'
import { useAuth } from '@/hooks/useAuth'

function Dashboard() {
  const auth = useAuth()

  const [data, setData] = useState([])
  axios.get('/funnycoder').then(res => {

  })
  useEffect(() => {

  }, [])

  return (
    <div>
      <h1>Dashboard</h1>
      <h1>{auth.user.email}</h1>
    </div>
  )
}

export default Dashboard
