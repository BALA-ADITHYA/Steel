import React from 'react'
import './Button.css'
import { useNavigate } from 'react-router-dom'

const Button = () => {
  const navigater = useNavigate()
  return (
    <>
    <div className='btd'>
          <button className='back' onClick={()=>navigater('/')} >BACK</button>
      </div>
    </>
  )
}

export default Button
