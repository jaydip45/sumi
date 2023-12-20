import React,{useState} from 'react'
import './Payment3.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'

const Payment3 = () => {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const navigate = useNavigate();
  const handlepayment = () => {
    navigate('/payment2');
  };

  const handleCheckboxChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
    // Add logic here to handle checkbox state change
  };
  const showToastMessage = () => {
    toast.success("Payment Successful", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <div className='main-payment3'>
    <div className='payment3-div'>
  <div className="payment-screen">
  <div className="navigation-default-icons">
    <img className="background-icon" alt="" src="/background.svg" />
    <div className="bars-navigation-r-glyp">
      <img className="popularplus-icon" alt="" src="/background.svg" />
      <i className="label">Label</i>
    </div>
    <div className="center">
      <div className="title">Add Payment Methods</div>
    </div>
    <img
      className="bars-navigation-l-glyp"
      alt=""
      src="/bars--navigation---l--glyph.svg"
   onClick={handlepayment} />
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
  <div className="add-a-new-credit-card">
    <div className="or-4-digits">
      3 or 4 digits usually found on the signature strip
    </div>
    <div type='text' className="text-inputs-placeholder">
      <input className="rect" placeholder='Enter Your Name'/>
      <div type='text' className="name-on-card"></div>
    </div>
    <div className="selects-placeholder">
      <select className="rect" >
      <option value="">Select a month</option>
    <option value="January">January</option>
    <option value="February">February</option>
    <option value="March">March</option>
    <option value="April">April</option>
    <option value="May">May</option>
    <option value="June">June</option>
    <option value="July">July</option>
    <option value="August">August</option>
    <option value="September">September</option>
    <option value="October">October</option>
    <option value="November">November</option>
    <option value="December">December</option>
    </select>
    </div>
    <div className="selects-placeholder1">
      <select className="rect">
      <option value="">Select a year</option>
        
          {Array.from({ length: 9 }, (_, index) => {
            const year = 2022 + index;
            return (
              <option key={year} value={year}>
                {year}
              </option>
            );
          })}
        </select>
    </div>
    <div className="text-inputs-placeholder1">
      <input type='number' className="rect" placeholder='enter number'/>
    </div>
    <div className="text-inputs-placeholder2">
      <input type='number' className="rect" placeholder='CVC'>
        </input>
    </div>
    <div className="normal-primary">
      <button onClick={showToastMessage} className="add-now">Pay Now</button>
      <ToastContainer />
    </div>
   <div className="set-as-default">
        <input
          type="checkbox"
          className="checkbox"
          checked={isCheckboxChecked}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="checkbox" className="checkbox-label">
          SET AS DEFAULT
        </label>
      </div>
  </div>
</div>
</div>
</div>

      )
}

export default Payment3