import React, { Component } from 'react'
import './App.css';
import { Routes, Route, Router} from "react-router-dom";
import Logo from './Components/Logo/Logo';
import SignIn from './Components/Signin/SignIn';
import Signup from './Components/SignUp/Signup';
import Language from './Components/Lang_Choose/Language';
import Type from './Components/Type_Choose/Type';
import Profile from './Components/Profile/Profile';
import SettingsScreen from './Components/settings/SettingsScreen';
import ParentalControlScreen from './Components/parentcontrol/ParentControlScreen';
import RatingReviewComponent from './Components/ratings/RatingReviewComponent';
import { Home } from './Components/home/Home';
import WatchlistScreen from './Components/watchlist/WatchlistScreen';
import SubscriptionPlans from './Components/subscriptionplans/SubscriptionPlans';
import MORE from './Components/More/MORE';
import Privacy from './Components/Privacy/Privacy';
import SEARCH from './Components/Search/SEARCH';
import ContentDetail from './Components/contentdetail/Contentetail'
// import VideoPlayer from './Components/VideoPlayer/VideoPlayer';
import HelpSupportScreen from './Components/helpsupport/HelpSupportScreen';
import Download from './Components/download/Download';
import AllEpisod from './Components/download/AllEpisod';
import PaymentScreen from './Components/payment/PaymentScreen';
import Payment2 from './Components/payment/Payment2';
import Payment3 from './Components/payment/Payment3';
import Notification1 from './Components/notification/Notification1';

const App = () => {
  return (
     <Routes>
      <Route path='/' element ={<Logo />} />
      <Route path='/signin' element = {<SignIn/>} />
      <Route path='/signup' element = {<Signup />} /> 
      <Route path='/language' element = {<Language />} />
      <Route path='/type' element = {<Type />} />

      <Route path='/profile' element = {<Profile />} />
      <Route path='/contentdetail' element = {<ContentDetail/>}/>

      <Route path='/settings' element ={<SettingsScreen/>}/>
      <Route path='parentcontrol' element ={<ParentalControlScreen/>}/>

      <Route path='/home' element = {<Home/>}/>
      <Route path='/watchlist' element ={<WatchlistScreen/>}/>
      <Route path='/download' element = {<Download/>}/>
      <Route path='/allepisode' element = {<AllEpisod/>}/>
      
      {/* <Route path='/videoplay' element = {<VideoPlayer/>}/> */}
      <Route path='/notification' element= {<Notification1/>}/>
      <Route path='/ratings' element ={<RatingReviewComponent/>}/>

      <Route path='/subscription' element ={<SubscriptionPlans/>}/>
      <Route path='/more' element ={<MORE/>}/>
      <Route path='/privacy' element = {<Privacy/>}/>
      <Route path='/search' element = {<SEARCH/>}/>
      <Route path='/help&support' element = {<HelpSupportScreen/>}/>

      <Route path='/payment' element = {<PaymentScreen/>}/>
      <Route path='/payment2' element = {<Payment2/>}/>
      <Route path='/payment3' element = {<Payment3/>}/>
    </Routes>
   
  )
}

export default App
