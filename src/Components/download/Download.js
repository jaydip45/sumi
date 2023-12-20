import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import backArrowImage from './back.svg';


const Download = () => {
  const navigate = useNavigate();

 
  const [watchlist, setWatchlist] = useState([
    { id: 1, title: 'Nagin ' },
    // { id: 2, title: 'Movie 2' },
    // { id: 3, title: 'TV Show 1' },
    // Add more items as needed
  ]);

  const allepisod = (id) => {
    const updatedWatchlist = watchlist.filter((item) => item.id !== id);
    setWatchlist(updatedWatchlist);
  };

  return (
    <div>
      <div className='list'>
        <div className='div'>
        <img
            className="back-arrow"
            alt="Back"
            src={backArrowImage} 
            onClick={() => {
              navigate('/more')
            }}
          />
          <div className="watchlist-screen">
            <h2>Downloads</h2>
            <div className="watchlist">
              {watchlist.map((item) => (
                <div className="watchlist-item" key={item.id}>
                  <div className="card">
                    <div className="card-content">
                      <span>{item.title}</span>
                      <Link to="/allepisode">
                        <button className='remove' onClick={() => allepisod(item.id)}>{">"}</button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;