import React, { useState } from "react"; 
import './nav.css'
import {AiOutlineHome,AiOutlineFieldTime} from 'react-icons/ai'
import {FaUserAstronaut} from 'react-icons/fa'
import {MdContactPhone} from 'react-icons/md'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' :''}><FaUserAstronaut /></a>
      <a href="#Experience" onClick={() => setActiveNav('#Experience')} className={activeNav === '#Experience' ? 'active' :''}><AiOutlineFieldTime /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' :''}><MdContactPhone /></a>
    </nav>

  )
}

export default Nav