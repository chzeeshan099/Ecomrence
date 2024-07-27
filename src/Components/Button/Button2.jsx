import React from 'react'

const Button2 = (props) => {
  return (
    <>
      <div className='btn2Div'>
        <button className={`btn2 ${props.bgColor2 ? 'btn2 btn2Active' : 'btn2'}`} style={{ background: props.bgColor }} onClick={props.onclik && props.onclik}>{props.name} </button>
      </div>
    </>
  )
}

export default Button2