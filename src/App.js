import React from 'react';
import './App.css';

//Components
import Navbar from './components/Navbar';
import Products from './components/Products';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Products />
    </div>
  );
}

export default App;
