import "./PaymentScreen.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
 

const PaymentScreen = () => {
  const navigate = useNavigate();

  const handlepayment = () =>{
    navigate ('/payment2')
  }
  const handlepay = () =>{
    navigate ('/subscription')
  }
  return (
    <div className='main-payment1'>
    <div className='payment1-div'>
    <div className="payment-screenx">
      <div className="navigation-default-icons">
        <img className="background-icon" alt="" src="/background.svg" />
        <div className="bars-navigation-r-glyp">
  
    <img className="popularplus-icon"  alt="" src="/background.svg" onClick={handlepayment}/>
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
      <i className="description">
        You can add and edit payments during checkout
      </i>
      <div className="title1">No Payment Found</div>
      <div className="rectangle-parent">
        <div className="group-child" onClick={handlepayment}/>
        <div className="add-payment-method">Add Payment</div>
        <img
          className="popularplus-circle-icon"
          alt=""
          src="/popularpluscircle.svg"
          onClick={handlepayment}
        />
      </div>
    </div>
    </div>
    </div>
  );
};

export default PaymentScreen;