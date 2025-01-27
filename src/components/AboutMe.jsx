import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComputer, faGamepad, faFutbol } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
const AboutMe = () => {
  return (
    <motion.div initial={{ opacity: 0 }}
      transition={{duration:0.8}}
      whileInView={{ opacity: 1 }} 
      className='flex flex-col items-center w-full justify-center p-4 '>
      <h1 className='text-5xl font-extrabold mt-4'>About me</h1>
      <motion.div initial={{ opacity: 0 }}
        transition={{duration:0.8}}
        whileInView={{ opacity: 1 }}  
        className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col justify-around lg:items-start md:items-center sm:items-center mt-5 lg:w-[85vw] md:w-[55vw] sm:w-[60vw] ">
        <div className='group flex flex-col justify-center w-full lg:w-[50vw] xs:w-[60vw] max-h-[20rem] m-10 rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5 p-3 transition-transform duration-300'>
          <div className='flex flex-col items-center '>
            <FontAwesomeIcon className='h-[6.75rem] lg:h-[6rem] md:h-[6.5rem] sm:h-[3.5rem] xs:h-[4.5rem] w-auto' icon={faComputer} />
            <p className='text-center text-2xl md:text-xl font-bold mb-3'>Software engineer</p>
          </div>
          <p className='text-justify xl:text-[1rem] lg:text-[1rem] md:text-[0.75rem] sm:text-[0.8rem] xs:text-[0.6rem] opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-60 transition-all duration-300'>
            Currently working as a software Engineer at Augment Scale, having a year's worth of hands-on with JavaScript intensive web and desktop development technologies.
          </p>
        </div>
        
        <motion.div initial={{ opacity: 0 }}
          transition={{duration:0.8}}
          whileInView={{ opacity: 1 }} 
          className='group flex flex-col justify-around w-full lg:w-[50vw] xs:w-[60vw] max-h-[20rem] m-10 rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5 p-3 transition-transform duration-300'>
          <div className='flex flex-col items-center'>
            <FontAwesomeIcon className='h-[6.75rem] lg:h-[6rem] md:h-[6.5rem] sm:h-[3.5rem] xs:h-[4.5rem] w-auto' icon={faGamepad} />
            <p className='text-center text-2xl md:text-xl font-bold mb-3'>Gaming enthusiast</p>
          </div>
          <p className='text-justify xl:text-[1rem] lg:text-[1rem] md:text-[0.75rem] sm:text-[0.8rem] xs:text-[0.6rem] opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-60 transition-all duration-300'>
            I started gaming at a very young age and once you get into it you can never go back! From 2D sega games to Open world masterpieces like Elden ring is how I grew up....
          </p>
        </motion.div>
        
        <motion.div initial={{ opacity: 0 }}
          transition={{duration:0.8}}
          whileInView={{ opacity: 1 }}  
          className='group flex flex-col justify-around w-full lg:w-[50vw] xs:w-[60vw] max-h-[20rem] m-10 rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5 p-3 transition-transform duration-300'>
          <div className='flex flex-col items-center'>
            <FontAwesomeIcon className='h-[6.75rem] lg:h-[6rem] md:h-[6.5rem] sm:h-[3.5rem] xs:h-[4.5rem] w-auto' icon={faFutbol} />
            <p className='text-center text-2xl md:text-xl font-bold mb-3'>Football and Fitness</p>
          </div>
          <p className='text-justify xl:text-[1rem] lg:text-[1rem] md:text-[0.75rem] sm:text-[0.8rem] xs:text-[0.6rem] opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-60 transition-all duration-300'>
            Growing up, I always loved playing football. Still trying to maintain a healthy physique because health is the most important thing in life!
          </p>
        </motion.div>
      
      </motion.div>
    </motion.div>
  );
}

export default AboutMe;
