import React, {useState} from 'react';
import './Signup.css';
import {Link} from 'react-router-dom';
import vector from './Vector.svg';
import slogo from './vlogo.jpg';



const Signup = () => {
  const [text, setText] = useState({

    uname : "",
    uemail : "",
    upassword : "",
   
  })
  const InputEvent = (e) => {
  
    const { value , name } = e.target;
  
    setText((preValue) => {
  
      return {
        ...preValue,
        [name] : value,
      }
    })
  };

  const handleGoogleLogin = () => {
   
  };
  return (
    <React.Fragment>
    <div className='signup-main'>
        <div className='signup-div'>

        <Link to='/'><img className="vectors" alt="Vector" src={vector} /></Link>   

            
<div className='Signuplogo'>
    <img src={slogo} alt='load' />
    <h4>Sumi</h4>     
</div>
<form className='formdatas'>
        <h2>Sign Up</h2>
        <label>Username</label>
        <input type='text'
         placeholder='Enter user name'
         name='uname'
         value={text.uname} 
         onChange={InputEvent}
         autoComplete='off'
         required/>
        <label>Email-Id</label>
        <input type='text'
         placeholder='Enter your email'
         name='uemail'
         value={text.uemail}
         onChange={InputEvent}
         autoComplete='off'
         required/>
        <label>Password</label>
        <input type='password' 
        placeholder='Enter your password'
        name='upassword' 
        value={text.upassword}
        onChange={InputEvent}
        autoComplete='off'
        required/>    
        <div className='nextbtn'><Link to='/signin'><button type='submit'>Next</button></Link></div>
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

export default Signup
