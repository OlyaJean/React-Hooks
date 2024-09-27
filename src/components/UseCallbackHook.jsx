import React, { useCallback, useState } from 'react'
import Header from './Header';

const UseCallbackHook = () => {

    const [count,setCounter] = useState(0);

    //const newFunc = ()=>{}
const newFunc = useCallback(()=>{},[])
    

  return (
    <div>
      <Header newFunc = {newFunc}/>
      {/* Lastly, we created newFunc and passed it to Header el as a prop,
      now Header element re-renders again, because every time we click the button, newFunc updates in both files, which makes Header to re-render 
      
      To prevent it, we use useCallback with depend. it will catch that function every time our main funct updates. If we add a depend that updates, it will re ender header el*/}
      <p>{count}</p>
      <button onClick={()=>{setCounter(count + 1)}}>click here</button>
    </div>
  )
}

export default UseCallbackHook

//after we mounted Header element, clicking on the button, header element is being rendered and concole log message executes


//Go back to Header element and wrap Header in the last line with React.memo(Header). it will memorize the state of the header and wont execute it every time you click the button