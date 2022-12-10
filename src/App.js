
import React from 'react';
import Navbar from './components/layout/Navbar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
   return  <>
     <div className='App'>
       <Router>

        <Navbar />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router> 
    </div> 
   
   </>
   
}

export default App;
