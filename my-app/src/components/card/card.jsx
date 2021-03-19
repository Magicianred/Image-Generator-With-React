import React from 'react'

let Card = (props) => {
    return (
        <div>
          <h1>{props.name}</h1>
          <h2>{props.surname}</h2>
          <h3>{props.age}</h3>
        </div>
    )
  }
export default Card;