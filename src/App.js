import  Home from  './pages/Home.js';
import Services from './pages/Services.js';
import Booking from './pages/Booking';
import About from './pages/About';
import {BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/booking" element={<Booking />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
  </BrowserRouter>

  ); 
} 

export default App;