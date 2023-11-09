import React, { useState } from 'react';

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
    <div>
      <h1>Fox Image Generator</h1>
      <button onClick={fetchFox}>Generate Random Fox</button>
      {foxImage && <img src={foxImage} alt="Random Fox" />}
    </div>
  );
};

export default FoxImage;