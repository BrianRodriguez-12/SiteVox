import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './i18n';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Components
import App from './App';

// Styles
import './global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
