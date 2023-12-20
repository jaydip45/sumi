import { useNavigate } from "react-router-dom";
import "./SEARCH.css";
import backArrowImage from './back.svg';


const SEARCH = () => {
  const navigate = useNavigate();
  const handlecontent = ()=>{
    navigate('/contentdetail')
  }
  const handlehome = ()=>{
    navigate('/home')
  }
  return (
    <div className="search">
      <div className="div">
      <div className="top-leftx">
          <img
            className="back-arrow"
            alt="Back"
            src={backArrowImage} 
            onClick={handlehome}
          />
          </div>
     
      <b className="top-searches">People Search for</b>
      <div className="group-parent">
        <div className="rectangle-parent">
          <div className="group-child" />
          <img className="group-itemx" alt="" src="/rectangle-21@2x.png" />
        </div>
        <div className="bxbx-play-circle-parent">
          <img
            className="bxbx-play-circle-icon"
            alt=""
            src="/bxbxplaycircle.svg"
            onClick={handlecontent}
          />
          <div className="the-setup">The Setup</div>
        </div>
      </div>
      <div className="group-container">
        <div className="rectangle-parent">
          <div className="group-child" />
          <img className="group-itemx" alt="" src="/rectangle-211@2x.png" />
        </div>
        <div className="bxbx-play-circle-parent">
          <img
            className="bxbx-play-circle-icon"
            alt=""
            src="/bxbxplaycircle.svg"
            onClick={handlecontent}
          />
          <div className="your-excellency">Your Excellency</div>
        </div>
      </div>
      <div className="group-div">
        <div className="rectangle-parent">
          <div className="group-child" />
          <img className="group-itemx" alt="" src="/rectangle-22@2x.png" />
        </div>
        <div className="bxbx-play-circle-parent">
          <img
            className="bxbx-play-circle-icon"
            alt=""
            src="/bxbxplaycircle.svg"
            onClick={handlecontent}
          />
          <div className="your-excellency">The Governor</div>
        </div>
      </div>
      <div className="group-parent1">
        <div className="rectangle-parent">
          <div className="group-child" />
          <img className="group-itemx" alt="" src="/rectangle-221@2x.png" />
        </div>
        <div className="bxbx-play-circle-parent">
          <img
            className="bxbx-play-circle-icon"
            alt=""
            src="/bxbxplaycircle.svg"
            onClick={handlecontent}
          />
          <div className="your-excellency">Breaking Bad</div>
        </div>
      </div>
      <div className="rectangle-parent2">
        <div className="group-child4" />
        <div className="group-parent2">
          <div className="feathersearch-parent">
            <img
              className="feathersearch-icon"
              alt=""
              src="/feathersearch.svg"
            />
            <div className="home">Search</div>
          </div>
          <div className="vector-parent">
            <img className="vector-icon" alt="" src="/vector.svg" />
            <div className="coming-soon">Coming Soon</div>
          </div>
          <div className="vector-group">
            <img className="vector-icon1" alt="" src="/vector1.svg" />
            <div className="more">More</div>
          </div>
          <div className="home-parent">
            <div className="home">Home</div>
            <img
              className="line-mdhome-simple-icon"
              alt=""
              src="/linemdhomesimple.svg"
            />
          </div>
          <div className="downloads-parent">
            <div className="home">Downloads</div>
            <img className="fedownload-icon" alt="" src="/fedownload.svg" />
          </div>
        </div>
      </div>
      <div className="rectangle-parent3">
        <div className="group-child5" />
        <div className="search-for-a-show-movie-genr-parent">
          <input className="search-for-a">
          </input>
          <img
            className="ant-designsearch-outlined-icon"
            alt=""
            src="/antdesignsearchoutlined.svg"
          />
          <img
            className="icbaseline-mic-icon"
            alt=""
            src="/icbaselinemic.svg"
          />
        </div>
      </div>
      <div className="ellipse-parent">
        <div className="instance-child" />
        <div className="div">4</div>
      </div>
      </div>
    </div>
  );
};

export default SEARCH;
