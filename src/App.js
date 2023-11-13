
// App.js
import React from 'react';
import Header from "./component/common/header/Head";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "primeflex/primeflex.css";
import Pricing from "./component/pricing/Pricing"
import About from "./component/about/About";
import CourseHome from "./component/allCoureses/homecourse";
import Inscription from "./component/home/hero/inscription";
import navbar from "./component/common/header/Head";
import Blog from "./component/blog/blog";
import Contact from "./component/contact/Contact";
import Footer from "./component/common/footer/footer";
import Home from "./component/home/Home";
import Navbar from './component/home/navbar';
import Head from './component/common/header/Head';



function App() {
 

  return (
    <div >
      
      <Router>
        <>
          <Head/>
          <Navbar/>
          <Switch>
        
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/courses' component={CourseHome} />
            <Route exact path='/pricing' component={Pricing} />
            <Route path='/inscription' component={Inscription} />
            <Route path='/journal' component={Blog} />
            <Route path='/contact' component={Contact} />
          </Switch>
          <Footer />
        </>
      </Router>
    </div>
  );
}

export default App;