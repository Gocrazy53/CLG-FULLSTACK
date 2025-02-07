import React from 'react'
import "./Child.css"

const Child = (props) => {
  return (
    <>
    <h2>{props.header}</h2>
    <div>{props.name}</div>
    <div>{props.num}</div>
    
    </>
  )
}

export default Child