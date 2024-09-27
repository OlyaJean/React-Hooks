import React from 'react'

const Header = () => {

    console.log('Header rendered');
  return (
    <div>
      <p>Header</p>
    </div>
  )
}

export default React.memo(Header)
