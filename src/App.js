import React from 'react'
import Header from "./Components/header/Header"
import Nav from "./Components/nav/Nav";
import About from "./Components/about/About"
import Contact from "./Components/contact/contact"
import Experience from "./Components/experence/Experience"
import Footer from "./Components/Footer/footer"
import Services from "./Components/services/Services"
import Testimonials from "./Components/testimonials/Testimonials"
import Portfolio from "./Components/portfolio/Portfolio"
export const App = () => {
  return (
    <>
    <Header/>
     <Nav/>
     <About/>
     <Experience/>
     <Services/>
     <Portfolio/>
     <Testimonials/>
     <Contact/>
     <Footer/>
    </>
  )
}
export default App