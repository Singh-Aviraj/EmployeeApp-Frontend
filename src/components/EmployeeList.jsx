import React, { useEffect, useState } from "react";
import axios from "axios";
import EmployeeCard from "./EmployeeCard";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    const res = await axios.get("https://employee-management-backend-1-meo3.onrender.com/api/employees");
    setEmployees(res.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`https://employee-management-backend-1-meo3.onrender.com/api/employees/${id}`);
    fetchEmployees(); // Refresh list after delete
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {employees.map((emp) => (
        <EmployeeCard key={emp.id} employee={emp} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default EmployeeList;
