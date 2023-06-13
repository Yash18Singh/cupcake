import React, {useEffect, useState} from 'react'
import { special_events} from '../api'

const SpecialEvents = () => {
  return (
    <div className='special'>
        <h1>Special Events & Festivals</h1>
        <div className='special__items_list'>
            {
                special_events.map((item,i)=>
                    (
                        <div key={i} className='special__items'>
                            <img src={item.image}/>
                            <p>{item.name}</p>
                         </div>
                    )
                )
            }
        </div>
    </div>
  )
}

export default SpecialEvents