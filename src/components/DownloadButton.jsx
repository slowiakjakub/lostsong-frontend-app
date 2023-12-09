import React from 'react';
import './DownloadButton.css';

function DownloadButton() {
  const handleDownload = () => {
    // Assuming the .exe file is hosted on your server and accessible via a direct link
    const link = document.createElement('a');
    link.href = 'path_to_your_exe_file.exe'; // Replace with your actual .exe file path
    link.setAttribute('download', 'filename.exe'); // Optional: Set the download file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="downloadButton">
      Download for Windows
    </button>
  );
};

export default DownloadButton;