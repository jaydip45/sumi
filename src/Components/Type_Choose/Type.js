import React from 'react';
import './Type.css';
import vector from './Vector.svg';
import tlogo from './vlogo.jpg';
import {Link} from 'react-router-dom';


const Type = () => {
  return (
    <React.Fragment>
    <div className='main-type'>
        <div className='type-div'>
        <Link to='/language'><img className="vector_t" alt="Vector" src={vector} /></Link>   
        <div className='logo_t'>
                <img src={tlogo} alt='load' />
                <h4>Sumi</h4>     
            </div>
            <div className='descriptions'>Choose Your Favourite Genres</div>
            <div className='choose_type'>
                <div className='grid-type'><h6>Horror</h6></div>
                <div className='grid-type'><h6>Action</h6></div>
                <div className='grid-type'><h6>Fantasy</h6></div>
                <div className='grid-type'><h6>Documentary</h6></div>
                <div className='grid-type'><h6>Comedy</h6></div>
                <div className='grid-type'><h6>Drama</h6></div>
                <div className='grid-type'><h6>Crime film</h6></div>
                <div className='grid-type'><h6>Animation</h6></div>
            </div>
            <button className='type-btn'><Link to='/home' style={{textDecoration:'none', color: 'white'}}>Continue</Link></button>

        </div>
    </div>

   </React.Fragment>
  )
}

export default Type
