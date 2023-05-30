import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { FiverrProvider } from './store/FiverrProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <FiverrProvider>
    <App />
  </FiverrProvider>
);
