/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import './App.css';
import HomePage from './components/HomePageComponent';

function App() {
  return (
    <div className="App">
      <h1 style={{ color: 'white' }}>this is app</h1>
      <p style={{ color: 'white' }}>what is really happening here</p>
      <HomePage />
    </div>
  );
}

export default App;
