import React,{useState, useEffect} from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
function UpdateEmployee() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        email: "",
        designation: "",
        phoneNumber: ""

    });

  useEffect(() => {
    axios.get(`https://employee-management-backend-1-meo3.onrender.com/api/employees/${id}`)
      .then(res => {
        setForm(res.data);
      })
      .catch(err => console.error("Fetch error:", err));
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8080/api/employees/${id}`, form)
      .then(() => navigate("/"))
      .catch(err => console.error("Update error:", err));
  };


return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded">
        <h1 className="text-xl font-bold mb-4">Update Employee</h1>
        <form onSubmit={handleSubmit} className="grid gap-4">
            {["name", "email", "designation", "phoneNumber"].map((field) => (
                <input
                    key={field}
                    name={field}
                    placeholder={field}
                    value={form[field]}
                    onChange={handleChange}
                    required
                    className="border rounded-lg p-2"
                />
            ))}
            <button type="submit" className="bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600 transition">
                Update Employee
            </button>
             </form>
    </div>

)
}
export default UpdateEmployee;