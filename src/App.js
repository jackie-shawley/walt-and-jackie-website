/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect } from 'react';
import './App.css';
import HomePage from './components/HomePageComponent';
import NavBar from './components/NavBarComponent';
import WebFont from 'webfontloader';
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Fredericka the Great', 'Dosis']
      }
    });
  }, []);

  return (
    <div className="App">
      {/* <h1 style={{ fontFamily: 'Fredericka the Great', fontSize: '2rem', color: 'white'}}>This is app</h1> */}
      <NavBar />
      <HomePage />
    </div>
  );
}

export default App;
