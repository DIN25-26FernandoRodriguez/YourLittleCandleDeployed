import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";

// Renderizamos la aplicación dentro del elemento con id 'root'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Usamos BrowserRouter para habilitar el enrutamiento en la aplicación */}
    <BrowserRouter>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-700 text-white px-4 py-2 rounded z-50"
      >
        Saltar entre productos
      </a>

      <App />
    </BrowserRouter>
  </StrictMode>,
)
