import React from 'react';

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
      style={{
        padding: '10px 20px',
        fontSize: '20px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        transition: '0.3s',
      }}
    >
      Download EXE
    </button>
  );
};

export default DownloadButton;