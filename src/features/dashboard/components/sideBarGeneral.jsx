import React from 'react';
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { BiGitCompare } from "react-icons/bi";
import { FaCalendarDay } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { RiExchange2Fill } from "react-icons/ri";
import { HiCog } from "react-icons/hi";

const SideBarGeneral = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            {/* Este div se centra verticalmente */}
            <div className="flex flex-col items-center">
                
                {/* Sidebar */}
                <aside className="w-72 bg-[#275FAA] text-white hover:shadow-2xl transition-shadow duration-300 z-40 p-4 h-auto rounded-tr-2xl rounded-br-2xl">

                    <div className="mb-4 text-center">
                        <h1 className="text-3xl font-bold">Registrack</h1>
                    </div>

                    {/* Opciones de Navegación */}
                    <nav className="space-y-4">
                        <a href="#" className="no-underline flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-900 transition duration-200 font-normal hover:shadow-lg transition duration-300">
                            <div className='rounded bg-gray-100 p-2'>
                                <LuLayoutDashboard className='text-gray-800 w-5 h-5' />
                            </div>
                            <span className="text-xl text-white">Dashboard</span>
                        </a>
                        <a href="#" className="no-underline flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-900 transition duration-200 font-normal hover:shadow-lg transition duration-300">
                            <div className='rounded bg-gray-100 p-2'>
                                <MdOutlineMiscellaneousServices className='text-gray-800 w-6 h-6' />
                            </div>
                            <span className="text-xl text-white">Ventas de Servicios</span>
                        </a>
                        <a href="#" className="no-underline flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-900 transition duration-200 font-normal hover:shadow-lg transition duration-300">
                            <div className='rounded bg-gray-100 p-2'>
                                <BiGitCompare className='text-gray-800 w-6 h-6' />
                            </div>
                            <span className="text-xl text-white">Servicios</span>
                        </a>
                        <a href="#" className="no-underline flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-900 transition duration-200 font-normal hover:shadow-lg transition duration-300">
                            <div className='rounded bg-gray-100 p-2'>
                                <FaCalendarDay className='text-gray-800 w-6 h-6' />
                            </div>
                            <span className="text-xl text-white">Calendario</span>
                        </a>
                        <a href="#" className="no-underline flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-900 transition duration-200 font-normal hover:shadow-lg transition duration-300">
                            <div className='rounded bg-gray-100 p-2'>
                                <FaUsers className='text-gray-800 w-6 h-6' />
                            </div>
                            <span className="text-xl text-white">Usuarios</span>
                        </a>
                        <a href="#" className="no-underline flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-900 transition duration-200 font-normal hover:shadow-lg transition duration-300">
                            <div className='rounded bg-gray-100 p-2'>
                                <HiCog  className='text-gray-800 w-6 h-6' />
                            </div>
                            <span className="text-xl text-white">Configuración</span>
                        </a>
                    </nav>
                </aside>

                {/* Botones debajo del sidebar */}
                <div className="w-72 space-y-2 mt-2">
                    <a
                        href="#"
                        className="no-underline flex items-center justify-center space-x-3 p-3 rounded-tr-2xl rounded-br-2xl hover:bg-red-900 bg-red-700 hover:shadow-2xl transition-colors duration-300 w-full text-white"
                    >
                        <RiExchange2Fill className="text-white w-6 h-6" />
                        <span className="text-lg">Cambiar Cuenta</span>
                    </a>

                    <a
                        href="#"
                        className="no-underline flex items-center justify-center space-x-3 p-3 rounded-tr-2xl rounded-br-2xl hover:bg-red-900 bg-red-700 hover:shadow-2xl transition-colors duration-300 w-full text-white"
                    >
                        <IoLogOut className="text-white w-6 h-6" />
                        <span className="text-lg font-semibold">Cerrar Sesión</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SideBarGeneral;
