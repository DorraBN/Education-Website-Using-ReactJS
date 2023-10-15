import React from "react"
import AboutCard from "../about/aboutCard"
import Hblog from "./Hblog"

import HAbout from "./Habout"
import Hero from "./hero/Hero"
import Hprice from "./Hprice"
import Testimonal from "./testimonal/testimonal"

const Home = () => {
  return (
    <> 
      <Hero /><HAbout /> <AboutCard />
   
      <Testimonal /> <Hblog/>
     
 <Hprice/>

     
     
     
    </>
  )
}

export default Home
