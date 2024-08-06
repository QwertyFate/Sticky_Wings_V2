 
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
import MenuPage from './Pages/Menu.js';
import DeliveryPage from './Pages/DeliveryPage.js';

const App=()=> {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<NavBar />} >
      <Route index element={<LandingPage />} />
      <Route path='/Menu' element={<MenuPage />}></Route>
      <Route path='/Delivery' element={<DeliveryPage />}></Route>
      </Route>
    </Routes>
      
    </Router>
  )
};

export default App;