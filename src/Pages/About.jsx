import React from 'react'
import './About.css'
import bmw_two_removebg from '../Components/Assests/bmw_two_removebg.png'
import Footer from '../Components/Footer/Footer'

const About = () => {
  return (
    <div>
    <div className='flex'> 
    <div className="text">
     <h2>About us</h2>
     <h4>Moh-Autos is a trusted name in Nigeria’s automotive market, delivering quality <br /> vehicles at competitive prices since our founding three years ago. Specializing in <br /> both locally used and foreign cars, we’re committed to making car ownership accessible, <br /> affordable, and rewarding for our customers.

What sets us apart is simple: unbeatable <br /> value, a customer-first approach, and deep industry experience. Every vehicle we <br /> sell is carefully selected to meet high standards of performance and reliability — because <br /> we believe our clients deserve nothing less.

At Moh-Autos, we combine expert knowledge <br /> with personalized service to ensure a seamless car-buying experience from start to finish. <br /> Whether you're looking for a reliable daily driver or a premium upgrade, our team is here <br /> to help you find the perfect match.

Drive with confidence. Drive with Moh-Autos.</h4>
</div>
       <img src={bmw_two_removebg} alt="" />
</div>
{/* section2 */}

<div className='section-two'>
  <h1>WHY CHOOSE US?</h1>

  <div className='choose'>
    <div className='five'>
      <h4>Trusted Quality, Guaranteed</h4>
      <p>Every vehicle at Moh Autos is thoroughly inspected <br /> and quality-certified to ensure you're getting <br /> nothing but the best — reliable.</p>
    </div>

    <div className='five'>
      <h4>
       Affordable Prices, Flexible Options
      </h4>
      <p>
       We offer competitive pricing, flexible payment plans, <br /> and financing solutions to fit every budget <br /> and lifestyle.
      </p>
    </div>

    <div className='five'>
      <h4>
        Wide Selection of Vehicles
      </h4>
      <p>
       From compact cars to luxury SUVs, our diverse <br /> inventory means you’ll find the perfect vehicle <br /> for your needs — all in one place.
      </p>
    </div>

    <div className='five'>
      <h4>
       Exceptional Customer Service
      </h4>
      <p>
       At Moh Autos, we put our customers first. <br /> Our friendly team is here to guide you every step of the way, <br /> from test drive to ownership.
      </p>
    </div>

    {/* <div className='five'>
      <h4>
         After-Sales Support & Peace of Mind
      </h4>
      <p>
       Enjoy added peace of mind with our warranty options, <br /> routine maintenance services, and post-purchase <br /> support you can count on.
      </p>
    </div> */}
  </div>
</div>
    <Footer/>
    </div>

    
    
    
  )
}

export default About
