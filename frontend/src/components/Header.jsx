import React from 'react'
import groupo from '../massage_assets/group-profile.png'
import headerimg from '../massage_assets/headerimg1-removebg.png'
import arrow from '../massage_assets/arrow-icon.png'

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gradient-to-r from-purple-300 via-purple-400 to-pink-400 rounded-lg px-6 md:px-10 lg:px-20 py-24">

      {/* Left Side */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-6 md:gap-8 py-6 md:py-16 md:mb-[-30px]">
        <p className="text-3xl md:text-4xl lg:text-5xl text-gray-800 font-semibold leading-tight md:leading-tight lg:leading-tight">
          Your Path to Total Relaxation <br className="hidden sm:block" /> Starts Here
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4 text-gray-700 text-sm font-light">
          <img className="w-20 md:w-24 rounded-full" src={groupo} alt="Group member profile" />
          <p className="text-center md:text-left">
            Take a break from the everyday hustle <br className="hidden sm:block" /> and enjoy a personalized massage experience that will leave you feeling relaxed, rejuvenated, and ready to face the world again.
          </p>
        </div>
        <a
          href="#speciality"
          className="flex items-center gap-2 bg-[#f5f5f5] px-8 py-3 rounded-full text-black text-sm hover:bg-purple-500 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Book Appointment <img className="w-5" src={arrow} alt="Arrow" />
        </a>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 relative overflow-hidden mt-8 md:mt-0">
        <img
          className="w-full h-auto md:h-full object-cover absolute top-0 left-0 rounded-lg shadow-lg"
          src={headerimg}
          alt=""
        />
      </div>
    </div>
  )
}

export default Header
