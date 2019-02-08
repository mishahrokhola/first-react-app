import React from 'react'

const person = (props) => {
  return (
    <div>
      <p onClick={props.deletePerson}>I'm {props.name}! My age is {props.age}</p>
      <input type="text" onChange={props.changeNameFunc} value={props.name}/>
    </div>
  )
}

export default person;