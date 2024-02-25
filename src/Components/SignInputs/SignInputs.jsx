import React from 'react'
import './SignInputs.css'

const SignInputs = (props) => {
  return (
    <input type={props.type} placeholder={props.placeholder} id={props.id}/>
  )
}

export default SignInputs