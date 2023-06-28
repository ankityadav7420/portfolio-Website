import React from 'react'
import './Services.css'
import HeartEmoji from  '../../img/heartemoji.png'
import Glasses from  '../../img/glasses.png'
import Humble from  '../../img/humble.png'
import Card from '../Card/Card'
import Resume from '../../img/resume.pdf'
function Services() {
  return (
    <div className='services' id='Services'>
        <div className="awesome">
            <span>My Awesome</span>
            <span>Services</span>
            <spane>
            Full-stack web development services specializing in Python, 
            ReactJS, AWS, MongoDB, and Node.js.
            <br />
             Expertise in building scalable and efficient web applications from frontend to backend.
                </spane>
                <a href={Resume} download>
                    <button className='button s-button'> Download CV</button>
                </a>
                <div className='blur s-blurl' style={{background:"#ABF1FF94"}}></div>
                
        </div>
        {/* Right side */}
        <div className='cards'>
            <div style={{left:'14rem'}}>
                <Card
                emoji={HeartEmoji}
                heaading={"Design"}
                detail={"Figma, ANT Design, CSS/HTML, Material UI"}
                /> 
            </div>
            <div style={{ top: "12rem", left: '-4rem'}}>
                <Card
                emoji={Glasses}
                heaading={"Developer"}
                detail={"ReactJS, Python, SQL, MongoDB, AWS(EC2, S3), JavaScript"}
                /> 
            </div>
            <div style={{ top: "19rem", left: '12rem'}}>
                <Card
                emoji={Humble}
                heaading={"Frameworks"}
                detail={"NodeJS, Fast API"}
                /> 
            </div>
            <div className='blur s-blur3' style={{background: "var(--purple)"}}></div>

            <div className='blur s-blur2' style={{background: "var(--purple)"}}></div>
        </div>
    </div>
  )
}

export default Services