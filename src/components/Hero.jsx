import React from 'react';
import hero1 from "../assets/Hero1.jpg";
import Resume from"../assets/Muteeb-Resume.pdf";

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.div >
      <div className='flex justify-between h-[45%] xl:mt-20 lg:mt-10 md:mt-0 sm:flex-col md:flex-col lg:flex-row xl:flex-row xs:flex-col mb-28'>
        <div className='my-10 lg:w-[45%] h-auto flex justify-center items-center rounded-md  md:flex-col sm:flex-col xs:flex-col sm:w-[100%] xs:w-[100%]'>
          <motion.div initial={{opacity:0, x: -100}} whileInView={{opacity:1, x:0}} transition={{type:"spring", stiffness:10, duration: 1}}
            className='text-justify flex justify-center flex-col '>
            <h1 className='lg:text-5xl md:text-[5rem] sm:text-[5rem] xs:text-3xl text-left font-extrabold mb-5'>Muteeb Ur Rehman</h1>
            <h1 className='lg:text-3xl md:text-[3rem] sm:text-xl xs:text-2xl font-bold '>Software <span className=''>Engineer</span></h1>
            <p className='lg:text-xl sm:text-2xl xs:text-xl mt-5'>A software engineer trying to upskill everyday!</p>
            <p className='lg:text-lg sm:text-xl xs:text-md mt-2 italic'>A recent CS graduate from GIKI, having a year's worth of hands-on experience in web and desktop application development.</p>
          </motion.div>
          <motion.div initial={{opacity:0, y: 100}} whileInView={{opacity:1, y:0}} transition={{type:"spring", stiffness:10, duration: 1.5}} className='w-full mt-5 h-auto flex flex-row items-center justify-between '>
            <div className='w-{25%}'>
              <p className='mr-3'>Want to have a quick chat?</p>
            </div>
            <div className='flex flex-row w-full justify-around'>
              <a href="mailto:muteeb.0004@gmail.com"><button className='block xl:w-[8rem] lg:w-[7.5rem] md:w-[10rem] sm:w-[10rem] xs:w-[5rem] h-auto bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-3 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition ' type='button'>Contact me!</button></a>
              <a href={Resume}><button className='block xl:w-[8rem] lg:w-[7.5rem] md:w-[10rem] sm:w-[10rem] xs:w-[5rem] h-auto bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-3 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition ' type='button'>My resume!</button></a>
            </div>
          </motion.div>
        </div>
        <motion.div initial={{opacity:0, x: 100}} whileInView={{opacity:1, x:0}} transition={{type:"spring", stiffness:10, duration: 1}} className='my-10 lg:w-[45%] rounded-2xl sm:w-[100%]'>
          <img className='w-full h-full rounded-md brightness-200' src={hero1} alt="hero1"/>
        </motion.div>
       
      </div>
    </motion.div>
  );
};

export default Hero;
