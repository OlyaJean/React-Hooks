import React, { useState, useMemo } from 'react'

const UseMemoHook = () => {

    // use memorized value
    //callback function returns memorized function
    //runs only when its dependencies get updated

    const [number,setNumber] = useState(0);
    const [counter,setCounter] = useState(0);

    function cubeNum(num){
        console.log('calculation is done');
        //this function will be executed evry time there any updates on the page. To prevent it, we need to use useMemo hook
        return Math.pow(num,3)
    }

    //const result = cubeNum(number)
    const result = useMemo(()=>{return cubeNum(number)},[number])
    //here we provided a depend number, so the funciton will execute only when number gets updated through input field
  return (
    <div>
      <input type="number" value={number} onChange={(e)=>{setNumber(e.target.value)}}/>
      <p>Cube of the number: {result}</p>
      <button onClick={()=>{setCounter(counter+1)}}>counter++</button>
      <p>counter: {counter}</p>
    </div>
  )
}

export default UseMemoHook
