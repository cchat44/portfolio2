
import React from 'react';
import Navbar from './components/layout/Navbar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
   return  <>
     <div className='App'>
       <Router>

        <Navbar />
        <ul>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes></ul>
      </Router> 
    </div> 
   
   </>
   
}

export default App;
