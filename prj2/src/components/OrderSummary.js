import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function OrderSummary() {
    const navigate = useNavigate()

  return (
    <>
    <div>Order is being dispatched</div>
    <button onClick={()=>navigate('/',{replace:true})} >go back</button>
    </>
  )
}