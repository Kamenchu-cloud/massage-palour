import React from 'react'
import LandingPage from './pages/LandingPage'
import { Route, Routes } from 'react-router-dom'
import Therapists from './pages/Therapists'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import Appointment from './pages/Appointment'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%] bg-[#f5f5f5] font-playfair'>

      <NavBar />
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/therapists' element={<Therapists />}/>
        <Route path='/therapists/:speciality' element={<Therapists />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/my-profile' element={<MyProfile />}/>
        <Route path='/appointment/:docId' element={<Appointment />}/>
      </Routes>
    </div>
  )
}

export default App