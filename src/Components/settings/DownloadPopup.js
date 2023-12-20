import React, { useState } from 'react';
import './DownloadPopup.css'; // Style this file for your popup

const DownloadPopup = ({ isOpen, onRequestClose }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [askQuality, setAskQuality] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setAskQuality(false);
    onRequestClose(); // Close modal on quality selection
  };

 

  return (
    <div>
      {isOpen && (
        <div className="custom-modal-overlay">
          <div className="custom-modal-content1">
            <span className="modal-close" onClick={onRequestClose}>
              &times;
            </span>
            <h4>Select Quality For Download</h4>
            <div className="options">
              <div
                className={`option ${selectedOption === 'high' ? 'selected' : ''}`}
                onClick={() => handleOptionSelect('high')}
              >
                High 1080p
              </div>
              <div
                className={`option ${selectedOption === 'hd' ? 'selected' : ''}`}
                onClick={() => handleOptionSelect('hd')}
              >
                HD 720p
              </div>
              <div
                className={`option ${selectedOption === 'low' ? 'selected' : ''}`}
                onClick={() => handleOptionSelect('low')}
              >
                Low 480p
              </div>
              <div
                className={`option ${selectedOption === 'askeachtime' ? 'selected' : ''}`}
                onClick={() => handleOptionSelect('askeachtime')}
              >
                ask each time before Download
              </div>
             
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DownloadPopup;
