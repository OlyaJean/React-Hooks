import React, { useState } from 'react'

const UseStateHook_with_object = () => {
    const [show,setShow] = useState({
        myShow:'"Friends"',
        char1:"Chandler",
        char2:"Joye"
    })

//How to change only one parameter inside the object

const toRachel = ()=>{
    setShow({...show,char2:"Rachel"})
}
  return (
    <div>
      <p>My favorite TV show is {show.myShow}</p>
      <p>My favorite characters are {show.char1} and {show.char2}</p>
      <button onClick={toRachel}>Rachel</button>
    </div>
  )
}

export default UseStateHook_with_object
