import React from 'react'

const Button = ({text, className, id}) => {
  return (
    <a className={`inline-block mt-6 ${className ?? ''} cta-wrapper`}>
        <div className="cta-button group  duration-300 w-60 h-12 md:w-80 md:h-16">
            <div className="bg-circle" />
            <p className="text"> {text}</p>
            <div className="arrow-wrapper">
                <img src="/images/arrow-down.svg" alt="arrow" />
            </div>    
        </div>

    </a>
  )
}

export default Button