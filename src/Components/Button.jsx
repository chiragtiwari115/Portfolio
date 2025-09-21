import React from "react";
import { Link } from "react-scroll";

const Button = ({ text, className, id }) => {
  return (
    <Link
      to={id} // section id to scroll to
      smooth={true} // smooth animation
      duration={600} // duration of animation (ms)
      offset={-window.innerHeight * 0.15}
      spy={true} // highlights when active
      className={`inline-block mt-6 ${className ?? ""} cta-wrapper`}
    >
      <div className="cta-button group duration-300 w-60 h-12 md:w-80 md:h-16">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </Link>
  );
};

export default Button;
