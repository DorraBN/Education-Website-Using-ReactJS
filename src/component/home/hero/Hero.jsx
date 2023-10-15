import React from "react"
import Heading from "../../common/heading/Heading"
import "./hero.css"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Hero = () => {
  return (
    <>
   
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='Bienvenue à Greenix' title='Le meilleur  Expertise de leducation en ligne ' /> 
            <div className='button'>
              <button  >
              <Link to="/inscription">S'inscrir</Link>
              </button>
              <button className="primary-btn">
               voir cours
              </button>
            </div>
          </div>
        </div>
      </section>
    
    </>
  )
}

export default Hero
