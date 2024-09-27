import React, { useContext } from 'react'
import { UseContextHook } from './components/UseContextHook'

const Contact = () => {
    const phone = useContext(UseContextHook)
  return (
    <div>
      <p>Conatct</p>
      <p>Phone: {phone}</p>
    </div>
  )
}

export default Contact
// init the variable  phone and assign it to use context from (UseContextHook) file