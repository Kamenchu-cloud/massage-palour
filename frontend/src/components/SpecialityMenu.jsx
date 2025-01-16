import React from 'react'
import massageServices from '../massage_assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center gap-6 py-16 text-gray-800' id='speciality'>
      <h1 className='text-3xl font-medium text-gray-900'>Find by Speciality</h1>
      <p className='sm:w-1/3 text-center text-sm text-gray-600'>
        From Swedish and deep tissue massages to hot stone therapy, find the perfect technique to match your relaxation goals.
      </p>
      <div className='flex flex-wrap justify-center gap-8 pt-5 w-full'>
        {massageServices.map((item, index) => (
          <Link
            onClick={() => window.scrollTo(0, 0)} // Corrected here
            className='group flex flex-col items-center text-xs cursor-pointer hover:scale-105 transition-transform duration-300 ease-out'
            to={`/therapists/${item.speciality}`}
            key={index}
          >
            <div className='relative flex items-center justify-center w-20 h-20 sm:w-28 sm:h-28 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full shadow-lg group-hover:shadow-2xl transition-shadow duration-300'>
              <img
                className='w-12 h-12 sm:w-16 sm:h-16 object-contain transition-transform duration-300 group-hover:scale-110'
                src={item.image}
                alt={item.speciality}
              />
            </div>
            <p className='text-center font-medium text-gray-700 group-hover:text-purple-600'>
              {item.speciality}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SpecialityMenu
