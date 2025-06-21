import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";


const datosMock = [
  {
    id: "1",
    expediente: "EXP-00123",
    fechaSolicitud: "2025-06-10",
    tipoSolicitud: "Registro",
    tipoPersona: "Natural",
    titular: "Juan Pérez",
    marca: "TechNova",
    encargado: "Dra. Gómez",
    proximaCita: "",
    estado: "En revisión",
  },
  {
    id: "2",
    expediente: "EXP-00124",
    fechaSolicitud: "2025-06-11",
    tipoSolicitud: "Renovación",
    tipoPersona: "Jurídica",
    titular: "Empresa XYZ",
    marca: "Zentra",
    encargado: "Dr. Morales",
    proximaCita: "2025-06-22",
    estado: "Pendiente firma",
  },
  {
    id: "3",
    expediente: "EXP-001210",
    fechaSolicitud: "2025-09-11",
    tipoSolicitud: "Renovación",
    tipoPersona: "Jurídica",
    titular: "Empresa Nike",
    marca: "Nike",
    encargado: "Morales",
    proximaCita: "2025-07-22",
    estado: "Pendiente",
  },
];

const getEstadoBadge = (estado) => {
  const estadoLower = estado.toLowerCase();
  if (estadoLower.includes("revisión") || estadoLower.includes("activo")) {
    return (
      <span className="px-3 py-1 text-green-700 bg-green-100 rounded-full text-xs font-semibold">
        Active
      </span>
    );
  }
  if (estadoLower.includes("pendiente")) {
    return (
      <span className="px-3 py-1 text-yellow-800 bg-yellow-100 rounded-full text-xs font-semibold">
        Pending
      </span>
    );
  }
  return (
    <span className="px-3 py-1 text-red-700 bg-red-100 rounded-full text-xs font-semibold">
      Cancel
    </span>
  );
};

const TablaVentasProceso = () => {
  return (
    <div className="w-full max-w-full">
      {/* Encabezado con título, buscador y botón */}
<div className="flex items-center justify-between px-4 mb-4 w-full">
  {/* Buscador */}
  <input
    type="text"
    placeholder="Buscar..."
    className="form-control w-1/4 h-9  text-sm border border-gray-300 rounded-md"
  />

  {/* Botones */}
  <div className="flex gap-3">
    <button className="btn btn-success px-5 py-2 text-sm rounded-md whitespace-nowrap">
      <i className="bi bi-file-earmark-excel-fill"></i>
      Descargar Excel
    </button>
  </div>
</div>



      {/* Tabla */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white hover:shadow-2xl transition-shadow duration-300 z-40">
        <div className="overflow-x-auto w-full">
          <table className="table-auto w-full divide-y divide-gray-100">
            <thead className="text-left text-sm text-gray-500 bg-gray-50">
              <tr>
                <th className="px-6 py-4 font-medium text-center">Titular</th>
                <th className="px-6 py-4 font-medium text-center">
                  Expediente
                </th>
                <th className="px-6 py-4 font-medium text-center">Solicitud</th>
                <th className="px-6 py-4 font-medium text-center">Marca</th>
                <th className="px-6 py-4 font-medium text-center">Encargado</th>
                <th className="px-6 py-4 font-medium text-center">Cita</th>
                <th className="px-6 py-4 font-medium text-center">Estado</th>
                <th className="px-6 py-4 font-medium text-center">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
              {datosMock.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={`https://api.dicebear.com/7.x/initials/svg?seed=${item.titular}`}
                        alt={item.titular}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <div className="font-semibold text-gray-800">
                          {item.titular}
                        </div>
                        <div className="text-xs text-gray-500">
                          {item.tipoPersona}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">{item.expediente}</td>
                  <td className="px-6 py-4 text-center">
                    {item.tipoSolicitud}
                  </td>
                  <td className="px-6 py-4 text-center">{item.marca}</td>
                  <td className="px-6 py-4 text-center">{item.encargado}</td>
                  <td className="px-6 py-4 text-center">
                    {item.proximaCita || (
                      <span className="text-xs italic text-gray-400">
                        Sin fecha
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {getEstadoBadge(item.estado)}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex gap-2 justify-center flex-wrap">
                      <button className="btn btn-outline-secondary btn-sm">
                        <i className="bi bi-pencil-fill"></i>
                      </button>
                      <button className="btn btn-outline-secondary btn-sm">
                        <i className="bi bi-chat-left-text-fill"></i>
                      </button>
                      <button className="btn btn-outline-secondary btn-sm">
                        <i className="bi bi-calendar-event-fill"></i>
                      </button>
                      <button className="btn btn-outline-secondary btn-sm">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                      <button className="btn btn-outline-danger btn-sm">
                        <i className="bi bi-trash-fill"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TablaVentasProceso;
