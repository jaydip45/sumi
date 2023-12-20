import React, { useState } from 'react';
import './RatingReviewComponent.css';
import backArrowImage from './back.svg';
import { useNavigate } from 'react-router-dom';


const RatingReviewComponent = () => {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleRating = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleReviewText = (event) => {
    setReviewText(event.target.value);
  };

  const handleSubmit = () => {
    // Handle submission logic
    setRating(0);
    setReviewText('');
    togglePopup(); // Close the popup after submission (optional)
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  const navigate = useNavigate ();
  const handlerating = () => {
    navigate('/help&support')
  }

  return (
    <div className="ratings">
      <div className='div'>
      <img
            className="back-arrow"
            alt="Back"
            src={backArrowImage} 
            onClick={handlerating}
          />
      <div className="rating-review-section">
        <h2>Rating and Feedback</h2>
        <button onClick={togglePopup}>Send Your Feedback</button>
        {isPopupOpen && (
          <div className="streaming-quality-popup">
            <div className="rating-quality-popup-content">
              <span className="modal-close" onClick={togglePopup}>
                &times;
              </span>
              <div className="rating-popup">
                <p>Rate Our Application :</p>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={star <= rating ? 'selected' : 'unselected'}
                    onClick={() => handleRating(star)}
                  >
                    ☆
                  </span>
                ))}
              </div>
              <div className="review-entry">
                <p className="write">Give Your Feedback:</p>
                <textarea
                  className="review-text"
                  rows="4"
                  cols="50"
                  placeholder="Enter your feedback here..."
                  value={reviewText}
                  onChange={handleReviewText}
                ></textarea>
              </div>
              <button className="submit-button" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default RatingReviewComponent;
