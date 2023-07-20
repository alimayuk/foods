import React from 'react'
const Card2 = (props) => {
  return (
    <div className='cardMenu'>
       <div className="menuHead">
       <img src={props.img} alt={props.title} className='MenuImg'/>
        <p>{props.price}</p>
       </div>
        <div className='menuBody'>
            <p>{props.description}</p>
            <a href='#' className='icons'>{props.icon}</a>
        </div>
    </div>
  )
}

export default Card2