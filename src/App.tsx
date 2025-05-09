
import { Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import AdvancedDemo from './pages/AdvancedDemo';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/advanced" element={<AdvancedDemo />} />
    </Routes>
  );
}

export default App;
