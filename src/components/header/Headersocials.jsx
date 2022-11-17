import React from 'react'
import {BsLinkedin,BsGithub} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'

const Headersocials = () => {
  return (
    <div className='header__socials'>
    <a href="https://www.linkedin.com/in/laithkamal/" target="_blank"><BsLinkedin /></a>
    <a href="https://github.com/1ai7h" target="_blank"><BsGithub/></a>
    <a href="https://leetcode.com/1ai7hcodes/" target="_blank"><SiLeetcode/></a>
    </div>
  )
}

export default Headersocials