import React, { useContext } from 'react'
import { UseContextHook } from './UseContextHook'

const ComponentForContextHook = () => {

    const phone = useContext(UseContextHook)
    const myName = useContext(UseContextHook)
  return (
    <div>
      <p>Component For Context Hook</p>
      <p>Phone:{phone}</p>
      <p>My name: {myName}</p>
    </div>
  )
}

export default ComponentForContextHook
// init the variable  phone and assign it to use context from (UseContextHook) file