import React from 'react';
import './App.css';
import NavBar from './components/navbar/navbar';
import Carousel from './components/carousel/carousel';
import Body from './components/body/body';
import Footer from './components/footer/footer';

const App = () => {
  return(
    <div className="main">
      <NavBar />
      <Carousel />
      <Body />
      <Footer />
    </div>
  )
    
}

export default App;
