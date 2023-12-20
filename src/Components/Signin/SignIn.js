import React, { useState } from 'react';
import './Signin.css';
import slogo from './vlogo.jpg';
import { Link } from 'react-router-dom';
import vector from './Vector.svg';

const SignIn = () => {
  const [text, setText] = useState({
    uemail: "",
    upassword: "",
  });

  const InputEvent = (e) => {
    const { value, name } = e.target;
    setText((preValue) => {
      return {
        ...preValue,
        [name]: value,
      }
    })
  };

  const handleGoogleLogin = () => {
   
  };

  return (
    <React.Fragment>
      <div className='signin-main'>
        <div className='sign-div'>
          <Link to='/signup'><img className="vector" alt="Vector" src={vector} /></Link>
          <div className='logo'>
            <img src={slogo} alt='load' />
            <h4>Sumi</h4>
          </div>
          <form className='formdata'>
            <h2>Sign In</h2>
            <label>Email or Phone</label>
            <input
              type='text'
              placeholder='Enter your email'
              name='uemail'
              value={text.uemail}
              onChange={InputEvent}
              autoComplete='off'
              required
            />
            <label>Password</label>
            <input
              type='password'
              placeholder='Enter your password'
              name='upassword'
              value={text.upassword}
              onChange={InputEvent}
              autoComplete='off'
              required
            />
            <div className='fgpass'><h5>Forgot Password</h5></div>
            <div className='Continuebtn'>
              <Link to='/language'><button>Continue</button></Link>
            </div>
            <div>
              <h4>Don't have an account? <Link to='/signup' style={{ textDecoration: 'none' }}><span style={{ color: '#B71DDE' }}>Register Now</span></Link></h4>
            </div>
            <div className='google-login'>
              <div className='googl'>
            <i class="bi bi-google"></i>
            </div>
              <button onClick={handleGoogleLogin}>Login with Google</button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  )
}

export default SignIn;
