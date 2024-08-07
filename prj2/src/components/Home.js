import React from 'react'
import { replace, useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()
  return (
    <>
    <div>Home Page</div>
    <button onClick={()=> navigate('order-summary', {replace: true})}> place order</button>
    </>
  )
}