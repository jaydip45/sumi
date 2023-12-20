import React,{useState} from 'react';
import { ReactComponent as FilmIcon } from './film.svg';
import backArrowImage from './back.svg'
import './contentDetail.css';
import { useNavigate } from 'react-router-dom';

const RelatedContentCard = ({ title, imgSrc }) => {
  return (
    <div className="related-content-card">
      <img src={imgSrc} alt={title} width="100" height="150" />
      <p>{title}</p>
    </div>
  );
};


const ContentDetail = () => {
 
      const navigate = useNavigate();

  const subtitlesOptions = [
    { value: 'english', label: 'English' },
    { value: 'hindi', label: 'Hindi' },
    { value: 'spanish', label: 'Spanish' },
    { value: 'none', label: 'None' },
  ];

  const audioTracksOptions = [
    { value: 'english', label: 'English' },
    { value: 'hindi', label: 'Hindi' },
    { value: 'none', label: 'None' },
  ];

  const speedOptions = [
    { value: 0.5, label: '0.5x' },
    { value :0.75, label:'0.75px'},
    { value :1, label : '1px'},
    { value: 0.5, label: '1.25x' },
    { value: 0.5, label: '1.5x' },
    { value: 0.5, label: '1.75x' },
    { value: 2, label: '2x' },
  ];

    const castDetails = [
        { name: "Álvaro Morte", imgSrc: "/amitabh.jpg" },
        { name: "Pedro Alonso", imgSrc: "/ranbir.jpg" },
        { name: "Itziar Ituño", imgSrc: "/alia.jpg" },
        { name: "Jaime Lorente", imgSrc: "/shahrukh.jpg" },
        { name: "Esther Acebo", imgSrc: "dimple.jpg" },
      ];

      const [showMore, setShowMore] = useState(false);
      const initialDisplay = 3; 
      const additionalCast = castDetails.slice(initialDisplay);
  
      const toggleShowMore = () => {
          setShowMore(!showMore);
      };
      
      const relatedContent = [
        { title: 'lucifer', imgSrc: '/lucifer.jpg' },
        { title: 'Narcos', imgSrc: '/barba2.jpg' },
        { title: 'Elite', imgSrc: '/barba.jpg' },
      ];

  return (
    <div className='content'>
      
    <div className='div'>
    <img
            className="back-arrow"
            alt="Back"
            src={backArrowImage} 
            onClick={() => {
              navigate('/home')
            }}
            />
      <div className="content-detail">
        <div className="video-container">
          <video controls>
            <source src="path_to_video.mp4" type="video/mp4" />
            
            Your browser does not support the video tag.
          </video>
          <div>
            
            {/* <Select className='sub-option'
              options={subtitlesOptions}
              isMulti
              placeholder="Ⓢ"
            />
            <Select className='audio-option'
              options={audioTracksOptions}
              isMulti
              placeholder="♬"
            />
            <Select className='speed-option'
              options={speedOptions}
              isMulti
              placeholder=">>"
            /> */}
          </div>
        </div>

      <div className="content-info">
        <div className="titlex">
          <h1>Money Heist </h1>
          <h5>8.2/10 IMDB</h5>
          <button className="play-button1"><FilmIcon/>   Trailer</button>
          <button className="play-button2"><i class="bi bi-file-arrow-down-fill"></i> Download</button>
        </div>
        <p className="synopsis">
        An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.        </p>
      </div>
     <div className="cast-details">
                        <h2>Cast Details</h2>
                        <div className="cast-list">
                            {castDetails.slice(0, showMore ? castDetails.length : initialDisplay).map((actor, index) => (
                                <div className="actor-info" key={index}>
                                    <div className="actor-image">
                                        <img src={actor.imgSrc} alt={actor.name} />
                                    </div>
                                    <div className="actor-name">{actor.name}</div>
                                </div>
                            ))}
                            {(!showMore && castDetails.length > initialDisplay) && (
                                <div className="actor-info-more" onClick={toggleShowMore}>
                                    <div className="actor-image">
                                        <span>{">"}</span>
                                    </div>
                                    <div className="actor-name">More</div>
                                </div>
                            )}
                        </div>
                    </div>
      <div className="related-content">
        <h2>Related Content</h2>
        <div className="related-content-cards">
          {relatedContent.map((content, index) => (
            <RelatedContentCard
              key={index}
              imgSrc={content.imgSrc}
            />
          ))}
        </div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default ContentDetail;