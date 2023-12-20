import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './HelpSupportScreen.css'; 
import backArrowImage from './back.svg'
import { Link, useNavigate } from 'react-router-dom';

const HelpSupport = () => {
  const navigate = useNavigate();

    const [faqData, setFaqData] = useState([
        { question: 'Question 1?', answer: 'Answer to Question 1.' },
        { question: 'Question 2?', answer: 'Answer to Question 2.' },
      ]);
    
      const [selectedQuestion, setSelectedQuestion] = useState(null);
    
      const handleQuestionClick = (index) => {
        if (selectedQuestion === index) {
          setSelectedQuestion(null);
        } else {
          setSelectedQuestion(index);
        }
      };
  return (
    <div className='help'>
        <div className='div'>
        <img
            className="back-arrow"
            alt="Back"
            src={backArrowImage} 
            onClick={() => {
              navigate('/more')
            }}
          />
    <div className="help-support">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-section">
            {faqData.map((faq, index) => (
              <div key={index} className="faq-question">
                <div
                  className="question-header"
                  onClick={() => handleQuestionClick(index)}
                >
                  <h3>{faq.question}</h3>
                  <span className="arrow">{selectedQuestion === index ? '▲' : '▼'}</span>
                </div>
                {selectedQuestion === index && (
                  <p className="answer">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>

      <h2>Contact Support</h2>
      <div className="contact-options">
      <p><i class="bi bi-geo-alt-fill"></i> : 409, Akik Tower, Nr. Pakwan Restaurant,Opp. Rajpath Club, Bodakdev, Ahmedabad, Gujarat, India - 380054</p>
 <p><i class="bi bi-telephone"></i> : +91-8866802333</p>
 <p><i class="bi bi-envelope"></i> : info@mxicoders.com</p>
      </div>

      <Link to= '/ratings'> <button className="feedback-form">
       Your Feedback
      </button></Link>
    </div>
             
    </div>
    </div>
  );
};

export default HelpSupport;
