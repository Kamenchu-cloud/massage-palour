import React from 'react'
import abtWoman from '../massage_assets/womanModel.jpg'
import Locations from './Locations'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-700'>
        <p>ABOUT <span className='text-gray-800 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={abtWoman} alt="A woman model representing wellness services" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4'>
          <p>
          <strong>Welcome to Willow</strong>, Nairobi's premier provider of personalized wellness and intimate services. 
            We specialize in offering luxurious massages, escort services, and tailored experiences designed to rejuvenate your body and uplift your spirit. 
            Our discreet, professional team ensures every moment is crafted to your unique preferences, with services available at select locations across Nairobi for your ultimate convenience. 
            At Willow, we redefine indulgence with care, class, and excellence.
          </p>
          
          <strong>Our Mission</strong>
          <p>
            At Willow, our mission is to provide an unparalleled blend of luxury, relaxation, and personalized care. 
            We strive to create safe, welcoming spaces where our clients can unwind, rejuvenate, and connect, ensuring every experience is memorable and transformative.
          </p>
          
          <strong>Our Values</strong>
          <p>
            <strong>Discretion:</strong> Your privacy is our utmost priority.<br />
            <strong>Professionalism:</strong> Our team is committed to delivering exceptional, respectful, and reliable service.<br />
            <strong>Personalization:</strong> Every client is unique, and we take pride in tailoring experiences to meet your individual needs.<br />
            <strong>Excellence:</strong> We aim to exceed expectations, creating moments of true indulgence and care.
          </p>

          {/* Why Choose Willow Section */}
          <strong>Why Choose Willow?</strong>
          <ul>
            <li><strong>Convenient Locations:</strong> Enjoy our services at prime locations across Nairobi, tailored to your preference.</li>
            <li><strong>Trained Professionals:</strong> Our team is carefully selected and trained to deliver top-tier services with finesse.</li>
            <li><strong>Premium Experiences:</strong> We use high-quality products, serene environments, and personalized approaches to ensure unmatched satisfaction.</li>
            <li><strong>Confidentiality Assured:</strong> Your comfort and privacy are at the core of our operations.</li>
          </ul>
        </div>
      </div>
      <Locations />
    </div>

  )
}

export default About
