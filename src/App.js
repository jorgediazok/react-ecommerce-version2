import React from 'react';
import './App.css';

//Components
import Product from './components/Product';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Product />
    </div>
  );
}

export default App;
