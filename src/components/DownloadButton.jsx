import React from 'react';
import './DownloadButton.css';

function DownloadButton() {
  const handleDownload = () => {
    // Assuming the .exe file is hosted on your server and accessible via a direct link
    const link = document.createElement('a');
    link.href = './src/assets/LostSongInstaller.msi'; // Replace with your actual .exe file path
    link.setAttribute('download', 'LostSongInstaller.msi'); // Optional: Set the download file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="downloadButton">
      Pobierz dla Windows
    </button>
  );
};

export default DownloadButton;