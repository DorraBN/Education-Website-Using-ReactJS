
import "../blog/blog.css"
import { blog } from "../../dummydata"
import Heading from "../common/heading/Heading"




import React, { useState } from 'react';

const RegistrationForm = () => {
  const [showDescription, setShowDescription] = useState(false);

  const handleToggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div id="j">
    
    <div className="wrapper">
      <span className="icon-close">
        <ion-icon name="close-outline"></ion-icon>
      </span>

      <div className="form-box register">
        <h2>
          <i>
            <u>registration</u>
          </i>
        </h2>
        
        <form action="" method="post">
          <div className="input-box">
            <span className="icon">
              <ion-icon name="person"></ion-icon>
            </span>
            <input type="text" name="nom" required />
            <label> <i class="fa fa-user"></i>Prénom</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="person"></ion-icon>
            </span>
            <input type="text" name="prenom" required />
            <label> <i class="fa fa-user"></i>Nom</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="call"></ion-icon>
            </span> 
      
      
            <button type="submit" name="submit" className="btn3">
            registrer
          </button>
         
  
            <input type="number" name="num" required />
            <label><i className='fa fa-phone-alt'></i> Tél</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="mailtline"></ion-icon>
            </span>
            <input type="email" name="email" required />
            <label>  <i class="fa fa-envelope"></i> E-mail</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="lock-closed-outline"></ion-icon>
            </span>
            <input type="password" name="mdp" required />
            <label> <i class="fa fa-lock"></i> Mot de passe</label>
          </div>
          
         
              <input type="checkbox" />
              j'accepte les termes et les conditions
          
          
         
         
        </form>
      </div>
    </div></div>
  );
};

export default RegistrationForm;
