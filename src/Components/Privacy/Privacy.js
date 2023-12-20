import React from 'react'
import './Privacy.css'
import { useNavigate } from 'react-router-dom';


const Privacy = () => {
  const navigate = useNavigate();
  const handlemore = () => {
    navigate('/more'); 
  };
  return (
    <div className="profile-4">
      <div className='div'>
      <div className="top-left">
          
          </div>
    <div className="top">
      <div className="status-bar">
        <img className="notch-icon" alt="" src="/notch.svg" />
        <div className="status-icons">
          <img className="battery-light" alt="" src="/battery--light.svg" />
        </div>
        <img className="indicator-icon" alt="" src="/notch.svg" />
        <img className="time-light" alt="" src="/time--light.svg" />
      </div>
      {/* <div className="home-indicator">
        <div className="bar">
          <div className="base" />
        </div>
      </div> */}
    </div>
    <div className="privacy-policy-wrapper">
      <div className="privacy-policy">Privacy Policy</div>
    </div>
    <div className="headerx">
      <img
        className="linesystemarrow-left-line-icon"
        alt=""
        src="/linesystemarrowleftline.svg"
        onClick={handlemore}
      />
      <div className="types-data-we">1. Types data we collect</div>
      <div className="lorem-ipsum-dolor-container">
        <p className="lorem-ipsum-dolor">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `}</p>
        <p className="lorem-ipsum-dolor">&nbsp;</p>
        <p className="lorem-ipsum-dolor">
          Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident.
        </p>
      </div>
      <div className="sed-ut-perspiciatis-container">
        <p className="lorem-ipsum-dolor">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae.
        </p>
        <p className="lorem-ipsum-dolor">&nbsp;</p>
        <p className="lorem-ipsum-dolor">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit.
        </p>
      </div>
      <div className="at-vero-eos-container">
        <p className="lorem-ipsum-dolor">{`At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. `}</p>
        <p className="lorem-ipsum-dolor">&nbsp;</p>
        <p className="lorem-ipsum-dolor">{`Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. `}</p>
        <p className="lorem-ipsum-dolor">&nbsp;</p>
       
      </div>
      <div className="use-of-your">2. Use of your personal data</div>
      <div className="disclosure-of-your">
        3. Disclosure of your personal data
      </div>
    </div>
    </div>
  </div>
);
};

    

export default Privacy;
