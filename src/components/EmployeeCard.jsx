// src/components/EmployeeCard.js
import React from "react";
import { useNavigate } from "react-router-dom";

function EmployeeCard({ employee, onDelete }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl shadow-md p-5 w-full max-w-md mx-auto mb-6 hover:shadow-lg transition duration-300">
      <h2 className="text-xl font-semibold text-gray-800 mb-1">{employee.name}</h2>
      <p className="text-gray-600 mb-1"> {employee.designation}</p>
      <p className="text-gray-600 mb-1"> {employee.email}</p>
      <p className="text-gray-600 mb-4"> {employee.phoneNumber}</p>

      <div className="flex justify-end gap-3">
        <button
          onClick={() => navigate(`/update/${employee.id}`)}
          className="bg-green-700 hover:bg-green-900 text-white px-4 py-1 rounded-xl text-sm"
        >
          UPDATE
        </button>
        <button
          onClick={() => onDelete(employee.id)}
          className="bg-red-600 hover:bg-red-800 text-white px-4 py-1 rounded-xl text-sm"
        >
          DELETE
        </button>
      </div>
    </div>
  );
}

export default EmployeeCard;
