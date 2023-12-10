   // src/components/Home.jsx
   import React from 'react';
   import lostSongLogo from '../assets/LostSongIcon.png';
   import DownloadButton from './DownloadButton';
   import AppDescription from './AppDescription';
import AppScreenshot from './AppScreenshot';

   function Home() {
     return (
       <>
         <div>
           <img src={lostSongLogo} className="logo" alt="LostSong logo" />
         </div>
         <h1>LostSong!</h1>
         <AppDescription/>
         <DownloadButton/>
         <AppScreenshot/>
       </>
     );
   };

   export default Home;