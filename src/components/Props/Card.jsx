import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
        <span className='icons'>{props.icon}</span>
       <h2>{props.description}</h2>
    </div>
  )
}

export default Card