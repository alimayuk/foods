import React from 'react'
const CardChef = (props) => {
  return (
    <div className='cardChef'>
           <img src={props.img} alt={props.title} className='ChefImg'/>
           <h3 className='chefName'>{props.name}</h3>

    </div>
  )
}

export default CardChef