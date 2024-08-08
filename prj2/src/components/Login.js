import React from 'react'
import { useState } from 'react'
import {useAuth} from './utils/auth'
import {useLocation, useNavigate } from 'react-router-dom'

export default function Login() {
    const [user,setUser] = useState('')
    const auth = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const rediretPath = location.state?.path || '/'

const handleLogin = () => {
    auth.login(user)
    navigate(rediretPath,{replace:true})
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
