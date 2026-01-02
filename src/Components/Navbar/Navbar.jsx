import React, { useState,useRef } from 'react'

import './Navbar.css'
import cart from '../Assests/cart-solid.svg'
import { Link } from 'react-router-dom'
import arrow_down from '../Assests/arrow_down.png'
const Navbar = () => {
  const [menu, setMenu]= useState ('Home');
  const menuRef= useRef();
  const dropdown_toggle =(e)=>{
   menuRef.current.classList.toggle('nav-menu-visible');
   e.target.classList.toggle('open')
  }
  return (
    <div className="navbar">
      <Link to="/" className="logo">Moh Autos</Link>
          <img className='nav-dropdown' onClick={dropdown_toggle} src={arrow_down} alt="" />
      <ul ref={menuRef} className='nav-menu'>
        <li onClick={()=>{setMenu ('Home')}}> <Link style={{textDecoration: 'none'}} to='/'> Home</Link> {menu==='Home'?<hr/>: <></>} </li>
        <li onClick={()=> {setMenu ('Shop')}}><Link style={{textDecoration: 'none'}} to='/shop'> Shop</Link> {menu==='Shop'?<hr/>: <></>}</li>
        <li onClick={()=> {setMenu ('about')}}> <Link style={{textDecoration: 'none'}} to='/about'> About us</Link> {menu==='about'?<hr/>: <></>}</li>
        {/* <li onClick={()=> {setMenu('contacts')}}> <Link style={{textDecoration: 'none'}} to='/contact'> Contact</Link> {menu==='contacts'?<hr/>: <></>}</li> */}
      </ul>
      <div className="nav-login-cart">
      <Link to='/login'> <button>Login</button> </Link>
      <Link to='/cart'>  <img src={cart} alt="" /></Link>
      </div>
    </div>


  
  )
}

export default Navbar
