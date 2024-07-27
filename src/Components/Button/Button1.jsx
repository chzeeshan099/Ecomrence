import React from 'react'

const Button1 = (props) => {
  return (
    <>
        <div>
            <button 
                className='btn1' 
                style={{
                    backgroundColor: props.bgColor,
                    margin: props.margin,
                    color: props.color,
                    borderRadius: "6px",
                    padding:"16px 45px",
                    border: props.border,
                    fontWeight: props.fontWeight
                }}
            >
                {props.name}
            </button>
        </div>
    </>
  )
}

export default Button1
