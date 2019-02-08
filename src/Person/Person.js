import React from 'react'

const person = (props) => {
  return (
    <div>
      <p>I'm {props.name}! My age is {props.age}</p>
      <input type="text" onChange={props.changeNameFunc} value={props.name}/>
    </div>
  )
}

export default person;