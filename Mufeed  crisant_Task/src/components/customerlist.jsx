import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import axios from "axios";

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [sortOrder, setSortOrder] = useState("Newest");
  const itemsPerPage = 8;

  useEffect(() => {
    // Fetch customer data from the backend
    const fetchCustomers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/admin/allcustomers");
        console.log(response.data.customers,"result");
        setCustomers(response.data.customers);
      } catch (error) {
        console.error("Error fetching customers:", error);
      }
    };

    fetchCustomers();
  }, []);

  const handlePageClick = ({ selected }) => setCurrentPage(selected);

  const handleSortChange = (e) => {
    const order = e.target.value;
    setSortOrder(order);
  };

  const sortedCustomers = [...customers].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return sortOrder === "Newest" ? dateB - dateA : dateA - dateB;
  });

  const currentCustomers = sortedCustomers.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );
  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-GB", options);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-semibold text-gray-800">All Customers</h3>
        <div className="text-sm text-gray-600 flex items-center space-x-2">
          <label htmlFor="sortOrder" className="font-medium">Sort by:</label>
          <select
            id="sortOrder"
            value={sortOrder}
            onChange={handleSortChange}
            className="border border-gray-300 rounded-md py-1 px-2 text-sm focus:outline-none"
          >
            <option value="Newest">Newest</option>
            <option value="Oldest">Oldest</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="py-3 px-6 text-gray-600 font-semibold">Customer Name</th>
              <th className="py-3 px-6 text-gray-600 font-semibold">Time</th>
              <th className="py-3 px-6 text-gray-600 font-semibold">Date</th>
            </tr>
          </thead>
          <tbody>
            {currentCustomers.map((customer, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="py-3 px-6 text-gray-800">{customer.name}</td>
                <td className="py-3 px-6 text-gray-800">{customer.time}</td>
                <td className="py-3 px-6 text-gray-800">{formatDate(customer.date)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-4">
        <span className="text-sm text-gray-600">
          Showing {currentPage * itemsPerPage + 1} to{" "}
          {Math.min((currentPage + 1) * itemsPerPage, sortedCustomers.length)} of{" "}
          {sortedCustomers.length} entries
        </span>
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          pageCount={Math.ceil(sortedCustomers.length / itemsPerPage)}
          onPageChange={handlePageClick}
          containerClassName="flex items-center space-x-2"
          previousClassName="px-3 py-1.5 text-sm bg-gray-200 rounded-md hover:bg-gray-300 transition"
          nextClassName="px-3 py-1.5 text-sm bg-gray-200 rounded-md hover:bg-gray-300 transition"
          pageClassName="px-3 py-1.5 text-sm bg-gray-200 rounded-md hover:bg-gray-300 transition"
          activeClassName="bg-customBrown text-white font-semibold"
          disabledClassName="opacity-50 cursor-not-allowed"
        />
      </div>
    </div>
  );
};

export default CustomerList;
