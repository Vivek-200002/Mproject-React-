import React from 'react'

function About() {
  return (
    <div className='w-full py-20 px-20 bg-[#CDEA68] rounded-t1-3xl rounded-tr-3xl  text-black'>

    <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[4.5vw] tracking-tighter'>
        Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
    <div className='w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#1e240b] '>
        <div className='w-1/2'>
        <h1 className='text-5xl'>Our Approach:</h1>
        <button className='px-8 flex gap-10 items-center  py-3 bg-zinc-900 rounded-full mt-10 text-white'>Read More
        <div className='w-2 h-2 bg-zinc-100 rounded-full '></div>
        </button>
        </div>
        <div className='w-1/2 h-[70vh] rounded-3xl'>
          <img className=' rounded-3xl ' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
        </div>
    </div>

    </div>
  );
}

export default About
