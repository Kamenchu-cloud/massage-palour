import React from 'react';
import appointmentimg from '../massage_assets/appointment_img.png';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className='flex bg-white rounded-lg px-2 sm:px-4 md:px-8 lg:px-10 my-38 md:mx-16'>
      {/* ------------------------ Left Side ----------------- */}
      <div className='flex-1 py-20 sm:py-24 md:py-28 lg:py-36 lg:pl-8'>
        <div className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-800'>
          <p>Your Wellness Journey</p>
          <p className='mt-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl'>Book an Appointment with 100+ Trusted Therapists</p>
        </div>
        <button
          onClick={() => {
            navigate('/login');
            window.scrollTo(0, 0);
          }}
          className='bg-gradient-to-r from-purple-300 via-purple-400 to-pink-400 text-lg sm:text-xl text-white px-12 py-5 rounded-full mt-12 hover:bg-purple-500 hover:scale-105 transition-all'
          aria-label="Create an account to book an appointment"
        >
          Create Account
        </button>
      </div>

      {/* ------------------------- Right Side --------------- */}
      <div className='hidden md:block md:w-2/3 lg:w-[550px] relative overflow-hidden'>
        <img
          className='w-full h-full object-cover absolute bottom-0 right-0 max-w-full max-h-full rounded-lg shadow-2xl'
          src={appointmentimg}
          alt="Illustration for booking an appointment"
        />
      </div>
    </div>
  );
};

export default Banner;
