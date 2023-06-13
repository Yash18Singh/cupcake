import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer_1'>
            <img src={'/images/logo2.png'}/>
            <p>Canada's most delicious cupcakes for business meetings, birthdays, weddings.</p>
        </div>

        <div className='footer_2'>
            <p>Cupcakes</p>
            <p>About</p>
            <p>Events</p>
            <p>Occasions</p>
            <p>FAQs</p>
        </div>

        <div className='footer_3'>
            <img src={'/images/icons/fb.png'}/>
            <img src={'/images/icons/linkedin.png'}/>
            <img src={'/images/icons/twitter.png'}/>
            <img src={'/images/icons/ig.png'}/>
        </div>

        <div className='footer_4'>
            <h1>Contact Us</h1>
            <p><span>North America : </span>+1-877-334-9468</p>
            <p><span>North America : </span>+1-877-334-9468</p>
            <p><span>North America : </span>+1-877-334-9468</p>
        </div>
    </div>
  )
}

export default Footer