import React from 'react';
import logo from './vlogo.jpg';
import './Logo.css';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';


const Logo = () => {
  return (
   <React.Fragment>
    <div className='main-logo'>
        <div className='logo-div'>
          <Link to='/signin'><button className='signbtn'>Sign In<FontAwesomeIcon icon={faSignInAlt} style={{marginLeft:'5px'}} /></button></Link>  
            <img src={logo} alt="logo_load" className='applogo' />
             <h2 className='logoname'>Sumi</h2>
          <Link to='/signup'><button className='getbtn'>Get Started</button></Link>    
        </div>
    </div>

   </React.Fragment>
  )
}

export default Logo
