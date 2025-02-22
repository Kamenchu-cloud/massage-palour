import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopTherapists = () => {
  const navigate = useNavigate()
  const { massageProfessionals } = useContext(AppContext)

  return (
    <div className='flex flex-col items-center gap-8 my-16 text-gray-900 md:mx-10'>
      <h1 className='text-3xl font-medium text-gray-800'>Top</h1>

      <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-5 gap-y-8 px-3 sm:px-0'>
        {massageProfessionals.slice(0, 18).map((item, index) => (
          <div
            onClick={() => {
              navigate(`/appointment/${item.id}`);
              window.scrollTo(0, 0);
            }}
            className='border border-gray-200 rounded-xl overflow-hidden cursor-pointer transform hover:scale-105 hover:translate-y-[-5px] transition-all duration-300 shadow-md hover:shadow-2xl'
            key={index}
          >
            <img className='w-full h-60 object-cover bg-blue-50' src={item.image} alt={item.name} />

            <div className='p-6'>
              <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                <p className='w-2 h-2 bg-green-500 rounded-full'></p>
                <p>Available</p>
              </div>
              <p className='text-gray-900 text-lg font-medium mt-4'>{item.name}</p>
              <p className='text-gray-600 text-sm'>{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => { navigate('/therapists'); window.scrollTo(0, 0); }}
        className='bg-gradient-to-r from-purple-300 via-purple-400 to-pink-400 text-sm sm:text-base text-gray-800 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all ease-in-out'
      >
        View All 
      </button>
    </div>
  )
}

export default TopTherapists
