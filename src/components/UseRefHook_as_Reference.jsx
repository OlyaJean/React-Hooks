import React, { useRef } from 'react'

const UseRefHook_as_Reference = () => {


    // useRef to access DOM element

    const myP = useRef();
    const changeP = () => {
        myP.current.style.color = 'red'
        myP.current.textContent = 'Good Bye'
    }
    

  return (
    <div>
      <p ref={myP}>Hello World</p>
      <button onClick={changeP}>say good bye</button>
    </div>
  )
}

export default UseRefHook_as_Reference
