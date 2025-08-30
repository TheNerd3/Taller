// src/main.jsx
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import App from './App';
import { AuthProvider } from './context/AuthContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </LocalizationProvider>
    </BrowserRouter>
  </React.StrictMode>
);
