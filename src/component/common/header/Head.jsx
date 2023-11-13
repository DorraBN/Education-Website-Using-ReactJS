import React from "react"
import { Link } from "react-router-dom"

import "./h.css"
const Head = () => {
  
  return (
    
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'><br /><br /><br />
          <img src="images/blog/logo.png" alt="" />  
           
          </div>
          
          <div className='social1'>
           
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i>
            <i className='fab fa-linkedin icon'></i>
          </div>
        </div>
        <br /><br /><br />
        <br></br>
      </section><br /><br />
      
    </>
  )
}

export default Head
