import React from 'react'

const NewsLetter = () => {
  return (
    <div className='news'>
        <h1>Join Our Newsletter</h1>
        <div>
            <input type='email' placeholder='Enter your email address...'/>
            <button className='button'>
                Subscribe
            </button>
        </div>
    </div>
  )
}

export default NewsLetter