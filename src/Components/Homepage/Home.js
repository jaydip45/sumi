import React, { useState, useEffect }  from 'react';
import './Home.css';
import vector from './Vector.svg';
import hlogo from './vlogo.jpg';
import {Link} from 'react-router-dom';
import Carousel from './Carousel';
import { countries } from './Data';



const Home = () => {  
  return (
    <React.Fragment>
    <div className='main-home'>
        <div className='home-div'>
        <Link to='/type'><img className="vector_h" alt="Vector" src={vector} /></Link>   
        <div className='logo_h'>
                <img src={hlogo} alt='load' />
                <h4>ViewFlicks</h4>     
            </div>

            <Carousel images={countries} />
           
            

          

            </div>
            </div>
  </React.Fragment>
   
  )
}

export default Home
