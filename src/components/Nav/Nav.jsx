import React from 'react'
import './nav.css'
import {AiOutlineHome,AiOutlineFieldTime} from 'react-icons/ai'
import {FaUserAstronaut} from 'react-icons/fa'
import {MdContactPhone} from 'react-icons/md'


const nav = () => {
  return (
    <nav>
      <a href="#"><AiOutlineHome /></a>
      <a href="#about"><FaUserAstronaut /></a>
      <a href="#Experience"><AiOutlineFieldTime /></a>
      <a href="#Contact"><MdContactPhone /></a>
    </nav>

  )
}

export default nav