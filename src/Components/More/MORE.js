import "./MORE.css";
import React,{useState} from "react";
import backArrowImage from './back.svg';
import { Link, useNavigate } from 'react-router-dom'; 
import SignoutPopup from './SignoutPopup';

const MORE = () => {
  const navigate = useNavigate();

  const handlesettings = () =>{
    navigate ('/settings')
  }
  const handleprivacy = () =>{
    navigate ('/privacy')
  }
  const handlelist = () =>{
    navigate ('/watchlist')
  }
  const handlehelp = () =>{
    navigate ('/help&support')
  }
  const [isLogoutPopupVisible, setLogoutPopupVisible] = useState(false);


  const toggleLogoutPopup = () => {
    setLogoutPopupVisible(!isLogoutPopupVisible);
  };

  const handleSignOut = () => {
    // Implement sign-out logic here
    // ...

    // Close the popup after sign-out
    setLogoutPopupVisible(false);
    // Redirect or perform additional actions upon logout if needed
  };
  return (
    <div>
    <div className="morex">
      <div className="div">
          <img
            className="back-arrow"
            alt="Back"
            src={backArrowImage} 
            onClick={() => {
              navigate('/home')
            }}
          />
      <div className="bars-home-indicator">
        <div className="background" />
        <div className="line" />
      </div>
      
      <div className="manage-profiles">
        <Link to="/profile">Edit</Link> 
      </div>
      <div className="thelma-parent">
        <div className="thelma">Thelma</div>
        <img className="frame-child" alt="" src="/rectangle-4@2x.png" />
      </div>
      <div className="kids-parent">
        <div className="kids">Kids</div>
        <img className="frame-item" alt="" src="/rectangle-5@2x.png" />
      </div>
      <div className="emenalo-parent">
        <div className="emenalo">Emenalo</div>
        <img className="frame-inner" alt="" src="/rectangle-2@2x.png" />
      </div>
      <div className="onyeka-parent">
        <div className="onyeka">Onyeka</div>
        <img className="rectangle-iconx" alt="" src="/rectangle-3@2x.png" />
      </div>
      {/* <img className="more-child" alt="" src="/group-82.svg" /> */}
      <div className="noto-v1check-mark-button-parent">
        
        <div className="my-list" onClick={handlelist}>My List</div>
      </div>
      <div className="help-parent">
        <Link to="/download" className="download">Download</Link>
        <Link to ="/notification" className="account">Notification</Link>
        <div className="help">Help</div>
        <div className="noto-v1check-mark-button-parent">
       
          <div className="policy" onClick={handleprivacy}>Privacy Policy</div>
      </div>
      <div className="noto-v1check-mark-button-parent">
        
        <div className="terms" onClick={handlehelp}>Help & Support</div>
      </div>
        <div className="noto-v1check-mark-button-parent">
        
        <div className="setting" onClick={handlesettings}>App Setting</div>
      </div>

      {/* Trigger SignoutPopup */}
      <div className="noto-v1check-mark-button-parent">
        <div className="logout" onClick={toggleLogoutPopup}>
          Log Out
        </div>
      </div>

      {/* SignoutPopup */}
      <SignoutPopup isOpen={isLogoutPopupVisible} onRequestClose={toggleLogoutPopup} />
    </div>

     
    </div>
      
        {/* <div className="cancelar-conta">App Setting</div>
        <div className="sign-out">Sign Out</div> */}
      </div>
      
      <div className="rectangle-parent">
        <div className="group-parent">
          z
          <div className="vector-parent">
         
        </div>
      </div> 
      </div>
    </div>
   
  );
};

export default MORE;
