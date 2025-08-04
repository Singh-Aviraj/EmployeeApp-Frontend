
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?name=${encodeURIComponent(searchTerm)}`);
    }
    setSearchTerm(''); // Clear the search input after submission
};


  return (
    <nav className="bg-green-800 p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* 👨‍💻 App title */}
        <div className="text-white text-2xl font-bold">EmployeeManager</div>

        {/* 🧭 Navigation Links */}
        <div className="space-x-4">
          <a href="/" className="text-white hover:underline">Home</a>
          <a href="/create" className="text-white hover:underline">Add Employee</a>
        </div>

        {/* 🔎 Search Form */}
        <form onSubmit={handleSearch} className="flex">
          <input
            type="text"
            placeholder="Search by name"
            className="px-2 py-1 rounded-l-md outline-none bg-white text-gray-800"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type="submit"
            className="bg-white text-green-600 px-3 py-1 rounded-r-md font-semibold hover:bg-gray-200"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
