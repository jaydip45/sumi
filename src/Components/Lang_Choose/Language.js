import React from 'react';
import {Link} from 'react-router-dom';
import './Language.css';
import vector from './Vector.svg';
import slogo from './vlogo.jpg';



const Language = () => {
  return (


    <React.Fragment>
    <div className='main-language'>
        <div className='lang-div'>
        <Link to='/signin'><img className="vector_l" alt="Vector" src={vector} /></Link>   
        <div className='logo_l'>
                <img src={slogo} alt='load' />
                <h4>Sumi</h4>     
            </div>
            <div className='description'>Choose Your Favourite Language</div>
            <div className='choose_languages'>
                <div className='grid-lang'><h6>Español</h6></div>
                <div className='grid-lang'><h6>English</h6></div>
                <div className='grid-lang'><h6>தமிழ்</h6></div>
                <div className='grid-lang'><h6>हिन्दी</h6></div>
                <div className='grid-lang'><h6>മലയാളം</h6></div>
                <div className='grid-lang'><h6>বাংলা</h6></div>
                <div className='grid-lang'><h6>français</h6></div>
                <div className='grid-lang'><h6>ಕನ್ನಡ</h6></div>
            </div>
            <button className='lang-btn'><Link to='/type' style={{textDecoration:'none', color: 'white'}}>Continue</Link></button>

        </div>
    </div>

   </React.Fragment>

   
  )
}

export default Language
