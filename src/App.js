/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect } from 'react';
import './App.css';
import Main from './components/MainComponent';
import WebFont from 'webfontloader';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';

function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Fredericka the Great', 'Dosis', 'Playfair Display', 'Montserrat']
      }
    });
  }, []);

  return (
    <div className="App">
      {/* <h1 style={{ fontFamily: 'Fredericka the Great', fontSize: '2rem', color: 'white'}}>This is app</h1> */}
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
