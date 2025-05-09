
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

console.log("main.tsx: Starting to render the application");
const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("main.tsx: Failed to find root element");
} else {
  console.log("main.tsx: Root element found, creating React root");
  const root = createRoot(rootElement);
  console.log("main.tsx: Root created, rendering App");
  root.render(<App />);
  console.log("main.tsx: App rendered");
}
