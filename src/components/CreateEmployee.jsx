import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateEmployee() {
    const [form, setForm] = React.useState({
        name: "",
        email: "",
        designation: "",
        phoneNumber: ""
       
    });
 const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://employee-management-backend-1-meo3.onrender.com/api/employees/create", form)
      .then(() => {
        navigate("/");
      })
      .catch(err => {
        console.error("Error creating employee:", err);
      });
  };

return (
    <div className="container max-w-md mx-auto p-6 ">
        <h1 className="text-xl font-bold mb-4">Create New Employee</h1>
        <form onSubmit={handleSubmit} className="grid gap-2 ">
            {["name", "email", "designation", "phoneNumber"].map((field)=>(
               <input
               key={field}
               name={field}
               placeholder={field}
               value={form[field]}
               onChange={handleChange}
               required
               className="border rounded-lg p-2 w-full"
               />
               
            ))}
            <button type="submit" className="bg-green-600 text-white rounded-lg p-2 hover:bg-green-800 transition">
                Create Employee
            </button>
        </form>
    </div>
)


}
export default CreateEmployee;