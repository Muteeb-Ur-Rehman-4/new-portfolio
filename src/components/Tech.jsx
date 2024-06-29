import React from 'react';
import node from '../assets/node.png';
import react from '../assets/react.png';
import js from '../assets/JS.png';
import electron from '../assets/electron.png';
import tailwind from '../assets/tailwind.svg';
import { motion } from 'framer-motion';

const Tech = () => {
  const animateProps = {
    y: ['0rem', '0.5rem', '0rem'],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      whileInView={{ opacity: 1 }}>
      <p className='text-4xl font-bold text-center mb-28 mt-10'>Technologies with hands-on experience</p>
      <div className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col justify-between items-center mt-5 mb-10 sm:justify-between h-auto">
        <motion.a href="https://nodejs.org/en" className='w-[12.5rem] sm:w-[10rem] xs:w-[8rem] h-full hover:brightness-90' animate={animateProps}>
          <img src={node} alt="Node.js" />
        </motion.a>
        <motion.a href="https://react.dev/" className='w-[12.5rem] sm:w-[10rem] xs:w-[8rem] h-full hover:brightness-90' animate={animateProps}>
          <img src={react} alt="React" />
        </motion.a>
        <motion.a href="https://react.dev/learn" className='w-[12.5rem] sm:w-[10rem] xs:w-[8rem] h-full hover:brightness-90' animate={animateProps}>
          <img src={js} alt="JavaScript" />
        </motion.a>
        <motion.a href="https://www.electronjs.org/" className='w-[12.5rem] sm:w-[10rem] xs:w-[8rem] h-full hover:brightness-90' animate={animateProps}>
          <img src={electron} alt="Electron" />
        </motion.a>
        <motion.a href="https://tailwindcss.com/" className='w-[12.5rem] sm:w-[10rem] xs:w-[8rem] h-full hover:brightness-90' animate={animateProps}>
          <img src={tailwind} alt="Tailwind CSS" />
        </motion.a>
      </div>
    </motion.div>
  )
}

export default Tech;
