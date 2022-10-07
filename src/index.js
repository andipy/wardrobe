import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ClothesContextProvider } from "./context/ClothesContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClothesContextProvider>
      <App />
    </ClothesContextProvider>
  </React.StrictMode>
);