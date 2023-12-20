import React, { useState } from 'react';
import './StreamingQualityPopup.css';

const StreamingQualityPopup = ({ isOpen, onRequestClose }) => {
  const [selectedQuality, setSelectedQuality] = useState('');
  const [askQuality, setAskQuality] = useState(false);

  const handleSelection = (quality) => {
    setSelectedQuality(quality);
    setAskQuality(false);
    onRequestClose();
  };
  return (
    <div className={`streaming-quality-popup ${isOpen ? 'open' : ''}`}>
      <div className="streaming-quality-popup-content">
      <span className="modal-close" onClick={onRequestClose}>
              &times;
            </span>
        <h3>Select Streaming Quality</h3>
        <div className="streaming-quality-options">
          <div
            className={`streaming-quality-option ${selectedQuality === 'Full HD 1080p' ? 'selected' : ''}`}
            onClick={() => handleSelection('Full HD 1080p')}
          >
            Full HD 1080p
          </div>
          <div
            className={`streaming-quality-option ${selectedQuality === 'HD 720p' ? 'selected' : ''}`}
            onClick={() => handleSelection('HD 720p')}
          >
            HD 720p
          </div>
          <div
            className={`streaming-quality-option ${selectedQuality === 'Low 480p' ? 'selected' : ''}`}
            onClick={() => handleSelection('Low 480p')}
          >
            Low 480p
          </div>
          <div
            className={`streaming-quality-option ${selectedQuality === 'Auto' ? 'selected' : ''}`}
            onClick={() => handleSelection('Auto')}
          >
            Auto (Select For The Best Experience)
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreamingQualityPopup;
