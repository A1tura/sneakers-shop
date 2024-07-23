import React from 'react';
import './App.css';
import Header from './components/header/header';
import Slider from './components/slider/slider';

function App() {
  return (
    <div className='App'>
      <Header style={{"marginBottom": "20px"}} />
      <Slider />
    </div>
  );
}

export default App;
