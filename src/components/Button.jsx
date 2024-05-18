import React from 'react'

const Button = ({onClick, btnText}) => {
  return (
    <button className='w-full h-9 bg-indigo-800 text-white flex items-center justify-center rounded-md mt-4 border-transparent' onClick={onClick}>{btnText}</button>
  )
}

export default Button