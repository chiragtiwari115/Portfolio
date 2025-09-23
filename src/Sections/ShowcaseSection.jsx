import React from 'react'
import { motion } from 'framer-motion'

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
}

const ShowcaseSection = () => {
    return (
        <div id="work" className="app-showcase md:mt-5 mt-2 py-0 px-6">
            <div className="w-full space-y-16">

                {/* ===== FIRST PROJECT ===== */}
                <motion.div
                    className="showcaselayout flex flex-col md:flex-row items-center gap-1"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeInUp}
                >
                    <div className="first-project-wrapper flex flex-col md:flex-row items-center gap-6 md:gap-10 w-full">

                        {/* IMAGE */}
                        <motion.div
                            className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
                            variants={fadeInUp}
                        >
                            <img
                                src="images/citypulse.png"
                                alt="CityPulse"
                                className="rounded-2xl shadow-lg w-full object-cover"
                            />
                        </motion.div>

                        {/* TEXT */}
                        <motion.div
                            className="text-content w-full md:w-1/2 text-left space-y-4"
                            variants={fadeInUp}
                        >
                            <h2 className="text-2xl md:text-3xl font-bold text-white">CityPulse</h2>
                            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                                Reports infrastructure issues such as potholes, streetlight failures, water leakage, or waste management, location-based tracking system.
                                CityPulse automatically pinpoints the exact problem area, allowing municipal authorities to respond faster and prioritize tasks effectively.
                                By bridging the gap between citizens and local government, the platform ensures quicker resolutions, transparent communication, and ultimately,
                                smarter and cleaner city living.
                            </p>
                            <p className="text-sm md:text-base text-gray-400 italic">
                                A web application built using <span className="font-semibold">React.js</span>,
                                <span className="font-semibold"> Spring Boot</span>, and
                                <span className="font-semibold"> PostgreSQL</span>.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* ===== SECOND PROJECT ===== */}
                <motion.div
                    className="showcaselayout -mt-9 flex flex-cols md:flex-row-reverse items-center gap-1"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeInUp}
                >
                    <div className="second-project-wrapper flex flex-col md:flex-row items-center gap-6 md:gap-10 w-full">

                        {/* TEXT */}
                        <motion.div
                            className="text-content w-full md:w-1/2 text-left space-y-4"
                            variants={fadeInUp}
                        >
                            <h2 className="text-2xl md:text-3xl font-bold text-white">GlobeOn</h2>
                            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                                GlobeOn is an interactive web platform designed to inspire and empower individuals as well as communities to actively participate in the fight against climate change.
                                The platform goes beyond just awareness—it provides users with personalized carbon footprint tracking, offering a clear understanding of how daily activities contribute to greenhouse gas emissions.
                                Based on this data, GlobeOn generates actionable sustainability goals tailored to each user, helping them adopt eco-friendly habits and measure their long-term progress.
                                GlobeOn integrates real-time environmental insights such as the Air Quality Index (AQI) of the user’s current location. This allows users to make informed lifestyle and health decisions while staying connected to the immediate environmental impact around them.
                            </p>
                            <p className="text-sm md:text-base text-gray-400 italic">
                                Built with <span className="font-semibold">React.js</span>,
                                <span className="font-semibold"> SpringBoot</span>, and
                                <span className="font-semibold"> MySQL</span>.
                            </p>
                            <p className="text-sm md:text-base text-gray-400 italic">
                                <span className="font-semibold">Copyright Registered “Globon: Real-time Tracking and Solutions for a Sustainable Future”
                                    Copyright Office, Government of India — Certificate No: LD-20250167208 — Application No: 7761/2025-CO/L
                                    — Date of Filing: 07 March 2025
                                </span>.
                            </p>
                        </motion.div>

                        {/* IMAGE */}
                        <motion.div
                            className="relative flex items-center justify-center bg-cover bg-center"
                            variants={fadeInUp}
                        >
                            <img
                                src="images/globeon1.png"
                                alt="Second Project"
                                className="rounded-3xl shadow-lg object-cover p-5 md:p-5 w-[450px] h-[450px] md:w-[600px] md:h-[600px] xl:w-[650px] xl:h-[600px] ml-8"
                            />

                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </div>
    )
}

export default ShowcaseSection
