import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';



// Importa tu vista
import GestionVentasServiciosProceso from "./features/dashboard/pages/gestionVentasServicios/ventasServiciosProceso";
import GestionVentasServiciosFin from "./features/dashboard/pages/gestionVentasServicios/ventasServiciosFin";
import Dashboard from "./features/dashboard/pages/dashAdmin/dashboard";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Página temporal para mostrar tu tabla */}
        <Route path="/ventasServiciosProceso" element={<GestionVentasServiciosProceso/>} />
        <Route path="/ventasServiciosFin" element={<GestionVentasServiciosFin/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
