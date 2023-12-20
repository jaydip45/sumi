import { useState, useEffect } from "react";
import './Carousel.css';

function Carousel() {
  const [videos, setVideos] = useState([]);
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("https://api.dailymotion.com/videos"); // Replace with your actual API endpoint
        const data = await response.json();

        // Assuming the data structure has a property called "list" containing an array of videos
        setVideos(data.list || []);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  useEffect(() => {
    timeOut = autoPlay && setTimeout(slideRight, 2500);

    return () => clearTimeout(timeOut);
  }, [current, autoPlay]);

  const slideRight = () => {
    setCurrent((prevCurrent) => (prevCurrent === videos.length - 1 ? 0 : prevCurrent + 1));
  };

  const slideLeft = () => {
    setCurrent((prevCurrent) => (prevCurrent === 0 ? videos.length - 1 : prevCurrent - 1));
  };

  return (
    <div
      className="carousel"
      onMouseEnter={() => {
        setAutoPlay(false);
        clearTimeout(timeOut);
      }}
      onMouseLeave={() => {
        setAutoPlay(true);
      }}
    >
      <div className="carousel_wrapper">
        {videos.map((video, index) => (
          <div
            key={index}
            className={`carousel_card ${index === current ? "carousel_card-active" : ""}`}
          >
            {/* Assuming each video object has a property called "url" containing the video URL */}
            <video className="card_video" controls>
              <source src={video.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Add overlay, title, or other elements as needed */}
          </div>
        ))}

        <div className="carousel_pagination">
          {videos.map((_, index) => (
            <div
              key={index}
              className={`pagination_dot ${index === current ? "pagination_dot-active" : ""}`}
              onClick={() => setCurrent(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
