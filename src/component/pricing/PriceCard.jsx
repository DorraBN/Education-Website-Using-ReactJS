import React from "react"
import { price } from "../../dummydata"
import "./price.css"
const PriceCard = () => {
  return (
    <>
     {price.map((val) => (
  <div className='items shadow'>
    <img src={val.cover} alt={val.title} className="i" /><span className="m">
    <h4>{val.price}</h4>
    <p>{val.desc}</p>
    <span className="btn-container">
    <button className='outline-btn'>Inscrire maintenant</button></span></span>
  </div>

      ))}
    </>
  )
}

export default PriceCard