import React, { useState } from 'react';
import backArrowImage from './back.svg';
import './WatchlistScreen.css';
import { useNavigate } from 'react-router-dom';

const WatchlistScreen = () => {

const navigate = useNavigate();

const handlemore = () =>{
  navigate("/more")
}

  const [watchlist, setWatchlist] = useState([
    { id: 1, title: 'Sultan' },
    { id: 2, title: 'Stranger Things' },
    { id: 3, title: 'Tamasha' },
    // Add more items as needed
  ]);

  const removeFromWatchlist = (id) => {
    const updatedWatchlist = watchlist.filter((item) => item.id !== id);
    setWatchlist(updatedWatchlist);
  };

  return (
    <div className='list'>
<div className='div'>
          <img
            className="back-arrow"
            alt="Back"
            src={backArrowImage} 
            onClick={handlemore}
          />
    <div className="watchlist-screen">
      <h2>My Watchlist</h2>
      <div className="watchlist">
        {watchlist.map((item) => (
          <div className="watchlist-item" key={item.id}>
            <div className="card">
              <div className="card-content">
                <span>{item.title}</span>
                <button className='remove' onClick={() => removeFromWatchlist(item.id)}>-</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  );
};

export default WatchlistScreen;



