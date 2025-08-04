import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import EmployeeCard from './EmployeeCard'; // Card component jo tu already use kar raha hai

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const location = useLocation();

  // ✅ Query param extract karo
  const query = new URLSearchParams(location.search);
  const name = query.get('name');

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const res = await axios.get(`https://employee-management-backend-1-meo3.onrender.com/api/employees/search?name=${name}`);
        setResults(res.data);
      } catch (err) {
        console.error("Search error:", err);
        setResults([]); // Empty result if failed
      }
    };

    if (name) {
      fetchResults();
    }
  }, [name]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4 text-green-800">
        Search Results for "{name}"
      </h2>

      {results.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map(emp => (
            <EmployeeCard key={emp.id} employee={emp} onDelete={() => {}} />
          ))}
        </div>
      ) : (
        <p className="text-gray-600 mt-4">No employees found with that name.</p>
      )}
    </div>
  );
};

export default SearchResults;
