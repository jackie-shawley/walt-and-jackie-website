/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect } from 'react';
import './App.css';
import HomePage from './components/HomePageComponent';
import WebFont from 'webfontloader';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';

function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Fredericka the Great', 'Dosis', 'Playfair Display']
      }
    });
  }, []);

  return (
    <div className="App">
      {/* <h1 style={{ fontFamily: 'Fredericka the Great', fontSize: '2rem', color: 'white'}}>This is app</h1> */}
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
