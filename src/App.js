import React from 'react';
import './App.css';

//Components
import Navbar from './components/Navbar';
import Products from './components/Products';
import CheckoutPage from './components/CheckoutPage';

function App() {
  return (
    <div className="app">
      <Navbar />
      <CheckoutPage />
    </div>
  );
}

export default App;
