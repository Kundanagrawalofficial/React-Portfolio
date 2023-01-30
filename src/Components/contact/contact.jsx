import React from 'react'
import "./Contact.css"
import CircleAnimation from "./CircleAnimation";
import {MdOutlineMail} from "react-icons/md"
import {RiMessengerLine} from "react-icons/ri"
import {BsWhatsapp} from "react-icons/bs"
import  { useRef } from 'react';
// import * as d3 from 'd3';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_afr75p4', 'template_0e3kp7n', form.current, 'fZr_XdE_6UNSa2eRd')
    e.target.reset()
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
        <article className="contact__option">
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>KundanAgrawal90@gmail.com</h5>
            <a href='mailto:kundanagrawal90@gmail.com' target="_blank"  rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Kundan Agrwal</h5>
            <a href='https://m.me/technicalhelperandgamer'>Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>whatsapp</h4>
            <h5>+917061478272</h5>
            <a href='https://api.whatsapp.com/send?phone+917061478272'>Send a message</a>
            
          </article>
          

        </div>
         {/* end of contact option */}
         <form ref={form} onSubmit={sendEmail}>
         <input type="text" name="name" placeholder='Your Full Name' required/>
         <input type="email" name="email" placeholder='Your Email' required/>
         <textarea name='message' rows="7" placeholder='Your message' required>
         </textarea>
          <button type='submit' className='btn btn-primary ' >Send Message</button>
          <CircleAnimation />

        


         </form>
      </div>
      </section>

  )
}

export default Contact