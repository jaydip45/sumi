import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const handleSubscribe = () => {
    navigate('/subscription'); 
  };
  const handleSearch = () => {
    navigate('/search');
  };
  const handleprofile = () => {
    navigate('/profile');
  };
  const handlemore = () => {
    navigate('/more');
  };
  const handlehome = () => {
    navigate('/home');
  };
  const handlecontent = () => {
    navigate('/contentdetail')
  }
  const handlenot = () => {
    navigate('/notification');
  };
  
  return (
    <div className="index">
      <div className="div">
       {/* <button className="subscribe-button" onClick={handleSubscribe}>Subscribe</button> */}
        <div className="overlap-group">
          <div className="rectangle" />
          <div className="ellipse" />
          <div className="ellipse-2" />
          <div className="ellipse-3" />
          <div className="rectangle-2" />
          <div className="rectangle-3" />
          <img
            className="group"
            alt="Group"
            src="https://cdn.animaapp.com/projects/652662397dbc3c11cdf94f35/releases/65604ffc0766bf3af8d25a34/img/group-9@2x.png"
          />
          <img
            className="img"
            alt="Group"
            src="https://cdn.animaapp.com/projects/652662397dbc3c11cdf94f35/releases/65604ffc0766bf3af8d25a34/img/group-38@2x.png"
          />
          <img
            className="group-2"
            alt="Group"
            src="https://cdn.animaapp.com/projects/652662397dbc3c11cdf94f35/releases/65604ffc0766bf3af8d25a34/img/group-19@2x.png"
          />
          <div className="rectangle-4" onClick={handleprofile}/>
          <div className="group-3">
            <div className="ellipse-4" />
            <div className="ellipse-5" />
            <div className="ellipse-6" />
            <div className="ellipse-7" />
            <div className="ellipse-8" />
            <div className="ellipse-9" />
            <div className="ellipse-10" />
          </div>
          <div className="text-wrapper">Countinue Watching For User</div>
          <div className="text-wrapper-2">Latest Releases</div>
          <div className="text-wrapper-3">Popular Shows</div>
          <div className="text-wrapper-4">Top 10</div>
          <div className="rectangle-5"/>
          <img
            className="group-4"
            alt="Group"
            src="https://cdn.animaapp.com/projects/652662397dbc3c11cdf94f35/releases/65604ffc0766bf3af8d25a34/img/group-1@2x.png"
            onClick={handleSearch}/>
          <div className="rectangle-6" onClick={handlecontent}/>
          <div className="rectangle-7" onClick={handlecontent}/>
          <div className="rectangle-8" onClick={handlecontent}/>
          <div className="rectangle-9" onClick={handlecontent}/>
          <div className="rectangle-10" />
          <div className="rectangle-11" />
          <div className="rectangle-12" />
          <div className="rectangle-13" />
          <div className="rectangle-14" />
          <div className="rectangle-15" />
          <div className="rectangle-16" />
          <div className="rectangle-17" />
          <div className="rectangle-18" />
          <div className="rectangle-19" />
          <img
            className="group-5"
            alt="Group"
            src="https://cdn.animaapp.com/projects/652662397dbc3c11cdf94f35/releases/65604ffc0766bf3af8d25a34/img/group-9@2x.png"
          />
          <img
            className="group-6"
            alt="Group"
            src="https://cdn.animaapp.com/projects/652662397dbc3c11cdf94f35/releases/65604ffc0766bf3af8d25a34/img/group-21@2x.png"
          />
          <img
            className="group-7"
            alt="Group"
            src="https://cdn.animaapp.com/projects/652662397dbc3c11cdf94f35/releases/65604ffc0766bf3af8d25a34/img/group-21@2x.png"
          />
          <img
            className="group-8"
            alt="Group"
            src="https://cdn.animaapp.com/projects/652662397dbc3c11cdf94f35/releases/65604ffc0766bf3af8d25a34/img/group-21@2x.png"
          />
          <img
            className="group-9"
            alt="Group"
            src="https://cdn.animaapp.com/projects/652662397dbc3c11cdf94f35/releases/65604ffc0766bf3af8d25a34/img/group-21@2x.png"
          />
          <img
            className="group-10"
            alt="Group"
            src="https://cdn.animaapp.com/projects/652662397dbc3c11cdf94f35/releases/65604ffc0766bf3af8d25a34/img/group-9@2x.png"
          />
          <img
            className="group-11"
            alt="Group"
            src="https://cdn.animaapp.com/projects/652662397dbc3c11cdf94f35/releases/65604ffc0766bf3af8d25a34/img/group-9@2x.png"
          />
          <img
            className="group-12"
            alt="Group"
            src="https://cdn.animaapp.com/projects/652662397dbc3c11cdf94f35/releases/65604ffc0766bf3af8d25a34/img/group-9@2x.png"
          />
          <img
            className="group-13"
            alt="Group"
            src="https://cdn.animaapp.com/projects/652662397dbc3c11cdf94f35/releases/65604ffc0766bf3af8d25a34/img/group-9@2x.png"
          />
          <img
            className="group-14"
            alt="Group"
            src="https://cdn.animaapp.com/projects/652662397dbc3c11cdf94f35/releases/65604ffc0766bf3af8d25a34/img/group-9@2x.png"
          />
          <img
            className="line"
            alt="Line"
            src="https://cdn.animaapp.com/projects/652662397dbc3c11cdf94f35/releases/65604ffc0766bf3af8d25a34/img/line-4.svg"
          />
          <img
            className="group-15"
            alt="Group"
            src="https://cdn.animaapp.com/projects/652662397dbc3c11cdf94f35/releases/65604ffc0766bf3af8d25a34/img/group-19@2x.png"
          />
          <div className="text-wrapper-5">1</div>
          <div className="text-wrapper-6">2</div>
          <div className="text-wrapper-7">3</div>
          <div className="text-wrapper-8" onClick={handlehome}>Home</div>
          <div className="text-wrapper-9">Sports</div>
          <div className="text-wrapper-10">Subscribe</div>
          <div className="text-wrapper-11">Notification</div>
          <div className="text-wrapper-12" onClick={handlemore}>More</div>
          <img
            className="vector"
            alt="Vector"
            src="https://cdn.animaapp.com/projects/652662397dbc3c11cdf94f35/releases/65604ffc0766bf3af8d25a34/img/vector.svg"
         onClick={handlehome} />
          <img
            className="group-16"
            alt="Group"
            src="https://cdn.animaapp.com/projects/652662397dbc3c11cdf94f35/releases/65604ffc0766bf3af8d25a34/img/group-4@2x.png"
          />
          <div className="movie-clapper" onClick={handleSubscribe}><i class="bi bi-plus-circle-fill"></i></div>

          <div className="group-17" onClick={handlenot}><i class="bi bi-bell-fill"></i></div>
          <img
            className="group-18"
            alt="Group"
            src="https://cdn.animaapp.com/projects/652662397dbc3c11cdf94f35/releases/65604ffc0766bf3af8d25a34/img/group-3@2x.png"
          onClick={handlemore}/>
          <div className="rectangle-20" />
          <div className="rectangle-21" />
          <div className="group-19">
            <div className="text-wrapper-13" onClick={handlecontent}>Watch Now</div>
            <img
              className="play"
              alt="Play"
              src="https://cdn.animaapp.com/projects/652662397dbc3c11cdf94f35/releases/65604ffc0766bf3af8d25a34/img/play@2x.png"
            />
          </div>
          <img
            className="group-20"
            alt="Group"
            src="https://cdn.animaapp.com/projects/652662397dbc3c11cdf94f35/releases/65604ffc0766bf3af8d25a34/img/group-5@2x.png"
          />
          <img
            className="down-arrow"
            alt="Down arrow"
            src="https://cdn.animaapp.com/projects/652662397dbc3c11cdf94f35/releases/65604ffc0766bf3af8d25a34/img/down-arrow-3-.svg"
          />
        </div>
        <img
          className="group-21"
          alt="Group"
          src="https://cdn.animaapp.com/projects/652662397dbc3c11cdf94f35/releases/65604ffc0766bf3af8d25a34/img/group-32@2x.png"
        />
        <div className="overlap">
          <img
            className="group-22"
            alt="Group"
            src="https://cdn.animaapp.com/projects/652662397dbc3c11cdf94f35/releases/65604ffc0766bf3af8d25a34/img/group-32@2x.png"
          />
          <img
            className="group-23"
            alt="Group"
            src="https://cdn.animaapp.com/projects/652662397dbc3c11cdf94f35/releases/65604ffc0766bf3af8d25a34/img/group-32@2x.png"
          />
        </div>
        <div className="overlap-2">
          <img
            className="group-22"
            alt="Group"
            src="https://cdn.animaapp.com/projects/652662397dbc3c11cdf94f35/releases/65604ffc0766bf3af8d25a34/img/group-32@2x.png"
          />
          <img
            className="group-23"
            alt="Group"
            src="https://cdn.animaapp.com/projects/652662397dbc3c11cdf94f35/releases/65604ffc0766bf3af8d25a34/img/group-32@2x.png"
          />
        </div>
        <img
          className="group-24"
          alt="Group"
          src="https://cdn.animaapp.com/projects/652662397dbc3c11cdf94f35/releases/65604ffc0766bf3af8d25a34/img/group-32@2x.png"
        />
      </div>
    </div>
  );
};
