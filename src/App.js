import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import SpecialEvents from './components/SpecialEvents';
import IndividualFlavours from './components/IndividualFlavours';
import NewsLetter from './components/NewsLetter';
import Footer from './components/Footer';


function App() {

  return (
    <div className="App">
      <Header/>
      <Hero/>
      <div className='underline'></div>
      <SpecialEvents/>
      <div className='underline'></div>
      <IndividualFlavours/>
      <div className='underline'></div>
      <NewsLetter/>
      <Footer/>
    </div>
  );
}

export default App;
