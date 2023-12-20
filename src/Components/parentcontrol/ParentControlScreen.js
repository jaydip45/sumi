import React, { useState } from 'react';
import backArrowImage from './back.svg'
import './ParentControlScreen.css'; // Import your CSS file
import { useNavigate } from 'react-router-dom';

const ParentalControlScreen = () => {
  const [pinSet, setPinSet] = useState(false);
  const [pinValue, setPinValue] = useState('');
  const [contentRestriction, setContentRestriction] = useState(false);

  const navigate = useNavigate();

  const handlePinSetup = () => {
    setPinSet(true);
  };

  const toggleContentRestriction = () => {
    setContentRestriction((prev) => !prev);
  };

  const handlePinInput = (digit) => {
    // Append digit to the pinValue
    const updatedPin = pinValue + digit;
    setPinValue(updatedPin);
  };

  const clearPinInput = () => {
    setPinValue('');
  };

  const handleSubmitPin = () => {
    // Handle pin submission here (if needed)
    console.log('Submitted PIN:', pinValue);
    setPinSet(false); // Hide the PIN dialer after submitting
    // alert('PIN has been set!');
  };

  return (
    <div className='parentC'>
      <div className='div'>
      <div className="top-left">
          <img
            className="back-arrow"
            alt="Back"
            src={backArrowImage} 
            onClick={() => {
              navigate('/settings')
            }}
          />
        </div>
        <div className="parental-control-container">
          <h2>Parental Control Screen</h2>
          <div className="parental-control-list">
            <div>
              <label>
                Content Rating Restrictions
                <input
                  type="checkbox"
                  checked={contentRestriction}
                  onChange={toggleContentRestriction}
                />
              </label>
            </div>
            {!pinSet ? (
              <div onClick={handlePinSetup}>PIN Setup</div>
            ) : (
              <div>PIN Set: {pinValue}</div>
            )}
          </div>
        </div>

        {/* PIN Dialer */}
        {pinSet && (
          <div className="pin-dialer">
            <input type="password" value={pinValue} disabled />
            <div className="keypad">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 'Clear', 0, 'Submit'].map((digit) => (
                <div
                  key={digit}
                  className={`key ${digit === 'Clear' || digit === 'Submit' ? digit.toLowerCase() : ''}`}
                  onClick={() => {
                    if (digit === 'Clear') {
                      clearPinInput();
                    } else if (digit === 'Submit') {
                      handleSubmitPin();
                    } else {
                      handlePinInput(digit);
                    }
                  }}
                >
                  {digit}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ParentalControlScreen;
