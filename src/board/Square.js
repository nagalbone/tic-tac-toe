import React from 'react'

const Square = (props) => {
  return (
    <>
    <div onClick={props.onClick} style={{border:'1px solid',height:'70px',width:'100px',paddingTop:'50px'}}>
        {props.value}
    </div>
        
    </>
  )
}

export default Square;