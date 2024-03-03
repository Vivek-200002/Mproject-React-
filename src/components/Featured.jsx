import { motion } from 'framer-motion'
import React, { useState } from 'react'
import {Power4} from "gsap/all";

function Featured() {
const [isHovering,setHovering] = useState(false);
  const handleHover=()=>{
   setHovering(true);
  }
  return (
    <div className='w-full py-20 bg-zinc-800 '>
        <div className='w-full px-20 border-b-[1px] border-zinc-700  pb-20'>
            <h1 className='text-7xl font-["Neue_Montreal"] tracking-tight'>Featured projects</h1>
            
        </div>
        <div className='px-20'>
        <div className='cards w-full  flex gap-10 mt-10'>
          
                <div onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)} className='cardcontainer relative rounded-xl  w-1/2 h-[75vh]  '>
                  <h1 className='absolute flex text-[#f1d247] overflow-hidden left-full z-[9] -translate-x-1/2 top-1/2 -translate-y-1/2  leading-none font-semibold tracking-tighter text-8xl'>
                  {"FYDE".split(' ').map((item,index)=>(
                  <motion.span initial={{y:"100%"}}  animate={isHovering?{y:"0"}: {y:"100%"}} 
                  transition={{ease:Power4.easeInOut,delay:index*.06}}
                  className='inline-block transition-y-full ' >{item}</motion.span>))}
                  </h1>
                  <div className='  card w-full h-full  rounded-xl overflow-hidden '>
                    <img  className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                  </div>
                </div>
                <div className='cardcontainer rounded-xl relative  w-1/2 h-[75vh]'>
                  <div className=' card w-full h-full  rounded-xl overflow-hidden bg-zinc- '>
                  <h1 className='absolute flex overflow-hidden text-[#CDEA68]  right-full z-[9] translate-x-1/2 top-1/2 -translate-y-1/2  leading-none font-semibold tracking-tighter text-8xl'>
                  {"VISE".split(' ').map((item,index)=>( <motion.span initial={{y:"100%"}}  animate={isHovering?{y:"0"}: {y:"100%"}} 
                  transition={{ease:Power4.easeInOut,delay:index*.06}}
                  className='inline-block transition-y-full ' >{item}</motion.span>))}
                  </h1>
                  <img  className='w-full h-full bg-cover' 
                   src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                  </div>
                </div>
                </div>
            </div>
    </div>
  )
}

export default Featured
