import React from 'react'
import { abilities } from '../Constants/Index'
import { motion } from 'framer-motion'

const cardVariants = {
   hidden: { opacity: 0, y: 50 }, // start slightly smaller
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" }  
  }
}

const FeactureCards = () => {
  return (
    <div className=" padding-x-lg md:mt-30 mt-32 px-10 py-9">
      <div className="mx-auto grid-3-cols">
        {abilities.map(({ imgPath, title, desc }, i) => (
          <motion.div
            key={title}
            className="rounded-xl p-8 flex flex-col gap-3 shadow-md hover:shadow-lg transition-shadow will-change-transform"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.88)' }}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: i * 0.15 }} // smoother stagger
          >
            <div className="size-14 flex items-center justify-center rounded-full bg-white shadow">
              <img src={imgPath} alt={title} />
            </div>
            <h3 className="text-gray-800 text-2xl font-semibold mt-2">{title}</h3>
            <p className="text-gray-600 text-lg">{desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default FeactureCards
