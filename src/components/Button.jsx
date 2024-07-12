import React from 'react'

const Button = ({text}) => {
  return (
    <div>
        <button className='bg-yellow-300 size-20 text-white text-4xl font-mono shadow-lg'>{text}</button>
    </div>
  )
}

export default Button
