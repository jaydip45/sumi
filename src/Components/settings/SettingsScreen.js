import React, { useState } from 'react';
import './SettingsScreen.css';
import backArrowImage from './back.svg';
import { Link, useNavigate } from 'react-router-dom';
import DownloadPopup from './DownloadPopup';
import StreamingQualityPopup from './StreamingQualityPopup'; 

const SettingsScreen = () => {
 
  const [isDownloadPopupOpen, setIsDownloadPopupOpen] = useState(false);
  const [isStreamingQualityPopupOpen, setIsStreamingQualityPopupOpen] = useState(false);
  const handleDownloadPreferencesClick = () => {
    setIsDownloadPopupOpen(true);
  };

  const handleStreamingQualityClick = () => {
    setIsStreamingQualityPopupOpen(true);
  };

  const closeDownloadPopup = () => {
    setIsDownloadPopupOpen(false);
  };

  const closeStreamingQualityPopup = () => {
    setIsStreamingQualityPopupOpen(false);
  };
  const navigate = useNavigate ();

  const handlemore = () =>{
    navigate('/more')
  }

  return (
    <div className="settings">
      <div className="div">
          <img
            className="back-arrow"
            alt="Back"
            src={backArrowImage}
            onClick={handlemore}
          />
          
        <div className="settings-container">
          <h2>Settings</h2>
          <div className="settings-links">
            <div className="setting-option" onClick={handleStreamingQualityClick}>
              Streaming quality options
            </div>
            <div className="setting-option" onClick={handleDownloadPreferencesClick}>
              Download preferences
            </div>
          
            <Link to="/parentcontrol" className="setting-option-link">
              Parental Controls
            </Link>
          </div>
        </div>
      </div>

      {isDownloadPopupOpen && (
        <DownloadPopup
          isOpen={isDownloadPopupOpen}
          onRequestClose={closeDownloadPopup}
        />
      )}

      {isStreamingQualityPopupOpen && (
        <StreamingQualityPopup
          isOpen={isStreamingQualityPopupOpen}
          onRequestClose={closeStreamingQualityPopup}
        />
      )}
    </div>
  );
};

export default SettingsScreen;
