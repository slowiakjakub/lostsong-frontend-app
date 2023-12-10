import React from "react";

function About() {
  return (
    <div className="project-overview">
        <h1>LostSong: O Projekcie</h1>
        <p>LostSong to innowacyjna aplikacja do identyfikacji i tagowania zagubionych utworów muzycznych w Twojej bibliotece.</p>
        
        <h2>Architektura Aplikacji</h2>
        <div className="architecture-section">
            <h3>Backend</h3>
            <p>Technologie: Express.js, Node.js, Mongoose, MongoDB. Hostowany na Heroku i MongoDB Atlas.</p>

            <h3>Frontend</h3>
            <p>Technologie: React, Vite. Hostowany na Vercel. Interakcje z backendem, prezentacja popularnych utworów i artystów.</p>

            <h3>Desktop</h3>
            <p>Technologie: C#, WinForms. Funkcjonalności obejmują identyfikację utworów, tagowanie metadanych, zarządzanie biblioteką.</p>
        </div>

        <h2>Jak to Działa?</h2>
        <p>LostSong używa algorytmu Chromaprint do generowania odcisków dźwiękowych i identyfikacji utworów za pomocą AcousticID.</p>

        <h2>Co Wyróżnia LostSong?</h2>
        <p>Inteligentne filtrowanie danych z MusicBrainz przez AcousticID, zapewniając precyzyjne informacje o utworach.</p>

        <h2>Zewnętrzne Biblioteki</h2>
        <ul>
            <li>NAudio - Przetwarzanie audio</li>
            <li>AcousticID.NET - Generowanie odcisków dźwiękowych</li>
            <li>Taglib-sharp - Tagowanie plików audio</li>
        </ul>

        <h2>Repozytoria na GitHub</h2>
        <ul>
            <li><a href="#">Backend LostSong</a></li>
            <li><a href="#">Frontend LostSong</a></li>
            <li><a href="#">Desktopowa Aplikacja LostSong</a></li>
        </ul>
    </div>
);
}

export default About;
