
import { Routes, Route } from 'react-router-dom';
import MarkerStyleDemo from './components/MarkerStyleDemo';
import AdvancedDemo from './pages/AdvancedDemo';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MarkerStyleDemo />} />
      <Route path="/advanced" element={<AdvancedDemo />} />
    </Routes>
  );
}

export default App;
