import { useState } from "react"
import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
    const [showHeader, setShowHeader] = useState(false)

  return (
    <>
        <div className='header'>
            <img src={'/images/logo.png'}/>

            <div className='header__options'>
                <p>Cupcakes</p>
                <p>Events</p>
                <p>FAQs</p>
                <p>About</p>
                <p>Contact Us</p>
            </div>

            <div className='header__logo'>
                <img src={'/images/icons/bag.png'}/>
                <img src={'/images/icons/Profile.png'}/>
            </div>
        </div>

        <div className='header__mobile'>
            <div className="header__mobile__upper">
                <img src={'/images/logo.png'}/>
                <AiOutlineMenu onClick={()=>setShowHeader(!showHeader)} className="mobile__upperIcon"/>
            </div>
            
            {showHeader && 
                <div className="header__mobile__lower">
                    <p>Cupcakes</p>
                    <p>Events</p>
                    <p>FAQs</p>
                    <p>About</p>
                    <p>Contact Us</p>
                </div>
            }
           
        </div>
    </>
  )
}

export default Header