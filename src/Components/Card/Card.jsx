import React from 'react'
import './Card.css'
function Card({emoji, heaading, detail}) {
  return (
    <div className='card'>
        <img src={emoji} alt="emoji.png"/>
        <span>{heaading}</span>
        <span>{detail}</span> 
        <a href='https://github.com/ankityadav7420' target='blank'>
          <button className='c-button'> Learn More</button></a>
    </div>
  )
}

export default Card