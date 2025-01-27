import React from 'react'
import logo from '../massage_assets/massage_logo.jpg'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:flex-row sm:space-x-10 my-10 mt-40 text-sm justify-between items-center'>

            {/*---------------------- Left section ---------------------*/}
            <div className='flex-1'>
                <img className='mb-5 w-40' src={logo} alt="" />
                <p className='md:w-84 text-gray-800'>Experience unparalleled relaxation and companionship with our premium massage and travel mate escort services. We are committed to providing exceptional care, professionalism, and discretion, ensuring every moment with us is tailored to your comfort and satisfaction. Your well-being and privacy are our top priorities.</p>
            </div>

            {/* ---------------------- Center Section ------------------ */}
            <div className='flex-1 mt-8 sm:mt-0 sm:ml-12'>
                <p className='text-xl font-medium mb-5'>Service Agency</p>
                <ul className='flex flex-col gap-2 text-gray-800'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            {/* ------------------------ Right Section ------------------- */}
            <div className='flex-1 mt-8 sm:mt-0'>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-800'>
                    <li>+254-466-040-71</li>
                    <li>selfcaresanctuary@gmail.com</li>
                </ul>
            </div>

        </div>
        <div>
            {/* -------------------- Copyright Text ---------------------- */}
            <hr />
            <p className='py-5 text-sm text-center'>&copy; 2025 Self Care Sanctuary. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer
