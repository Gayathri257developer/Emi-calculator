
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import EMI from './Components/EMI';
import Navbar from './Components/Navbar';
import Signup from './Components/Signup';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <BrowserRouter>
    <Routes>
      <Route path="/emi" element={<EMI/>}/>
      <Route path="/" element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
     
     
    </div>
  );
}

export default App;
