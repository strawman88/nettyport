import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Router & Theme Context Providers
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext.jsx';

// Global SCSS stylesheet w Bootstrap
import './scss/main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)