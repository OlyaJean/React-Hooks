import React, { useEffect, useRef, useState } from 'react'

const UseRefHook = () => {
    const [count,setCount] = useState(0)


    //use current with useRef value
    
    const renderCount = useRef(0)
    useEffect(()=>{
    renderCount.current = renderCount.current + 1
})

  return (
    <div>
      <p>{count}</p>
      <button onClick={()=>{setCount(count => count + 1)}}>+</button>
      <button onClick={()=>{setCount(count => count - 1)}}>-</button>
      <p>Render count: {renderCount.current}</p>
    </div>
  )
}

export default UseRefHook
