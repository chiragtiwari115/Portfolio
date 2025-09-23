import React, { useEffect, useState } from "react";
import { Link } from "react-scroll"; // from react-scroll
import { navLinks } from "../Constants/Index";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        {/* Top-left logo with smooth scroll */}
        <Link
          to="hero"
          smooth={true}
          duration={600}
          offset={-50}
          className="logo cursor-pointer"
        >
          CH!RAG
        </Link>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <Link
                  to={link.replace("#", "")}
                  smooth={true}
                  duration={600}
                  offset={-50}
                  spy={true}
                  className="cursor-pointer"
                >
                  <span>{name}</span>
                  <span className="underline" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          to="contact"
          smooth={true}
          duration={600}
          offset={-50}
          className="contact-btn group cursor-pointer"
        >
          <div className="inner">
            <span>Contact me</span>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
