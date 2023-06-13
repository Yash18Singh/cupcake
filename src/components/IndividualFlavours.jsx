import React from 'react'
import { individual } from '../api'

const IndividualFlavours = () => {
  return (
    <div className='individual'>
        <h1>Individual Flavours</h1>

        <div className='individual__items'>
            {
                individual.map((item,i)=>{
                    return(
                        <div className='individual_item'>
                            <img src={item.image}/>
                            <p>{item.name}</p>
                            <div>
                                 <p>${item.price}</p>
                                 <div className='item__quantity'>
                                    <div>-</div>
                                    <div>1</div>
                                    <div>+</div>
                                 </div>
                            </div>
                            <button className='button individual__button'>
                                Add to Cart
                            </button>
                        </div>
                    )
                })
            }
        </div>

        <div className='dozen__poster'>
            <img src={'/images/dozen_poster.png'}/>
        </div>
    </div>
  )
}

export default IndividualFlavours