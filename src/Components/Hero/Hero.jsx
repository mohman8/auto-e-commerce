import React, { useState } from 'react'
import './Hero.css'
import bmw_three_removebg from '../Assests/bmw_three_removebg.png'
import bmw_five_removebg from '../Assests/bmw_five_removebg.png'
import mercedes_benz_suv_remove from '../Assests/mercedes_benz_suv_remove.png'
import range_rover_five_removebg from '../Assests/range_rover_five_removebg.png'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'

const Hero = () => {
  const [chat, setChat]=useState ('shop')
  return (
    <div className="section">
     <div className='hero'>
      <div className="hero-left">
      <h2>Find your perfect ride</h2>
      <div>
        <p>Quality cars </p> 
       <p> unbeatable prices </p>
       <p> and a drive you will love. </p>
      </div>
        <div className="hero-latest-button">  Shop now</div>  
      </div>
      <div className="hero-right">
      <img src={bmw_three_removebg} alt="" />
      </div>
    </div>
    {/* ///section2 */}
    <div className="hero_two">
      <h2>Featured Categories</h2>
      <div className="gallery">
          <div className="image">
           <img src={bmw_five_removebg}alt="" />
           <h2>BMW</h2>
           
          <Link to='/shop'>  <button className='shop-1'>Shop</button></Link>
        
           
         </div>
         
            <div className="image">
             <img src={mercedes_benz_suv_remove} alt="" />
             <h2>Mercedes Benz</h2>
            <Link to='/shop'><button className='shop-2'>Shop</button> </Link> 
           
             </div>
            <div className="image">
              <img src={range_rover_five_removebg} alt="" />
              <h2>Range Rover</h2>
              
           <Link to='/shop'><button className='shop-3'>Shop</button></Link> 
          
             </div>
       </div>

       <Footer/>
     
    </div> 


    </div>
  )

}


export default Hero
