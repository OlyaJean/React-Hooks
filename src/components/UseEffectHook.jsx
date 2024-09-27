import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {

 //for useEffect we need yo provide callback function and dependencies in array after comma
 //If depen array is empty, useEffect callback function will be executed only once. 
 //value inside depen array. Call back function will execute only if the value changes.
 //no array. useeffect will run forever

const [count,setCount] = useState(0)
useEffect(()=>{
    setTimeout(()=>{
setCount(count=> count+1)
    },2000)
},[])
//if we remove depen array, the counter will keep going forever. Or if we put count inside. it will run forever also , because count changes.
  return (
    <div>
      <p>I've rendered {count} times</p>
    </div>
  )
}

export default UseEffectHook
