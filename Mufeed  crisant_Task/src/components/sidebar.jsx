import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const nav = useNavigate()
  return (
    <div className="w-64 bg-gray-100 h-screen flex flex-col justify-between p-6 shadow-lg">
      <div>
        <div className="mb-8">
          <img src="/Logo.png" alt="Logo" />
        </div>
        <div className="flex flex-col items-center mb-8">
          <img
            className="w-16 h-16 rounded-full mb-4 border border-gray-300"
            src="/Profile.jpeg"
            alt="profile"
          />
          <h5 className="text-lg font-semibold text-gray-700">Ravi Kumar</h5>
          <h6 className="text-sm text-gray-500">CRE</h6>
        </div>
        <hr className="border-t border-gray-300 mb-4" />
        <nav className="space-y-2">
          <a
            href="#"
            className="flex items-center py-2 px-4 rounded-md text-white bg-[#AF7974] font-medium"
          >
            <img className="h-5 mr-2" src="/homelogo.png" alt="home logo" />
            Home
          </a>
          <a
            href="#"
            className="flex items-center py-2 px-4 rounded-md text-gray-600 hover:bg-gray-200"
          >
            <FiUsers className="mr-2" size={18} /> Employees
          </a>
          <a
            href="#"
            className="flex items-center py-2 px-4 rounded-md text-gray-600 hover:bg-gray-200"
          >
            <IoSettingsOutline className="mr-2" size={18} /> Settings
          </a>
        </nav>
      </div>
      <div className="flex items-center justify-center">
        <button onClick={()=>nav("/")} className="flex items-center text-[#af7974] hover:text-red-600 font-medium">
          <TbLogout size={20} /> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
