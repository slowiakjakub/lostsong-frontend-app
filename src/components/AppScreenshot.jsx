import React from "react";
import screenshot from '../assets/AppScreenshot.png';

function AppScreenshot() {
    return (
        <div className="screenshot-container">
          <img src={screenshot} alt="App Screenshot" className="screenshot-image" />
        </div>
      );
}

export default AppScreenshot;
