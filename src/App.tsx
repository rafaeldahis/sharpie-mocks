
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Showcase from './pages/Showcase';
import SharpieShop from './pages/mockSites/SharpieShop';
import DoodleLaunch from './pages/mockSites/DoodleLaunch';
import SketchGram from './pages/mockSites/SketchGram';
import ScribbleDash from './pages/mockSites/ScribbleDash';
import DoodleTunes from './pages/mockSites/DoodleTunes';
import Random from './pages/mockSites/Random';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/showcase" element={<Showcase />} />
      <Route path="/mock/sharpie-shop" element={<SharpieShop />} />
      <Route path="/mock/doodle-launch" element={<DoodleLaunch />} />
      <Route path="/mock/sketch-gram" element={<SketchGram />} />
      <Route path="/mock/scribble-dash" element={<ScribbleDash />} />
      <Route path="/mock/doodle-tunes" element={<DoodleTunes />} />
      <Route path="/mock/random" element={<Random />} />
    </Routes>
  );
}

export default App;
