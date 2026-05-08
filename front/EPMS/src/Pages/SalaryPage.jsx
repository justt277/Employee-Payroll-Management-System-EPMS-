import { useEffect, useState } from "react";
import {
  createSalary,
  getSalaries,
  deleteSalary,
  updateSalary
} from "../Api/SalaryApi.js";
import NavBar from "../Components/NavBar.jsx";

function SalaryPage() {
  const [salary, setSalary] = useState([]);
  const [form, setForm] = useState({
    GrossSalary: "",
    TotalDeduction: "",
    month: "",
    employee: "",
    department: ""
  });

  const fetchData = async () => {
    const res = await getSalaries();
    setSalary(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
            await createSalary({ ...form, 
        employee: form.employee,
        department: form.department,
        GrossSalary: Number(form.GrossSalary),
        TotalDeduction: Number(form.TotalDeduction),
        month: form.month,
    });
    setForm({
        employee: "",
        department: "",
        GrossSalary: "",
        TotalDeduction: "",
        month: ""
    });
    fetchData();
    } catch (error) {
        console.log(error);
    }

  };

  const handleDelete = async (_id) => {
    await deleteSalary(_id);
    fetchData();
  };

  const handleUpdate = async (_id, updatedData) => {
    await updateSalary(_id, updatedData);
    fetchData();
  };

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
  };

  return (
    <div className="min-h-screen w-300 bg-linear-to-br from-gray-900 via-gray-800 to-black text-white">
      <NavBar />

      <div className="p-6 max-w-6xl mx-auto space-y-8">

        {/* 🧾 FORM CARD */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-2xl p-6 grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          <h2 className="md:col-span-4 text-2xl font-bold text-center mb-2">
            💰 Salary Management
          </h2>
          
          <input 
          type="text"
          placeholder="Employee"
          value={form.employee || ""}
          onChange={handleChange("employee")}
          className="input"
          />
          <input 
          type="text"
          placeholder="Department"
          value={form.department || ""}
          onChange={handleChange("department")}
          className="input"
          />

          <input
            type="number"
            placeholder="Gross Salary"
            value={form.GrossSalary || ""}
            onChange={handleChange("GrossSalary")}
            className="input"
          />

          <input
            type="number"
            placeholder="Total Deduction"
            value={form.TotalDeduction || ""}
            onChange={handleChange("TotalDeduction")}
            className="input"
          />

          <input
            type="text"
            placeholder="Month (e.g. Jan)"
            value={form.month || ""}
            onChange={handleChange("month")}
            className="input"
          />


          <button
            type="submit"
            className="md:col-span-4 bg-green-600 hover:bg-green-700 transition py-3 rounded-xl font-semibold shadow-lg"
          >
            Add Salary 🚀
          </button>
        </form>

        {/* 📊 TABLE CARD */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-2xl overflow-hidden">
          <div className="p-4 border-b border-white/10">
            <h3 className="text-xl font-semibold">Salary Records</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-white/10 text-gray-200">
                <tr>
                  <th className="p-3">Employee</th>
                  <th className="p-3">Department</th>
                  <th className="p-3">Month</th>
                  <th className="p-3">Gross</th>
                  <th className="p-3">Deduction</th>
                  <th className="p-3">Net</th>
                  <th className="p-3 text-center">Action</th>
                </tr>
              </thead>

              <tbody>
                {salary.map((s, index) => (
                  <tr
                    key={s._id}
                    className={`border-t border-white/10 hover:bg-white/10 transition ${
                      index % 2 === 0 ? "bg-white/5" : ""
                    }`}
                  >
                    <td className="p-3">
                      {s.employee?.FirstName} {s.employee?.LastName}
                    </td>

                    <td className="p-3">{s.department?.DepartmentName}</td>
                    <td className="p-3">{s.month}</td>
                    <td className="p-3">{s.GrossSalary}</td>
                    <td className="p-3">{s.TotalDeduction}</td>
                    <td className="p-3 font-semibold text-green-300">
                      {s.NetSalary}
                    </td>

                    <td className="p-3 text-center">
                      <button
                        onClick={() => handleDelete(s._id)}
                        className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded-lg text-xs transition"
                      >
                        Delete
                      </button>
                        {/* Update functionality can be added here */}
                        <button 
                        onClick={async () => {
                            const newGross = prompt(
                                "Enter new Gross Salary:",
                                s.GrossSalary
                            )
                            const newDeduction = prompt(
                                "Enter new Total Deduction:",
                                s.TotalDeduction
                            )

                            const newMonth = prompt(
                                "Enter new Month:",
                                s.month
                            )

                            if( !newGross || !newDeduction || !newMonth ) return ;

                            handleUpdate(s._id, {
                                GrossSalary: Number(newGross),
                                TotalDeduction: Number(newDeduction),
                                month: newMonth
                            })
                        }}
                        className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded-lg text-xs transition ml-2">
                            Update
                        </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}

export default SalaryPage;