import React from 'react'
import { useParams } from 'react-router-dom'

export default function UserDetails() {
    const urlParams = useParams()
    const uid = urlParams.userId
  return (
    <div>UserDetails  {uid}</div>
  )
}