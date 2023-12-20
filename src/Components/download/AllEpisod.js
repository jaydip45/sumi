import React ,{useState}from 'react'
import backArrowImage from './back.svg';
import './AllEpisod.css'
import { useNavigate } from 'react-router-dom';

const   AllEpisod = () => {
  const navigate = useNavigate();

  const [watchlist, setWatchlist] = useState([
    { id: 1, title: 'E1 S1' },
    { id: 1, title: 'E2 S1' },
    { id: 1, title: 'E3 S1' },
    
  ]);

  const allepisod = (id) => {
    const updatedWatchlist = watchlist.filter((item) => item.id !== id);
    setWatchlist(updatedWatchlist);
  };
  return (
    <div>
      <div className='listed'>
        <div className='divide'>
        <img
            className="back-arrow"
            alt="Back"
            src={backArrowImage} 
            onClick={() => {
              navigate('/download')
            }}
          />
          <div className="watched-screen">
            <h2>Nagin</h2>
            <div className="watchlisted">
              {watchlist.map((item) => (
                <div className="watchlisted-item" key={item.id}>
                  <div className="card1">
                    <div className="card-contented">
                      <span>{item.title}</span>
                        <button className='removed' onClick={() => allepisod(item.id)}>{">"}</button>
                                                                                                                         
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllEpisod
