import React from 'react'
import { useState } from 'react'
import {useAuth} from './utils/auth'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [user,setUser] = useState('')
    const auth = useAuth()
    const navigate = useNavigate()

const handleLogin = () => {
    auth.login(user)
    navigate('/')
}

  return (
    <div>
        <label> Username:{''}
        <input type='text' onChange={(e)=>setUser(e.target.value)}/>
        </label>
        <button onClick={handleLogin}>login </button>
    </div>
  )
}
