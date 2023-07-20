import React from 'react'
import { getNav } from '../../data/NavMap'
import {BsFacebook,BsTwitter,BsInstagram,BsPinterest} from "react-icons/bs"

const Footer = () => {
    const navItems = getNav();
  return (
    <div className='footer'>
        <div className="container">
            <div className="topFooter">
                <h1>Foodie's</h1>
               <ul className='menu'>
               {navItems.map((item)=>(
                    <li key={item.id}>
                        <a href={item.href}>{item.name}</a>
                    </li>
          ))}
               </ul>
              <div className="socialsFooter">
           <a href=""><BsPinterest className='socialIcon'/></a>     
                <a href=""><BsInstagram className='socialIcon'/></a>
                <a href=""><BsTwitter className='socialIcon'/></a>
                <a href=""><BsFacebook className='socialIcon'/></a>
              </div>
            </div>
            <hr className='hrFooter'/>
            <div className='footerBottom'>
                <p>@copyright2022foodie's</p>
            </div>
        </div>
        </div>
  )
}

export default Footer