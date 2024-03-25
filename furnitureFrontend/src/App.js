import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Listing from './components/Listing';
import Details from './components/Details';
import Login from './components/Login';
import Wishlist from './components/Wishlist';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import UnderDevelopment from './components/UnderDevelopment';
import Register from './components/Register';
import ErrorPage from './components/ErrorPage';
import { BACKEND_URL } from './backendUrl.js';

export default function App() {
  const [furniture, setFurniture] = useState([]);
  const [savedItems, setSavedItems] = useState([]);

  useEffect(() => {
    fetch(BACKEND_URL + 'saved-items/')
      .then(response => response.json())
      .then(data => setSavedItems(data))
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    fetch(BACKEND_URL)
      .then(response => response.json())
      .then(data => setFurniture(data))
      .catch(error => console.error(error));
  }, []);
  

  // Filter furniture by category
  const beds = furniture.filter(item => item.category === 'bed');
  const dining = furniture.filter(item => item.category === 'dining');
  const wardrobes = furniture.filter(item => item.category === 'wardrobe');

  const handleSavedItemsChange = (updatedItems) => {
    setSavedItems(updatedItems);
  };

  return (
    <Router>
      <div className="App">
        <Header furniture={furniture} savedItems={savedItems} onChange={handleSavedItemsChange} />
        <div className="App-body">
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/details/:id" element={<Details savedItems={savedItems} onChange={handleSavedItemsChange} />} />
            <Route path="/all" element={<Listing furniture={furniture} />} />
            <Route path="/beds" element={<Listing furniture={beds} />} />
            <Route path="/dining" element={<Listing furniture={dining} />} />
            <Route path="/wardrobes" element={<Listing furniture={wardrobes} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/under-development" element={<UnderDevelopment />} />
            <Route path="/registration" element={<Register />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
