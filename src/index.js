// index.js
import React, { Suspense, lazy, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Header from './components/Header';
import RestaurantMenu from './components/RestaurantMenu';
import Shimmer from './components/Shimmer';
import UserContext from './components/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
const Grocery = lazy(() => import('./components/Grocery'));

const AppContainer = () => {
 //Replace with your logic to determine if the user is logged in or not
  const [username,setusername]=useState();
  useEffect(() => {
    // Your useEffect logic here
    const data = {
      name:"RITX",
    }; // 
    setusername(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser:username,setusername }}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/grocery" element={<Suspense fallback={<Shimmer />}><Grocery /></Suspense>} />
          <Route path="/restaurants/:restid" element={<RestaurantMenu />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
};

root.render(<AppContainer />);

reportWebVitals();
