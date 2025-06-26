import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import APODPage from './components/APODPage';
import ImageLibraryPage from './components/ImageLibraryPage';
import EPICPage from './components/EPICPage';
import NEOsPage from './components/NEOsPage';
import MarsRoverPage from './components/MarsRoverPage';
import NotFound from './pages/NotFound';
import './styles/global.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apod" element={<APODPage />} />
        <Route path="/images" element={<ImageLibraryPage />} />
        <Route path="/epic" element={<EPICPage />} />
        <Route path="/neows" element={<NEOsPage />} />
        <Route path="/mars-rover" element={<MarsRoverPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;