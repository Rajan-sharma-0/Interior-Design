import React from 'react'
import { motion } from 'framer-motion'

const Section3 = () => {
  return (
    <section 
      className='relative mx-6  h-[37rem] flex items-end justify-center bg-cover bg-center transition-opacity duration-1000'
      style={{ 
        backgroundImage: "url('https://wallpaperaccess.com/full/4723250.jpg')",
        opacity: 1
      }}
    >
      <div className='h-full absolute top-0 left-0 '></div> 
      <motion.div 
        className='relative  z-5 w-[60%] text-center p-5 mb-[-8rem] rounded-md bg-[white]  border solid black[2px] opacity-1 '
        initial={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05 }} // Zoom in a little bit on hover
      >
        <h2 className='font-bold text-[25px] text-[#989a6f]  mb-4'>
          Dolor sit amet Repudiandae id ipsam consectetur adipisicing elit.
        </h2>
        <p className='text-base mb-6'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae id ipsam repellendus officiis amet cupiditate natus distinctio ab quae. Tempore consequatur perferendis nostrum consectetur! Veritatis reiciendis consequuntur hic saepe? Nemo?
        </p>
        <button className='bg-[#989a6f] hover:bg-[#7f8058] text-white py-2 px-4 rounded-md transition-colors'>
          Click Me
        </button>
      </motion.div>
    </section>
  )
}

export default Section3;
