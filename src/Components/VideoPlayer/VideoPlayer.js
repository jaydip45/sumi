// import React, { useState } from 'react';
// import ReactPlayer from 'react-player';
// import Select from 'react-select';
// import { FaPlay, FaPause, FaFastForward, FaStepForward, FaClosedCaptioning, FaVolumeUp, FaCog } from 'react-icons/fa';
// import './VideoPlayer.css'

// const AirPlayButton = () => (
//   <div>
//     {/* Your AirPlay button implementation goes here */}
//   </div>
// );

// const VideoPlayer = () => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [selectedSubtitle, setSelectedSubtitle] = useState(null);
//   const [selectedAudioTrack, setSelectedAudioTrack] = useState(null);
//   const [selectedSpeed, setSelectedSpeed] = useState({ value: 1, label: '1x' });

//   const subtitlesOptions = [
//     { value: 'english', label: 'English' },
//       { value: 'gujarati', label: 'Gujarati' },
//     { value: 'hindi', label: 'Hindi' },
//     // Add more subtitle options as needed
//   ];

//   const audioTracksOptions = [
//     { value: 'english', label: 'English' },
//     // { value: 'spanish', label: 'Spanish' },
//     { value: 'gujarati', label: 'Gujarati' },
//     { value: 'hindi', label: 'Hindi' },
//     // Add more audio track options as needed
//   ];

//   const speedOptions = [
//     { value: 0.5, label: '0.5x' },
//     { value: 1, label: '1x' },
//     { value: 1.5, label: '1.5x' },
//     { value: 2, label: '2x' },
//   ];

//   const handlePlayPause = () => {
//     setIsPlaying(!isPlaying);
//   };

//   const handleNext = () => {
//     // Implement logic for next episode
//   };

//   const handleSkipIntroRecap = () => {
//     // Implement logic for skipping intro/recap
//   };

//   const handleSubtitleChange = (selectedOption) => {
//     setSelectedSubtitle(selectedOption);
//     // Implement logic to change subtitle
//   };

//   const handleAudioTrackChange = (selectedOption) => {
//     setSelectedAudioTrack(selectedOption);
//     // Implement logic to change audio track
//   };

//   const handleSpeedChange = (selectedOption) => {
//     setSelectedSpeed(selectedOption);
//     // Implement logic to change playback speed
//   };

//   const handleProgress = (state) => {
//     setCurrentTime(state.playedSeconds);
//   };

//   return (
//     <div className='list'>
//         <div className='div'>
    
//       <ReactPlayer
//         url="your_video_url_here"
//         playing={isPlaying}
//         controls={false}
//         onProgress={handleProgress}
//         width="100%"
//         height="100%"
//       />

//       <div>
//         <button className='pause-button' onClick={handlePlayPause}>
//           {isPlaying ? <FaPause /> : <FaPlay />}
//         </button>
//         <button className='next-button' onClick={handleSkipIntroRecap}>
//           <FaFastForward />
//         </button>
//         <button  className ="skip-button" onClick={handleNext}>
//           Skip 
//         </button>
//         <Select className='sub-button'
//           value={selectedSubtitle} 
//           options={subtitlesOptions}
//           onChange={handleSubtitleChange}
//           placeholder={<FaClosedCaptioning />}
//         />
//         <Select className='audio-button'
//           value={selectedAudioTrack}
//           // options={audioTracksOptions}
//           onChange={handleAudioTrackChange}
//           placeholder={<FaVolumeUp />}
//         />
//         <Select className='speed-button'
//           value={selectedSpeed}
//           options={speedOptions}
//           onChange={handleSpeedChange}
//           placeholder={<FaCog />}
//         />
//         {/* Placeholder for AirPlay button */}
        
//       </div>
//     </div>
//     </div>
//   );
// };

// export default VideoPlayer;
