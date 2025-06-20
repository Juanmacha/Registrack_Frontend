import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';



// Importa tu vista
import GestionVentasServicios from "./features/dashboard/pages/gestionVentasServicios/gestionVentasServicios";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Página temporal para mostrar tu tabla */}
        <Route path="/ventas-servicios" element={<GestionVentasServicios/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
