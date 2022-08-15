import React from 'react';
import './App.css';
import Header from './components/header';
import Greeting from './components/greeting';
import Services from './components/whatwedo';
import Shop from './components/shop';
import Professionals from './components/professionals';



function App() {
  return (
    <div className="App">
      <Header />
      <Greeting  />
      <Services />
      <Professionals />
      <Shop />
    </div>
  );
}

export default App;
