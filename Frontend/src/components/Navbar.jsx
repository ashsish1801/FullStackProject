import React from 'react';
import  './Navbar.css';
import Logo from '../../../fullstackAssets/Lead Generation Landing page (Images)/logo.svg'
import Banner from './Banner';
function Navbar() {
  return (
    <>
    <div className='Navbar'>
       <div className='img1'> <img src={Logo}  alt="not loaded" /></div>
       <div className='Navsection'>
         <a href="#">HOME</a>
         <a href="#">SERVICES</a>
         <a href="#">ABOUT PROJECT</a>
         <a href="#">TESTIMONIAL</a>
       </div>
       <button className='Button1'> CONTACT</button>
    </div>
    <Banner/>
    </>
  )
}

export default Navbar