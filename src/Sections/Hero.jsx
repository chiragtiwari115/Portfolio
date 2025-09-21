import AnimatedCounter from "../Components/AnimatedCounter";
import Button from "../Components/Button"
import { HeroExperience } from "../Components/HeroModel/HeroExperience"
import { words } from "../Constants/Index"
import { useGSAP } from "@gsap/react";
import gsap from "gsap"; 
import FeactureCards from "./FeactureCards";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo (".hero-text h1",
      {
       y: 50, 
       opacity: 0
      },
       {
        y: 0,
        opacity: 1,
        sttagger: 0.2,
        duration: 1,
        ease: "power2.inOut",
       },
      )
  })
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="absolute top-10 left-0 md:px-20 px-5 py-0">
          <div className="flex flex-col gap-7 items-start text-left">
            <div className="hero-text">
              <h1>
                Shaping{" "}
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span
                        key={word.text}
                        className="flex items-center md:gap-3 gap-1 pb-4"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>

              <h1>into Real Projects</h1>
              <h1>that Delivers Result</h1>
            </div>
          </div>
          <p className="text-white-50 md:text-xl mt-4 text-left md:w-1/2 w-full">
            I'm Chirag, a dedicated Full-Stack Developer with hands-on experience in Java, Spring Boot, SQL and React.
            I thrive on bringing ideas to life through code and  explore new technologies to create scalable, modern web solutions.
          </p>
        <Button
        className="md:80 md:h-16 w-60 h-12 mt-10"
        id="animated-counter"
        text="See My Work"
        />
        </header>

        {/* RIGHT: 3D Model */}
          <figure>
            <div className="hero-3d-layout">
              <HeroExperience/>
            </div>
          </figure>
      </div>

      <div id="animated-counter">
      <AnimatedCounter />              
      </div>
    </section>
  )
}

export default Hero
