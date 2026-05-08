import { useState } from "react";
import { createDepartment } from "../Api/Department.js";
import NavBar from "../Components/NavBar.jsx";
import { useNotification } from "../context/NotificationContext";

function DepartmentPage() {
  const [form, setForm] = useState({});

  const { addNotification } = useNotification();
  addNotification("Department created", "success");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createDepartment(form);

    alert("Department Added ✅");

    setForm({});
  };

  const handleChange = (field) => (e) => {
    setForm({
      ...form,
      [field]: e.target.value,
    });
  };

  return (
    <div className=" min-h-screen w-300 bg-linear-to-br from-gray-900 via-gray-800 to-black text-white">
      <NavBar />

      <div className="flex justify-center items-center px-6 py-10">
        
        {/* 🧾 CARD */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-2xl p-8 space-y-6"
        >
          
          {/* TITLE */}
          <div className="text-center">
            <h2 className="text-3xl font-bold">
              🏢 Department Management
            </h2>

            <p className="text-gray-300 mt-2 text-sm">
              Create and manage company departments
            </p>
          </div>

          {/* INPUTS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <input
              type="text"
              name="DepartmentCode"
              value={form.DepartmentCode || ""}
              onChange={handleChange("DepartmentCode")}
              placeholder="Department Code"
              className="input"
            />

            <input
              type="text"
              name="DepartmentName"
              value={form.DepartmentName || ""}
              onChange={handleChange("DepartmentName")}
              placeholder="Department Name"
              className="input"
            />

            <input
              type="number"
              name="GrossSalary"
              value={form.GrossSalary || ""}
              onChange={handleChange("GrossSalary")}
              placeholder="Gross Salary"
              className="input md:col-span-2"
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 py-3 rounded-xl font-semibold shadow-lg"
          >
            Save Department 🚀
          </button>
        </form>
      </div>
    </div>
  );
}

export default DepartmentPage;