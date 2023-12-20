import React from 'react';
import backArrowImage from './back.svg';
import './SubscriptionPlans.css'; // CSS file for styling
import { useNavigate } from 'react-router-dom';

const SubscriptionPlans = () => {
  const navigate = useNavigate ();

    const handlePlanSelection = (plan) => {
        // Handle plan selection here (e.g., redirect to payment page, set selected plan in state, etc.)
        console.log(`Selected plan: ${plan}`);
      };
      const handlepayment = () =>{
        navigate ('/payment')
      }
      const handlehome = () =>{
        navigate ('/home')
      }
  const plansData = [
    {
      name: 'Super',
      price: '$1/month',
      allContentAccess: true,
      watchOnTvOrLaptop: true,
      adFreeMovies: false,
      devices: 1,
    },
    {
      name: 'Super + Ad Free',
      price: '$2/month',
      allContentAccess: true,
      watchOnTvOrLaptop: true,
      adFreeMovies: true,
      devices: 2,
    },
    {
      name: 'Premium',
      price: '$3/month',
      allContentAccess: true,
      watchOnTvOrLaptop: true,
      adFreeMovies: true,
      devices: 2,
    },
  ];

  return (
    <div className="subscription">
        <div className="div">
        <img
            className="back-arrow"
            alt="Back"
            src={backArrowImage}
            onClick={handlehome}
          />
    <div className="subscription-plans">
        <h1>Upgrade Your --- Subsciption</h1>
      <table className="subscription-table">
        <thead>
          <tr>
            <th>Features</th>
            {plansData.map((plan) => (
              <th key={plan.name}>
                {plan.name} <br />
                ({plan.price})
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>All Content Access</td>
            {plansData.map((plan) => (
              <td key={plan.name}>{plan.allContentAccess ? '✓' : '❌'}</td>
            ))}
          </tr>
          <tr>
            <td>Watch on TV or Laptop</td>
            {plansData.map((plan) => (
              <td key={plan.name}>{plan.watchOnTvOrLaptop ? '✓' : '❌'}</td>
            ))}
          </tr>
          <tr>
            <td>Ad-Free Movies</td>
            {plansData.map((plan) => (
              <td key={plan.name}>{plan.adFreeMovies ? '✓' : '❌'}</td>
            ))}
          </tr>
          <tr>
            <td>No. of Devices</td>
            {plansData.map((plan) => (
              <td key={plan.name}>{plan.devices}</td>
            ))}
          </tr>
        </tbody>
      </table>
   
    <div className="subscription-buttons">
        <button className = "S-button" onClick={() => handlePlanSelection('Super')}>
        Super  <p className='pre'>$1/month</p>
        </button>
        <button className = "S-button" onClick={() => handlePlanSelection('Super + Ad Free')}>
        Super + Ad Free  <p className='do'>$2/month</p>
        </button>
        <button className = "S-button" onClick={() => handlePlanSelection('Premium')}>
        Premium  <p className='pre'>$3/month</p>
        </button>
      </div>
      <button className="upgrade-button" onClick={handlepayment}>Upgrade Now</button>
    </div>
    </div>
    </div>
  );
};

export default SubscriptionPlans;

