import React from "react";
import SideBarGeneral from "../../components/sideBarGeneral";
import TablaVentasProceso from "./components/tablaVentasProceso";

const GestionVentasServicios = () => {
    return (
        <div className="flex h-screen w-screen overflow-hidden"> 
            {/* Sidebar con ancho fijo */}
            <SideBarGeneral />

            {/* Contenido de la tabla */}
            <div className="flex-1 flex items-center justify-center">
                <div className="w-full max-w-6xl px-4">
                    <TablaVentasProceso />
                </div>
            </div>
        </div>
    );
};

export default GestionVentasServicios;
