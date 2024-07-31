import React, {useState } from 'react'

function UseStatePrevCount() {
    const initialCount = 0
    const [count,setCount] = useState(initialCount)

    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            console.log('inc5')
            setCount(prevCount => prevCount+1)

        }
    }

  return (
    <div>
    Count: {count}
    <br></br>
    <button onClick={() => setCount(count + 1)}>Increment</button>
    <button onClick={() => setCount(count - 1)}>Decrement</button>
    <button onClick={() => setCount(initialCount)}>Reset</button>
    <button onClick={incrementFive}> increment by 5</button>
    </div>
  )
}

export default UseStatePrevCount;