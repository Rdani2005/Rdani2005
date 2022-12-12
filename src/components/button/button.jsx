import './button.css'
import React from 'react'

const Buttons = () => {
    return (
        <div className="container button-container">
            <a href="#about" className="btn pri">
                Learn More
            </a>
            <a href="#contact" className="btn sec">
                Get in Touch
            </a>
        </div>
    )
}

export default Buttons