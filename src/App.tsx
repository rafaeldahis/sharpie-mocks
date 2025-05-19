
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Showcase from './pages/Showcase';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/showcase" element={<Showcase />} />
    </Routes>
  );
}

export default App;
