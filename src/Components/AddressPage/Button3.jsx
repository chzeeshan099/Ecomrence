import React from 'react'

const Button3 = ({name,bgColor,color,onClick,type}) => {
  return (
    <>
        <button 
        type={type}
        onClick={onClick}
        className='px-4 px-sm-5 py-2 rounded border-1 fw-medium' style={{background:bgColor,color:color}}>{name}</button>
    </>
  )
}

export default Button3