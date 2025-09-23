import React from 'react'
import { techStackIcons } from '../Constants/Index'
import TitleHeader from '../Components/TitleHeader'
import TechIcons from '../Components/Models/TechIcons'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger) // ✅ Register ScrollTrigger

const TechStack = () => {
    useGSAP(() => {
        gsap.fromTo(
            '.tech-card',
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.inOut',
                stagger: 0.1,
                scrollTrigger: {
                    trigger: '#skills',
                    start: 'top center',
                },
            }
        )
    })

    return (
        <div id="skills" className="flex-centre section-padding">
            <div className="w-full h-full md:px-10 py-9">
                <TitleHeader
                    title="My Preferred Tech Stack"
                    sub="  What Skills I have to offer"
                />
                <div className="tech-grid">
                    {techStackIcons.map((icon) => (
                        <div
                            key={icon.name}
                            className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg" // ✅ fixed className
                        >
                            <div className="tech-card" />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
                            <div className="tech-card-content">
                                <div className="tech-icon-wrapper">
                                    <TechIcons model={icon} />
                                </div>

                                <div className="padding-x w-full">
                                    <p>{icon.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TechStack
