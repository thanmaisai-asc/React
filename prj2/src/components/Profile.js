import React from 'react'
import { useAuth } from './utils/auth'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
    const auth = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        auth.logout()
        navigate('/')
    }
  return (
    <div>
        Welcome {auth.user}
        <button onClick={handleLogout}>logout</button>
    </div>
  )
}
