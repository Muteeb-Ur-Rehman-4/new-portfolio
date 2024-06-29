import React from 'react';
import { motion } from 'framer-motion';

const exp1_skills = [
  { name: 'C++', url: 'https://en.cppreference.com/' },
  { name: 'Python 3', url: 'https://www.python.org/' },
  { name: 'Electron.js', url: 'https://www.electronjs.org/' },
  { name: 'Software Development', url: 'https://en.wikipedia.org/wiki/Software_development' },
  { name: 'JavaScript Frameworks', url: 'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks' },
  { name: 'Node.js', url: 'https://nodejs.org/en' },
  { name: 'React.js', url: 'https://react.dev/blog/2023/03/16/introducing-react-dev' },
];

const exp2_skills = [
  { name: 'C++', url: 'https://en.cppreference.com/' },
  { name: 'Javascript', url: 'https://www.w3schools.com/js/' },
  { name: 'JavaScript Frameworks', url: 'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks' }, 
];

const exp3_skills = [
  { name: 'HTML', url: 'https://www.w3schools.com/html/' },
  { name: 'Javascript', url: 'https://www.w3schools.com/js/' },
  { name: 'Reactjs', url: 'https://react.dev/blog/2023/03/16/introducing-react-dev' }, 
];

const Experience = () => {
  return (
    <div className='flex flex-col items-start rounded-xl my-28'>
      <motion.h2 initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }} 
      transition={{ duration: 0.8 }}
      className='text-3xl font-bold mb-4 px-2'>Experience</motion.h2>

      {/* Experience 1 */}
      <motion.div className='mt-8 w-full' >
        <motion.div initial={{opacity:0, x: 100}} whileInView={{opacity:1, x:0}} transition={{duration: 0.8}} className='px-2'>
          <h3 className='text-xl font-semibold flex flex-row xs:flex-col xs:py-5 justify-between sm:text-lg xs:text-md xs:text-semi-bold'>
            Software Engineer - Augment Scale <span className=''>2023 - Present</span>
          </h3>
          <p className='text-lg text-justify md:text-md xs-text-sm'>
            Spearheading cross-platform audio application development as an R&D Software Engineer, leveraging expertise in frameworks encompassing multiple languages to deliver innovative and high-performance solutions for a seamless user experience.
          </p>
        </motion.div>
        <motion.div initial={{opacity:0, x: -100}} whileInView={{opacity:1, x:0}} transition={{duration: 0.8}} className='mt-4 px-2'>
          <h4 className='text-lg font-semibold mb-2'>Skills</h4>
          <div className='flex flex-wrap gap-2'>
            {exp1_skills.map((skill, index) => (
              <a 
                key={index} 
                href={skill.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className='bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-3 py-1 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition'
              >
                {skill.name}
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Experience 2 */}
      <motion.div   className='w-full mt-8'>
        <motion.div initial={{opacity:0, x: 100}} whileInView={{opacity:1, x:0}} transition={{duration: 0.8}} className='px-2'>
          <h3 className='text-xl font-semibold flex flex-row xs:flex-col xs:py-5 justify-between sm:text-lg xs:text-md xs:text-semi-bold'>
            Software Engineer Intern <span>Oct 2023 - Nov 2023</span>
          </h3>
          <p className='text-lg text-justify md:text-md xs-text-sm'>
            Researched on possible solutions to cross-platform audio application solutions including C++ and JavaScript frameworks.
          </p>
        </motion.div>
        <motion.div initial={{opacity:0, x: -100}} whileInView={{opacity:1, x:0}} transition={{duration: 0.8}} className='mt-4 px-2'>
          <h4 className='text-lg font-semibold mb-2'>Skills</h4>
          <div className='flex flex-wrap gap-2'>
            {exp2_skills.map((skill, index) => (
              <a 
                key={index} 
                href={skill.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className='bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-3 py-1 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition'
              >
                {skill.name}
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Experience 3 */}
      <motion.div className='w-full mt-8' >
        <motion.div initial={{ opacity: 0, x:100 }} whileInView={{ opacity: 1, x:0  }} transition={{ duration: 0.8 }} className='px-2'>
          <h3 className='text-xl font-semibold flex flex-row xs:flex-col xs:py-5 justify-between sm:text-lg xs:text-md xs:text-semi-bold'>
            Web Developer Intern - SayabiDevs <span>Aug 2022 - Sep 2022</span>
          </h3>
          <p className='text-lg text-justify md:text-md xs-text-sm'>
            Learned React basics and revamped web development fundamentals.
          </p>
        </motion.div>
        <motion.div initial={{opacity:0, x: -100}} whileInView={{opacity:1, x:0}} transition={{duration: 0.8}} className='mt-4 px-2'>
          <h4 className='text-lg font-semibold mb-2'>Skills</h4>
          <div className='flex flex-wrap gap-2'>
            {exp3_skills.map((skill, index) => (
              <a 
                key={index} 
                href={skill.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className='bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-3 py-1 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition'
              >
                {skill.name}
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Experience;
