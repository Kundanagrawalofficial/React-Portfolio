import React from 'react'
import "./Header.css";
import HeaderSocials from './HeaderSocials';
import CTA from './CTA'
import Me from "../../assets/me.png"
const Header = () => {
  return (
   <header Id ="#">
    <div className='container header__container'>
      <h5>Hello I'm </h5>
      <h1>Kundan Agrwal</h1>
      <h5 className='text-align'>Fullstack Developer</h5>
      <CTA/>
      <HeaderSocials/>
      <div className='me'>
          <img src={Me} alt='me'/>

      </div>
      <a href='#contact' className='scroll__down'>Scroll Down</a>
    </div>
   </header>
  )
}

export default Header
