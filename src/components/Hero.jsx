import React from 'react'
import { AiFillPhone } from "react-icons/ai";



const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero__left'>
            <h1 className='hero__left__head'>
                Toronto Cupcake
            </h1>

            <p>
                Canada's most delicious cupcakes for business meetings, birthdays, weddings. Our cupcakes are baked daily using the finest ingredients.
            </p>

            <div className='hero__left__contact'>
                <button className='button order'>
                    Order Now
                </button>

                <div> 
                    <AiFillPhone/>
                    <p>647-478-9464</p>
                </div>
            </div>
        </div>

        <div className='hero__right'>
            <img src={'/images/hero_right.png'}/>
        </div>

    </div>
  )
}

export default Hero