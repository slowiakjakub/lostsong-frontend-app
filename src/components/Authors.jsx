import React from "react";
import './Authors.css';

function Authors() {
  return (
    <div className="author-container">
      <h1>Autorzy projektu</h1>
      <ul>
        <li className="author-item">Jakub Słowiak</li>
        <li className="author-item">Paweł Iwan</li>
        <li className="author-item">Artur Jacent</li>
      </ul>
    </div>
  );
}

export default Authors;