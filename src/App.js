 
import React, {useState} from 'react'; 
import ReactDOM from 'react-dom'; 
import "./App.css"
import NavBar from './Components/navBar.js'; 
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import LandingPage from "./Pages/LandingPage.js"
import DeliveryPage from './Pages/DeliveryPage.js';
import DeliveryStart from './Pages/DeliveryStart.js';
import SlugPage from './Pages/SlugPage.js';
import CheckOutPage from './Pages/CheckOutPage.js';
import ProtectedRoute from "./Components/ProtectedRoute.js"

const App=()=> {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<NavBar />} >
      <Route index element={<LandingPage />} />
      <Route path='/Delivery' element={<DeliveryStart />}></Route>
      <Route path='/Delivery/Menu' element={<DeliveryPage />}></Route>
      <Route path="/Delivery/:slug" element={<SlugPage />}></Route>
      <Route path="/Checkout" element={<ProtectedRoute element={CheckOutPage} />}></Route>
      </Route>
    </Routes>
      
    </Router>
  )
};

export default App;