import React, { useState } from 'react';
import './AddImage.css'; 

function AddImage() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      const uploadUrl = 'your_upload_endpoint';

      fetch(uploadUrl, {
        method: 'POST',
        body: formData,
      })
        .then(response => response.json())
        .then(data => {
          console.log('Upload successful:', data);
        })
        .catch(error => {
          console.error('Upload failed:', error);
        });
    }
  };

  return (
    <div className="AddImageContainer">
      <h1>Add Image</h1>
      <input type="file" onChange={handleFileChange} className="FileInput" />
      <button onClick={handleUpload} className="UploadButton">
        Upload
      </button>
    </div>
  );
}

export default AddImage;

