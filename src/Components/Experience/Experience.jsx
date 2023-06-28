import React from 'react'
import './Experience.css'
function Experience() {
  return (
    <div className='experience' id='Experience'>
        <div className='blur s-blur2' style={{background:"#ABF1FF94"}}></div>
        <div className="achievement">
            <div className="circle">1+</div>
            <span>years</span>
            <span>experience</span>
        </div>
        <div className="achievement">
            <div className="circle">10+</div>
            <span>completed</span>
            <span>projects</span>
        </div>
        <div className="achievement">
            <div className="circle">2+</div>
            <span>companies</span>
            <span>work</span>
        </div>
    </div>
  )
}

export default Experience