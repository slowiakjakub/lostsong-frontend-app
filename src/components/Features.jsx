import React from "react";
import './Features.css';

const FeatureItem = ({ children }) => (
    <div className="feature-item">
      <span className="feature-icon">✔️</span> {/* Replace with icons if you have them */}
      {children}
    </div>
  );

function Features() {
    return (
        <div className="features-container">
          <FeatureItem>Obsługa formatów MP3/WAV.</FeatureItem>
          <FeatureItem>Rozpoznanie tytułu pliku muzycznego dzięki zewnętrznemu serwisowi AcousticID.</FeatureItem>
          <FeatureItem>Tagowanie metadanych pliku (Tytuł, Artysta, Album, Data wydania...) na bazie zawartości pliku.</FeatureItem>
        </div>
      );
}

export default Features;