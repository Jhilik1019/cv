import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Adjust if your App component is in a different path
import './index.css'; // Make sure to import your styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
