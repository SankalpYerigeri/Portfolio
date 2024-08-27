import React from 'react';
import { motion } from 'framer-motion';


import { styles } from '../style';
import { ComputersCanvas } from './canvas';
import { github, LeetCode, LinkedIn, logo, Sankalp, Sankalp2, Vinay } from '../assets';
import { github_link } from '../constants';

{/* <br className='sm:block hidden'/> */}



const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0  top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>

        <div className={`${styles.heroHeadText} text-white`}>
          <h1>Hi, I'm <span className='text-[#915eff]'>Sankalp</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 typewriter`}>
            Associate Software   <span className='text-[#915eff]'>Engineer</span>          
          </p>
          
          <img src={Sankalp2} alt="My logo" className='w-60 h-60 mt-4 rounded-full object-cover'/>
          <div className='flex gap-5'>
          
          <a href="www.google.com"> <img src={github} alt="My logo" className='w-14 h-14 mt-8 rounded-full object-cover'/></a>
          <img src={LinkedIn} alt="My logo" className='w-14 h-14 mt-8 rounded-full object-cover'/>
          <img src={LeetCode} alt="My logo" className='w-14 h-14 mt-8 rounded-full object-cover'/>
          </div>
          
        </div>

        {/* <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden space-y-50">
    <img className="w-full h-48 object-cover" src="https://via.placeholder.com/400x300" alt="Card Image"/>
    <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800">Card Title</h2>
        <p className="mt-2 text-gray-600">This is a simple card component built with Tailwind CSS. You can add more details about your content here.</p>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
            Read More
        </button>
    </div>
      </div> */}
        


        
      </div>

      
      

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='about'> 
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate = {
                {
                  y: [0, 24,0]
                }
              }
              transition={{
                duration : 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}

              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>



      </div>

      

    </section>
  )
}

export default Hero