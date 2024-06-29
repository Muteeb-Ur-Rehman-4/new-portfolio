import React from 'react';
import { FaLinkedin, FaGithub, FaBook, FaSun, FaMoon } from "react-icons/fa";
import { motion } from 'framer-motion';

const Navbar = ({ toggleTheme, darkMode }) => {
  return (
    <motion.nav initial={{ opacity: 0 }}
    transition={{ duration: 0.8 }}
    whileInView={{ opacity: 1 }} className='mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center justify-between w-[10rem]'>
        <a href="https://www.linkedin.com/in/muteeb-ur-rehman4/" className='hover:brightness-110 transition-transform transform hover:scale-110'><FaLinkedin className='size-16' /></a>
        <button 
          onClick={toggleTheme} 
          className={`p-3 rounded-full  ${darkMode ? 'bg-gray-700 text-white hover:brightness-150 transition-transform transform hover:scale-110' : 'bg-yellow-200 text-black hover:brightness-95 transition-transform transform hover:scale-110'}`}
        >
        {darkMode ? <FaMoon /> : <FaSun />}
      </button>
      </div>
      
      <div className='flex items-center min-w-12 gap-12'>
        <a href="https://www.codecademy.com/profiles/MB_4" className='hover:brightness-150 transition-transform transform hover:scale-110'><FaBook className='size-10' /></a>
        <a href="https://github.com/Muteeb-Ur-Rehman-4" className='hover:brightness-150 transition-transform transform hover:scale-110'><FaGithub className='size-10' /></a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
