import React from 'react'
import abtWoman from '../massage_assets/woman.png'

const Contact = () => {
  return (
    <div>
      
      <div className='text-center text-2xl pt-10'>
        <p>CONTACT <strong className='font-semibold'>US</strong></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-[200px] md:max-w-[360px]' src={abtWoman} alt="" />

        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-700'>Our Office</p>
          <p className='text-gray-600'>222-Ruiru, Nairobi</p>
          <p className='text-gray-600'>Tel: (2547) 466 040 71 <br /> Email: selfcaresanctuary@gmail.com</p>
          <p className='font-semibold text-lg text-gray-700'>Join Us?</p>
          <p className='text-gray-600'>Learn more about our team and jobs</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>


    </div>
  )
}

export default Contact