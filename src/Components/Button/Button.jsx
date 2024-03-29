import React from 'react'
import './Button.css'

const Button = (props) => {
  return (
    <button className='mainBtn'>
        {props.children}
    </button>
  )
}

export default Button