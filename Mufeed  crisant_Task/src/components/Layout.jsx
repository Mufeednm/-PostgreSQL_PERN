// components/Layout.js

import React from 'react';
import Sidebar from './sidebar';
import Navbar from './navbar';

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <Navbar />
        {children} 
      </div>
    </div>
  );
};

export default Layout;
