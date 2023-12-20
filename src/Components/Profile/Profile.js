import React , {useState} from 'react'
import './Profile.css';
import {Link} from 'react-router-dom';
import vector from './Vector.svg';
import plogo from './vlogo.jpg';
import camera from './camera.svg';

const myStyle = {
    width: '10px',
    height: '10px',
    flexShrink: '0',
    position:'absolute', 
    top:'52px',
    left:'55px', 
    backgroundColor:'white',
    borderRadius:'50%', 
    padding:'2px',
    cursor:'pointer'

}


const Profile = () => {
    const [text, setText] = useState({

        name : "",
        dob : "",
        gender : "",
        num : "",
        emails : "",
        
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
  return (
    <React.Fragment>
    <div className='main-profile'>
        <div className='profile-div'>
        <Link to='/home'><img className="vector_p" alt="Vector" src={vector} /></Link>   
        <div className='logo_p'>
                <img src={plogo} alt='load' />
                <h4>Sumi</h4>     
            </div>

            <div className='profile'>
                <img src={camera} alt="load" style={myStyle} />
            </div>
            <form className='profile_Details'>
       <h4>Basic Detail</h4>
        <label>Full Name</label>
        <input type='text' 
        placeholder='Enter your name' 
        name='name' 
        value={text.name}
        onChange={InputEvent}
        autoComplete='off'
        required/>
        <label>Date of Birth</label>
        <input type='date' 
         name='dob' 
         value={text.dob}
         onChange={InputEvent}
         autoComplete='off'
        required/>
        <label>Gender</label>
        <select value={text.gender} name='gender' onChange={InputEvent} required>
                 <option value="male" key="male">Male</option>
                 <option value="female" key="female">Female</option>
                 <option value="other" key="other">Other</option>
                 
             </select>
             {/* <h4 className='contact_D'>Contact Detail</h4> */}
        <label>Mobile Number</label>
        <input type='text' 
        placeholder='Enter your number' 
        name='num' 
        value={text.num}
        onChange={InputEvent}
        autoComplete='off'
        required/>
        <label>Email </label>
        <input type='text' 
        placeholder='Enter your email' 
        name='emails' 
        value={text.emails}
        onChange={InputEvent}
        autoComplete='off'
        required/>
             
        <div className='nextbtn'><Link to='/signin'><button>Save</button></Link></div>
    </form>
          
        </div>
    </div>

   </React.Fragment>
  )
}

export default Profile
