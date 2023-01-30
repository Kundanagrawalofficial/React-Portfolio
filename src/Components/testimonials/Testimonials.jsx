import React from 'react'
import "./Testimonials.css"
import AVATAR1 from "../../assets/avatar1.jpg"
import AVATAR2 from "../../assets/avatar2.jpg"
import AVT3 from "../../assets/avatar3.jpg"
import AVATAR4 from "../../assets/avatar4.jpg"
// import Swiper core and required modules
import { Pagination , Scrollbar,A11y} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const data=[
  {
    avatar:AVATAR1,
    name:"Tina Snow",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit velit quaerat quod explicabo, qui architecto ducimus possimus voluptatibus suscipit! Eius!"

  },
  {
    avatar:AVATAR2,
    name:"Tina Snow",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit velit quaerat quod explicabo, qui architecto ducimus possimus voluptatibus suscipit! Eius!"

  },
  {
    avatar:AVT3,
    name:"Tina Snow",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit velit quaerat quod explicabo, qui architecto ducimus possimus voluptatibus suscipit! Eius!"

  },
  {
    avatar:AVATAR4,
    name:"Tina Snow",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit velit quaerat quod explicabo, qui architecto ducimus possimus voluptatibus suscipit! Eius!"

  }
]

const Testimonials = () => {
  
  return (
    <section id='Testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[ Pagination, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
     >
        {
          data.map(({avatar,name,review},index)=>{
            return(

              <SwiperSlide key = {index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt='avatar one'/> </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>
                 {review}
                </small>
                
            </SwiperSlide>
            )
          })
        }
       
      </Swiper>
      </section>

  )
}

export default Testimonials