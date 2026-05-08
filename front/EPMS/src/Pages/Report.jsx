import { useEffect, useState } from "react";
import { getSalaries } from "../Api/SalaryApi.js";
import NavBar from "../Components/NavBar.jsx";

function Reports() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getSalaries().then((res) => setData(res.data));
  }, []);

  // 💰 Calculate total payroll
  const totalPayroll = data.reduce(
    (sum, item) => sum + item.NetSalary,
    0
  );

  return (
    <div className="min-h-screen w-300 bg-linear-to-br from-gray-900 via-gray-800 to-black text-white">
      <NavBar />

      <div className="p-6 max-w-7xl mx-auto space-y-8">

        {/* 🏷️ PAGE HEADER */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          
          <div>
            <h2 className="text-3xl font-bold">
              📊 Monthly Payroll Report
            </h2>

            <p className="text-gray-300 mt-1">
              Employee salary analytics and payroll overview
            </p>
          </div>

          {/* 💳 SUMMARY CARD */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl px-6 py-4 shadow-xl">
            <p className="text-sm text-gray-300">
              Total Payroll
            </p>

            <h3 className="text-2xl font-bold text-green-400">
              {totalPayroll.toFixed(2)} RWF
            </h3>
          </div>
        </div>

        {/* 📋 REPORT TABLE */}
        <div className="overflow-x-auto bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-2xl">
          
          <table className="min-w-full text-sm text-left">
            
            {/* TABLE HEADER */}
            <thead className="bg-white/10 text-gray-200 uppercase text-xs tracking-wider">
              <tr>
                <th className="px-6 py-4">First Name</th>
                <th className="px-6 py-4">Last Name</th>
                <th className="px-6 py-4">Position</th>
                <th className="px-6 py-4">Department</th>
                <th className="px-6 py-4">Net Salary</th>
              </tr>
            </thead>

            {/* TABLE BODY */}
            <tbody>
              {data.map((d, index) => (
                <tr
                  key={d._id}
                  className={`border-t border-white/10 transition-all duration-200 hover:bg-white/10 ${
                    index % 2 === 0 ? "bg-white/5" : ""
                  }`}
                >
                  <td className="px-6 py-4 font-medium">
                    {d.employee?.FirstName}
                  </td>

                  <td className="px-6 py-4 text-gray-300">
                    {d.employee?.LastName}
                  </td>

                  <td className="px-6 py-4 text-gray-300">
                    {d.employee?.Position}
                  </td>

                  <td className="px-6 py-4 text-gray-300">
                    {d.department?.DepartmentName}
                  </td>

                  <td className="px-6 py-4 font-bold text-green-400">
                    {d.NetSalary.toFixed(2)} RWF
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* EMPTY STATE */}
          {data.length === 0 && (
            <div className="text-center py-10 text-gray-400">
              No payroll records found 📭
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Reports;