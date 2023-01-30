import React from 'react'
import "./Portfolio.css"
import IMG1 from "../../assets/portfolio1.jpg"
import IMG2 from "../../assets/portfolio2.jpg"
import IMG3 from "../../assets/portfolio3.jpg"
import IMG4 from "../../assets/portfolio4.jpg"
import IMG5 from "../../assets/portfolio5.png"
import IMG6 from "../../assets/portfolio6.jpg"
//DO NOT USE THE IMAGES IN THE PRODUCTION
const data=[
  {
    Id:1,
    image:IMG1,
    title:"crypto Currency Dashboard & Financial Visualization",
    github:"https://github.com",
    demo:"https://dribbble.com/shots/16673715-crypto-currency-dashborad-and-financial-data-visualization",
  
  },
  {
    Id:2,
    image:IMG2,
    title:"crypto Currency Dashboard & Financial Visualization",
    github:"https://github.com",
    demo:"https://dribbble.com/shots/16673715-crypto-currency-dashborad-and-financial-data-visualization",
  
  },
  {
    Id:3,
    image:IMG3,
    title:"crypto Currency Dashboard & Financial Visualization",
    github:"https://github.com",
    demo:"https://dribble.com/shots/16673715-crypto-currency-dashborad-and-financial-data-visualization",
  
  },
  {
    Id:4,
    image:IMG4,
    title:"crypto Currency Dashboard & Financial Visualization",
    github:"https://github.com",
    demo:"https://dribble.com/shots/16673715-crypto-currency-dashborad-and-financial-data-visualization",
  
  },
  {
    Id:5,
    image:IMG5,
    title:"crypto Currency Dashboard & Financial Visualization",
    github:"https://github.com",
    demo:"https://dribble.com/shots/16673715-crypto-currency-dashborad-and-financial-data-visualization",
  
  },
  {
    Id:6,
    image:IMG6,
    title:"crypto Currency Dashboard & Financial Visualization",
    github:"https://github.com",
    demo:"https://dribble.com/shots/16673715-crypto-currency-dashborad-and-financial-data-visualization",
  
  }
]
const Portfolio = () => {
  return (
    <section id='Portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {
          data.map(({id,image,title,github,demo})=>{
            return(
              <article key={id}className='portfolio__item'>
             <div className='portfolio__item-image'>
           <img src={image} alt={title}/>
             </div>
             <h3>This  is  a Portfolio item title</h3>
               <div className='portfolio__item-ctn'>
               <a href={github} className='btn' target="_blank" rel="noreferrer">Github</a>
             <a href={demo} className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
               </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio