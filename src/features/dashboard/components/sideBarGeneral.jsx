import React from "react";
import { CiGrid41, CiViewList, CiUser, CiCalendar, CiSettings, CiGrid2H } from "react-icons/ci";
import { Link } from "react-router-dom";
import logo from "../../../public/../../public/images/logo.png"; // Ajusta si necesario

const SideBarGeneral = () => {
  return (
    <div className="h-screen">
      <div className="flex flex-col group transition-all duration-300 h-full">
        <aside className="bg-white hover:w-64 w-20 transition-all duration-300 ease-in-out text-gray-900 p-3 h-full border-r border-gray-300 shadow-md relative">
          
          {/* Logo */}
          <div className="flex justify-center items-center mb-8">
            <img src={logo} alt="Logo" className="w-12 h-auto group-hover:w-32 transition-all duration-300" />
          </div>

          {/* Navegación */}
          <nav className="space-y-4">
            {[
              { icon: <CiGrid41 className="w-6 h-6" />, label: "Dashboard", href: "#" },
              { icon: <CiViewList className="w-6 h-6" />, label: "Solicitudes", href: "#" },
              { icon: <CiGrid2H className="w-6 h-6" />, label: "Ventas", to: "/ventas-servicios" },
              { icon: <CiCalendar className="w-6 h-6" />, label: "Calendario", href: "#" },
              { icon: <CiUser className="w-6 h-6" />, label: "Usuarios", href: "#" },
              { icon: <CiSettings className="w-6 h-6" />, label: "Configuración", href: "#" },
            ].map(({ icon, label, href, to }, index) => {
              const content = (
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-200 transition-all duration-200">
                  <div className="text-gray-600">{icon}</div>
                  <span className="text-gray-700 text-sm font-medium hidden group-hover:block">
                    {label}
                  </span>
                </div>
              );
              return to ? (
                <Link key={index} to={to} className="no-underline block">
                  {content}
                </Link>
              ) : (
                <a key={index} href={href} className="no-underline block">
                  {content}
                </a>
              );
            })}
          </nav>
        </aside>
      </div>
    </div>
  );
};

export default SideBarGeneral;
