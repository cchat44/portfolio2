
import React from 'react'
import { Link } from 'react-router-dom'

function  Navbar() {
  return <>
    <div className='links'>
      <Link to='/'> Home </Link>
      <Link to='/portfolio'> Portfolio </Link>
      <Link to='/about'> About </Link>
      <Link to='/contact'> Contact Me</Link>
    </div>
  </>

};
export default Navbar;
