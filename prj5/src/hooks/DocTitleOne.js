import React, { useEffect, useState } from 'react'
import useDocumentTitle from './useDocumentTitle'

export default function DocTitleOne() {
    const [count,setCount] = useState(0)

   useDocumentTitle(count)
  return (
    <div><button onClick={()=>{setCount(count+1)}}>Count</button></div>
  )
}