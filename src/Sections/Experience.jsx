import React from 'react'
import TitleHeader from '../Components/TitleHeader'
import { expCards } from '../Constants/Index'
import GlowCard from '../Components/GlowCard'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {

    // Animate timeline (fade & shrink on scroll)
    gsap.to('.timeline', {
      scaleY: 0,
      opacity: 0,
      transformOrigin: 'top center',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '.timeline',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    });

    // Animate text
    gsap.utils.toArray('.expText').forEach((text) => {
      gsap.from(text, {
        xPercent: -20,
        opacity: 0,
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: text,
          start: 'top 70%',
        }
      });
    });
  }, []);

  return (
    <section id="experience" className="w-full md:mt-22 mt-12 section-padding xl:px-0">
      <div className="w-full md:px-12 py-8">
        <TitleHeader title="Work Experience" sub=" My Career Overview" />

        <div className="mt-12 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((card, index) => (
              <div key={card.title} className="exp-card-wrapper timeline-card">
                <div className="xl:w-2/6">
                  <GlowCard card={card} index={index}>
                    <div className="flex items-start mt-4 gap-4">
                      <img
                        src={card.imgPath}
                        alt={card.title}
                        className="w-12 h-12 object-contain"
                      />
                      <p className="text-white-50 text-lg">
                        {card.logoDescription}
                      </p>
                    </div>
                  </GlowCard>
                </div>

                <div className="xl:w-4/6">
                  <div className="flex items-start relative">
                    {/* Timeline line */}
                    <div className="timeline-wrapper relative mr-6">
                      <div className="timeline absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                    </div>

                    {/* Text */}
                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="timeline-logo">
                        <img
                          src={card.logoPath}
                          alt="logo"
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                      <div>
                        <h1 className="font-semibold text-3xl">{card.title}</h1>
                        <p className="my-5 text-white-50">📅 {card.date}</p>
                        <p className="text-[#839cb5] italic">Responsibilities</p>
                        <ul className="list-disc ms-s mt-5 flex flex-col gap-5 text-white-50">
                          {card.responsibilities.map((responsibilities) => (
                            <li key={responsibilities} className="text-lg">
                              {responsibilities}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
