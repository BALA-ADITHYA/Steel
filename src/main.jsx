import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import PercentageContextProvider from './Context/PercentageContext.jsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
  <PercentageContextProvider >
  <App />
  </PercentageContextProvider>
  </BrowserRouter>
  </StrictMode>
)
