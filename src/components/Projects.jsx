import React from 'react';
import retro from '../assets/retro.png';
import { motion } from 'framer-motion';
const Projects = () => {
  return (
    <motion.div initial={{ opacity: 0 }}
    transition={{duration:0.8}}
    whileInView={{ opacity: 1 }} className="mt-40 mb-10 flex flex-col items-center">
      <h1 className='text-4xl mb-5 font-bold text-center'>Projects Catalogue</h1>
      <a href='https://muteeb-ur-rehman-4.github.io/' className="relative block group">
        <img src={retro} alt="Retro Project" className="w-full" />
        <span className="absolute inset-0 flex flex-col items-center justify-center text-white text-xl font-bold bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
          <p className=' mb-3 xl:text-5xl lg:text-3xl md:text3xl sm:text-[2rem] xs:text-[2.25rem]'>Retro's Remnant</p>
          <p className='xl:text-xl lg:text-lg md:text-md sm:text-sm xs:hidden mb-2 '>
            My previous portfolio making use of loaders and React Router DOM. It also has a more page which is fully retro so do check that out!
          </p>
          <p className=' mb-2 text-[1.5rem] lg:text-[1.5rem] md:text-[1.25rem] sm:text-[1.25rem] xs:text-[1rem]'>Technologies Used</p>
          <ul className='list-none list-inside my-0'>
            <li className='lg:text-lg md:text-md sm:text-[0.75rem] xs:text-[0.70rem]'>- HTML</li>
            <li className='lg:text-lg md:text-md sm:text-[0.75rem] xs:text-[0.70rem]'>- CSS</li>
            <li className='lg:text-lg md:text-md sm:text-[0.75rem] xs:text-[0.70rem]'>- JavaScript</li>
            <li className='lg:text-lg md:text-md sm:text-[0.75rem] xs:text-[0.70rem]'>- React.js</li>
          </ul>
        </span>
      </a>
    </motion.div>
  );
}

export default Projects;
