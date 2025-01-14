import React from 'react';          // Import React library
import { createRoot } from 'react-dom/client'; // React 18 root rendering API
import App from './App';             // Import the App component
import './index.css';               // Import global styles (CSS)

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
