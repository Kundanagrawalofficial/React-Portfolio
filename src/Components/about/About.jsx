import React from 'react'
import "./About.css"
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"
// import {FaAward} from "react-icons/fa"
import Me from "../../assets/me-about.jpg"
const About = () => {
  return (
   <section id='about'>
    <h5>Get To Know</h5>
   <h2>About Me</h2> 
   <div className='container about__container'>
    <div className='about__me'>
      <div className='about__me-image'>
        <img src={Me} alt="About me"/>
      </div>
    </div>
    <div className='about__content'>
      <div className='about__cards'>

           <article className='about__card'>
            <FaAward className='about__icon'/>
             <h5>Experience</h5>
             <small>3+ Years Working</small>
           </article>
           <article className='about__card'>
            <FiUsers className='about__icon'/>
             <h5>Clients</h5>
             <small>200+ Worldwide</small>
           </article>
           <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
             <h5>Projects</h5>
             <small>80+ Completed Project</small>
           </article>
      </div>
      <p>
        As a software developer, I am highly skilled in creating efficient, scalable, and user-friendly software applications. I am passionate about utilizing the latest technologies and tools to build innovative solutions that solve complex problems and enhance user experiences. Whether I am working on the front-end or back-end of an application, I am committed to writing clean, maintainable code that is easy to understand and modify. I take pride in staying up-to-date with the latest industry trends and best practices, and I am always looking for ways to improve my skills and learn new things.
      </p>
      <a href='#contact' className='btn btn-primary'>
        Let's Talk

      </a>
   </div>
   </div>
   </section>
  )
}

export default About
