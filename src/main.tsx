
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

console.log("main.tsx: Starting to render the application");
const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("main.tsx: Failed to find root element");
} else {
  console.log("main.tsx: Root element found, creating React root");
  const root = createRoot(rootElement);
  console.log("main.tsx: Root created, rendering App with BrowserRouter");
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  console.log("main.tsx: App rendered with BrowserRouter");
}
