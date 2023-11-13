import React from "react"
import AboutCard from "../about/aboutCard"
import Hblog from "./Hblog"
import navbar from './navbar'
import HAbout from "./Habout"
import Hero from "./hero/Hero"
import Hprice from "./Hprice"
import Price from "./Price"
import Testimonal from "./testimonal/testimonal"

const Home = () => {
  return (
    <> 
<navbar />
      <Hero /><HAbout /> <AboutCard />
   
      <Testimonal /> <Hblog/>
     
 <Hprice/>
 <Price />

     
     
     
    </>
  )
}

export default Home
