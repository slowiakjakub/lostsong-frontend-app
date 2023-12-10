import React from "react";
import screenshot from '../assets/AppScreenshot.png';
import './AppScreenshot.css';

function AppScreenshot() {
    return (
        <div className="screenshot-container">
          <img src={screenshot} alt="App Screenshot" className="screenshot-image" />
        </div>
      );
}

export default AppScreenshot;
