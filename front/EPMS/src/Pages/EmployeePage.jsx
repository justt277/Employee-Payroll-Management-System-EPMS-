import { useState } from "react";
import { createEmployee } from "../Api/EmployeeApi.js";
import NavBar from "../Components/NavBar.jsx";

function EmployeePage() {
  const [form, setForm] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createEmployee(form);
    alert("Employee added");
  };

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
  };

  return (
    <>
      <NavBar />

      <div className="min-h-screen w-300 bg-linear-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-6">
        
        {/* 🧾 FORM CARD */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-2xl p-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-white"
        >
          
          {/* Title */}
          <h2 className="col-span-1 md:col-span-2 text-3xl font-bold text-center mb-2">
            👤 Employee Registration
          </h2>

          {/* Inputs */}
          <input
            type="number"
            placeholder="Employee Number"
            onChange={handleChange("employeeNumber")}
            className="input"
          />

          <input
            type="text"
            placeholder="First Name"
            onChange={handleChange("FirstName")}
            className="input"
          />

          <input
            type="text"
            placeholder="Last Name"
            onChange={handleChange("LastName")}
            className="input"
          />

          <input
            type="text"
            placeholder="Position"
            onChange={handleChange("Position")}
            className="input"
          />

          <input
            type="text"
            placeholder="Address"
            onChange={handleChange("Address")}
            className="input"
          />

          <input
            type="number"
            placeholder="Telephone"
            onChange={handleChange("Telephone")}
            className="input"
          />

          <input
            type="text"
            placeholder="Gender"
            onChange={handleChange("Gender")}
            className="input"
          />

          {/* Button */}
          <button
            type="submit"
            className="col-span-1 md:col-span-2 bg-blue-600 hover:bg-blue-700 transition-all py-3 rounded-xl font-semibold shadow-lg"
          >
            Save Employee 🚀
          </button>
        </form>
      </div>
    </>
  );
}

export default EmployeePage;