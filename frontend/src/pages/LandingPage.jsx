import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopTherapists from '../components/TopTherapists'
import Banner from '../components/Banner'

const LandingPage = () => {
  return (
    <div>
      <Header />
      <SpecialityMenu />
      <TopTherapists />
      <Banner />
    </div>
  )
}

export default LandingPage