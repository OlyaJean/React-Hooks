import { createContext } from "react";

 export const UseContextHook = createContext();

 const ContextProvider =(props)=>{
    const phone = '+1 2345678990';
    const myName = "Olya Jean"
 
    return(
        <UseContextHook.Provider value={[phone,myName]}>
            {props.children}

        </UseContextHook.Provider>
    )
 }
 export default ContextProvider
//used to acces data in other components without passing props
//It's global data that can be accessed from any component
//first stap is to create context

//now we need to wrap <App/> element inside the main.jsx
//With <ContextProvider>


//we can pass multiple data,
//for this we have to put value properties in double curly braces