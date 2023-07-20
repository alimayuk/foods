import React from 'react'
import {BsArrowUpRight} from "react-icons/bs"
import salad from "../../assets/salad.png"
const Home = () => {
  return (
    <div className='home container' id='hero'>
    <div className='cardHero'>
    <h1>The taste of tradition,<br/>with a modern twist.</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque obcaecati suscipit optio accusantium enim atque vel illo officia nisi placeat labore quos, laudantium fugit, recusandae blanditiis soluta corrupti, id deserunt.</p>
    <div className='cardButtons'>
        <a href="#"><button className='btnOrange'>Get Started</button></a>
        <a href="#"><button className='CardBtn'>See Our Menu <BsArrowUpRight className='arrow'/> </button></a>
    </div>
    </div>
    <div className='HeroImg'>
        <img src={salad} alt="" />
    </div>
    </div>
  )
}

export default Home