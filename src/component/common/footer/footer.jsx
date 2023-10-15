import React from "react"
import { blog } from "../../../dummydata"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <img src="https://img.icons8.com/external-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto/80/ffffff/external-graduation-education-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto.png" alt="" />
            <h1>Restez à l'écoute et obtenez les dernières mises à jour</h1>
<span>  N'hesitez pas de nous contacter</span>

          </div>
          <div className='right row'>
          <i class="fa fa-envelope"></i> <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>Greenix</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
           <p>Greenix est une entreprise qui propose des solutions technologiques pour optimiser la gestion et l'organisation des activités. Ils offrent des solutions informatiques sur mesure de haute qualité pour accroître la réussite commerciale en tirant parti de la technologie.</p>
            <p>contacter-nous via</p>
<div className="social">
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-linkedin icon'></i>
            
          </div></div>
          <div className='box last'>
            <h3 id="k">Avez-vous un question?</h3>
         
            <ul>
            
              <li>
                <i className='fa fa-phone-alt'></i>
               55759343
              </li>
              <li>
              <i class="fa fa-envelope"></i>
              contact.greenix@gmail.com
              </li>
              <li>
                <i className='fa fa-map'></i>
                rue habib bourguiba -Radés
              </li>
            </ul>
          </div>
          <div className='box link'>
            <h3 id="k">Des liens rapides</h3>
       
            <ul>
              <li><i class="fa fa-caret-right"></i> Contacter-nous</li>
              <li><i class="fa fa-caret-right"></i> Prix</li>
              <li><i class="fa fa-caret-right"></i> Termes et Conditions</li>
              <li><i class="fa fa-caret-right"></i> Services</li>
              <li><i class="fa fa-caret-right"></i> Feedbacks</li>
            </ul>
          </div>
          
         <img src="images/blog/logo.png" alt=""  className="h"/>   <iframe
         id="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12735.422803054294!2d10.196429734534893!3d36.80649648615945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e0bf4dbd546361%3A0x397e1cc376f61c12!2sTunis%2C%20Tunisie!5e0!3m2!1sen!2sus!4v1647705477088!5m2!1sen!2sus"
         frameborder="0"
        
         allowfullscreen=""
         aria-hidden="false"
         tabindex="0"
       ></iframe>
        </div>
       
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2023 tous les droits sont reservés
        </p>
      </div>
     <scroll/>
    </>
  )
}

export default Footer
