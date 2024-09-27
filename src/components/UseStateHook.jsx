import React, { useState } from 'react'

const UseStateHook = () => {

 const [color,setColor] = useState('yellow')
const redColor = () => {
  setColor('red')
}
const blueColor = () => {
  setColor('blue')
}
const greenColor = () => {
  setColor('green')
}



  return (
    <div>
      <p>My favorite color is {color}</p>
      <button onClick={redColor}>red</button>
      <button onClick={blueColor}>blue</button>
      <button onClick={greenColor}>green</button>
     
    </div>
  )
}

export default UseStateHook
