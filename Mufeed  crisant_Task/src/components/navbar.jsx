import React from "react";
import { IoFilterSharp } from "react-icons/io5";
import { IoIosAddCircle } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const nav=useNavigate()
  return (
    <div className="flex items-center justify-between mb-6">
    <div className="relative w-1/2 ml-20 ">
      <CiSearch className="absolute top-3 left-3 text-gray-500" size={20} />
      <input
        type="text"
        placeholder="Search Customer"
        className="border border-gray-300 rounded-md pl-10 pr-4 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
    </div>  
    <div className="flex items-center space-x-6 ">
      <button className="flex items-center space-x-2 px-4 py-2 border border-[#af7974] text-[#af7974] rounded-md">
        <IoFilterSharp size={18} />
        <span>Filter</span>
      </button>
      <button onClick={()=>nav("/addcustomer")}  className="flex items-center space-x-2 px-4 py-2 bg-[#af7974] text-white rounded-md">
        <IoIosAddCircle size={18} />
        <span>Add Customer</span>
      </button>
      <button  className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-md hover:bg-[#af7974] hover:text-white transition">
  <IoNotificationsOutline size={22} />
</button>

    </div>
  </div>
  
  );
};

export default Navbar;
