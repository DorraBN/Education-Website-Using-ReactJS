
// App.js
import React from 'react';
import Header from "./component/common/header/Head";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "./component/about/About";
import CourseHome from "./component/allCoureses/homecourse";
import Inscription from "./component/home/hero/inscription";

import Blog from "./component/blog/blog";
import Contact from "./component/contact/Contact";
import Footer from "./component/common/footer/footer";
import Home from "./component/home/Home";
import styled, { keyframes } from 'styled-components';
const rotateStar = keyframes`
  0% {
    transform: rotate(0deg) scale(1);
  }
  100% {
    transform: rotate(180deg) scale(0.2);
  }
`;

const moveStar = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-100vh);
  }
  100% {
    transform: translateY(0);
  }
`;

const Star = styled.div`
width: 0;
height: 0;
border-left: 20px solid transparent;
border-right: 20px solid transparent;
border-bottom: 40px solid #fff;
position: absolute;
animation: rotateStar 3s linear infinite;

`;

function App() {
  const numberOfStars = 20;

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < numberOfStars; i++) {
      stars.push(
        <Star
          key={i}
          style={{
            left: `${Math.random() * 100}vw`,
            top: `${Math.random() * 100}vh`,
            animationDuration: `${Math.random() * 3 + 2}s`,
          }}
        />
      );
    }
    return stars;
  };

  return (
    <div >
      {renderStars()}
      <Router>
        <>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/courses' component={CourseHome} />
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