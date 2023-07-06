import React from 'react'

const Footer = ({length}) => {
  return (
    <div className='footer'> {length==0?'No of item':'No of items'} {length}</div>
  )
}

export default Footer