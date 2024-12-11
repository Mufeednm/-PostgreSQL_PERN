import React from 'react'
import Sidebar from '../components/sidebar'
import CustomerList from '../components/customerlist'
import Navbar from '../components/navbar'


const Admin = () => {
  return (
    <div className="flex">
    <Sidebar />
    <div className="flex-1 p-6">
      <Navbar />
      <CustomerList />
    </div>
  </div>
  )
}

export default Admin