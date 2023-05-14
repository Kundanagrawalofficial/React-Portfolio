import React from 'react'
import "./Services.css"
import {BiCheck} from "react-icons/bi"

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='container services__container'>

        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I can design clean, user-friendly, and responsive interfaces for websites and web applications using modern UI/UX design principles.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I can create wireframes, prototypes, and mockups for user testing and feedback.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I can collaborate with clients, developers, and other designers to create a consistent and cohesive user experience.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I can build scalable and maintainable web applications using modern web development technologies such as React, Node.js, and MongoDB.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I can implement responsive web design and ensure cross-browser compatibility for a seamless user experience across devices.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I can write clean, efficient, and well-documented code that is easy to understand and maintain.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I can create high-quality written and visual content that aligns with the client's brand voice and messaging.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I can conduct research and interviews to gather information and insights for content creation.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I can optimize content for search engines (SEO) and social media platforms to increase visibility and engagement.</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services
