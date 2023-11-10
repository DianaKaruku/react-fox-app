import React, { useState } from 'react';
import './FoxImage.css'; 

const FoxImage = () => {
  const [foxImage, setFoxImage] = useState(null);

  const fetchFox = async () => {
    try {
      const response = await fetch('https://randomfox.ca/floof/');
      const data = await response.json();
      setFoxImage(data.image);
    } catch (error) {
      console.error('Error fetching fox image:', error);
    }
  };

  return (
    <div className="fox-image-container">
      <h1 className="fox-title">Fox Image Generator</h1>
      <button className="generate-button" onClick={fetchFox}>
        Generate Random Fox
      </button>
      {foxImage && <img className="fox-image" src={foxImage} alt="Random Fox" />}
    </div>
  );
};

export default FoxImage;
