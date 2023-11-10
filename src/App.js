import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FoxImage from './components/FoxImage';
import Comments from './components/Comments';
import AddImage from './components/AddImage';
import FoxFacts from './components/FoxFacts';
import NavBar from './components/NavBar';
import "./App.css"

function App() {
  return (
    <Router>
      <div>
      <NavBar/>
        <Routes>
          <Route path="/" element={<FoxImage />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/addimage" element={<AddImage />} />
          <Route path="/foxfacts" element={<FoxFacts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

