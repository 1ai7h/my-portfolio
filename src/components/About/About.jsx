import React from 'react'
import './about.css'
import ME from '../../assets/ME.png'
import {BiTimeFive} from 'react-icons/bi'
import {FaFlagCheckered,FaUniversity} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>About
    <h5>Get to Know</h5>
    <h2>Laith</h2>
    <div className='container about_container'>
      <div className='about__me'>
        <div className='about__me-image'>
          <img src={ME} alt="Image of me" />
        </div>
      </div>
      <div className='about__content'>
        <div className="about__cards">

          <article className='about__card'>
            <BiTimeFive className='about__icon'/>
            <h5>Experience</h5>
            <small>1+ Years Experience</small>
          </article>

          <article className='about__card'>
            <FaFlagCheckered className='about__icon'/>
            <h5>Internships Completed</h5>
            <small>2 Completed</small>
          </article>

          <article className='about__card'>
            <FaUniversity className='about__icon'/>
            <h5>Education</h5>
            <small>Junior Computer Science Undergraduate</small>
          </article>

        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non tempora repudiandae repellat, 
          dicta obcaecati nemo blanditiis repellendus cumque ex illo praesentium. 
          Molestiae deserunt aliquid libero excepturi tempora, quas a eligendi!
        </p>
        <a href="#contact">Let's Talk</a>
      </div>
    </div>
    </section>
  )
}

export default About