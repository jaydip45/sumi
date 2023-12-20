import React from 'react'
import './Payment2.css'
import { useNavigate } from 'react-router-dom'
const Payment2 = () => {
    const navigate = useNavigate();

  const handlepayment = () =>{
    navigate ('/payment3')
  }

  const handlepay = () =>{
    navigate ('/payment')
  }
  return (
    <div className='main-payment2'>
    <div className='payment2-div'>
    <div className="payment-screen1">
    <div className="navigation-default-icons">
      <img className="background-icon" alt="" src="/background.svg" />
      <div className="bars-navigation-r-glyp">
        <img className="popularplus-icon" alt="" src="/popularplus.svg" />
        <i className="label">Label</i>
      </div>
      <div className="center">
        <div className="title">Payment Methods</div>
      </div>
      <img
        className="bars-navigation-l-glyp"
        alt=""
        src="/bars--navigation---l--glyph.svg"
      onClick={handlepay}/>
      <div className="status-default-white">
        <div className="action">
          <div className="time">9:41</div>
        </div>
        <img className="container-icon" alt="" src="/background.svg" />
      </div>
      {/* <div className="status-default-black">
        <div className="action">
          <div className="time1">9:41</div>
        </div>
        <img className="container-icon1" alt="" src="/container.svg" />
      </div> */}
    </div>
    <div className="ecommerce-card" onClick={handlepayment}>
      <div className="rectangle" />
      <div className="line" />
      <img
        className="chevronschevron-right-icon"
        alt=""
        src="/chevronschevronright.svg"
      />
      <div className="mastercard">Visa</div>
      <img className="money-visa" alt="" src="/money--visa.svg" />
    </div>
    <div className="post-32" onClick={handlepayment}>
      <div className="rectangle" />
      <div className="line" />
      <img
        className="chevronschevron-right-icon"
        alt=""
        src="/chevronschevronright.svg"
      />
      <div className="mastercard">MasterCard</div>
      <img className="money-visa" alt="" src="/money--mastercard.svg" />
    </div>
    <div className="post-33" onClick={handlepayment}>
      <div className="rectangle" />
      <div className="line" />
      <img
        className="chevronschevron-right-icon"
        alt=""
        src="/chevronschevronright.svg"
      />
      <div className="american-express">American Express</div>
      <img className="money-visa" alt="" src="/money--amex.svg" />
    </div>
    <div className="post-34" onClick={handlepayment}>
      <div className="rectangle" />
      <div className="line" />
      <img
        className="chevronschevron-right-icon"
        alt=""
        src="/chevronschevronright.svg"
      />
      <div className="mastercard">PayPal</div>
      <img className="money-visa" alt="" src="/money--paypal.svg" />
    </div>
    <div className="post-35" onClick={handlepayment}>
      <div className="rectangle" />
      <div className="line" />
      <img
        className="chevronschevron-right-icon"
        alt=""
        src="/chevronschevronright.svg"
      />
      <div className="mastercard">Diners</div>
      <img className="money-visa" alt="" src="/money--diners.svg" />
    </div>
  </div>
  </div>
  </div>
  )
}

export default Payment2