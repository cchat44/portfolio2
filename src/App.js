
import './App.css';
import Home from './components/home';
import About from './components/about';
import Navbar from './components/layout/navbar';
import DataRoute from './components/subcomponents/DataRoute';


export default function App() {

  return <>
   <Router>
  <Navbar />
  <div className='app app-div'> {/* // Baselayout.jsx */}
    <Routes>

    <Route path='/' element={<Home/>} /> 
    <Route path='/about' element={<About/>} /> 
    
    </Routes>
  </div>
</Router> 
  <h2>Cory R. Chatman </h2>

<div>
  
</div>

  </>
  ;
 }