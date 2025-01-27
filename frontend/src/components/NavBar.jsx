import React, { useState } from 'react';
import logo from '../massage_assets/massage_logo.jpg';
import profile from '../massage_assets/profile.png';
import drop from '../massage_assets/down-arrow.png';
import { FaPhoneAlt } from 'react-icons/fa'; // Import the phone icon
import { NavLink, useNavigate } from 'react-router-dom';
import menu_icon from '../massage_assets/burger-menu.png';
import cross_icon from '../massage_assets/crosses.png';

const NavBar = () => {
  const navigate = useNavigate();

  const [token, setToken] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      {/* Logo */}
      <img
        onClick={() => navigate('/')}
        src={logo}
        alt="Logo"
        className="w-34 cursor-pointer h-20"
      />

      {/* Navigation Links */}
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/">
          <li className="py-1">Home</li>
        </NavLink>
        <NavLink to="/therapists">
          <li className="py-1">Massage Services</li>
        </NavLink>
        <NavLink to="/travels">
          <li className="py-1">Travel-Mates</li>
        </NavLink>
        <NavLink to="/about">
          <li className="py-1">About</li>
        </NavLink>
        <NavLink to="/terms">
          <li className="py-1">Terms of Services</li>
        </NavLink>
      </ul>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Phone Icon and Number */}
        <a
          href="tel:+254705067895"
          className="flex items-center gap-2 bg-purple-300 px-4 py-2 rounded-full text-black font-medium shadow hover:shadow-md hover:bg-[#32d6c3] transition duration-200"
        >
          <FaPhoneAlt className="text-lg" /> {/* Phone Icon */}
          <span>+254-466-040-71</span>
        </a>

        {/* User Dropdown or Login Button */}
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-8 rounded-full" src={profile} alt="User" />
            <img className="w-3" src={drop} alt="Dropdown" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate('/my-profile')}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate('/my-appointments')}
                  className="hover:text-black cursor-pointer"
                >
                  My Appointments
                </p>
                <p
                  onClick={() => setToken(false)}
                  className="hover:text-black cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className="bg-[#40E0D0] px-8 py-3 rounded-full font-light hidden md:block text-black"
          >
            Create Account
          </button>
        )}

        <img onClick={()=>setShowMenu(true)} className='w-6 md:hidden' src={menu_icon} alt="" />
        {/* ------------------- Mobile Menu ------------------------- */}
        <div className={`${showMenu ? 'fixed w-full h-full' : 'hidden'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
            <div className='flex items-center justify-between px-5 py-6'>
                <img className='w-36' src={logo} alt="" />
                <img className='w-7' onClick={() => setShowMenu(false)} src={cross_icon} alt="Close menu" />
            </div>
            <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                <NavLink onClick={()=>setShowMenu(false)} to='/'><p className='px-4 py-2 rounded inline-block'>Home</p></NavLink>
                <NavLink onClick={()=>setShowMenu(false)} to='/therapists'><p className='px-4 py-2 rounded inline-block'>Massage Services</p></NavLink>
                <NavLink onClick={()=>setShowMenu(false)} to='/travel'><p className='px-4 py-2 rounded inline-block'>Travel-Mates</p></NavLink>
                <NavLink onClick={()=>setShowMenu(false)} to='/about'><p className='px-4 py-2 rounded inline-block'>About</p></NavLink>
                <NavLink onClick={()=>setShowMenu(false)} to='/terms'><p className='px-4 py-2 rounded inline-block'>Terms of Service</p></NavLink>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
