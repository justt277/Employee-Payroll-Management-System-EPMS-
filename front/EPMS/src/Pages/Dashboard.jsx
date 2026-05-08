import NavBar from "../Components/NavBar.jsx";
import SideBar from "../Components/SideBar.jsx";
import { useEffect, useState } from "react";
import { getEmployees } from "../Api/EmployeeApi.js";
import { getDepartments } from "../Api/Department.js";
import { getSalaries } from "../Api/SalaryApi.js";


function Dashboard () {
    const [stats, setStats] = useState({
        employees: 0,
        departments: 0,
        salaries: 0,
    });

    const fetchStats = async () => {
        try {
            const emplo = await getEmployees();
            const depa = await getDepartments();
            const sala = await getSalaries();

            setStats({
                employees: emplo.data.length,
                departments: depa.data.length,
                salaries: sala.data.length,
            });
        } catch (error ) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchStats();
    }, []);

    return (
        <div className="flex bg-gray-100 min-h-screen">
            <SideBar />

            <div className="flex-1">
                <NavBar />

                <div className="p-6">
                    <h1 className="text-3xl font-bold mb-6 text-gray-700">DashBoard</h1>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white shadow-lg rounded-2xl p-6\ border-l-4 border-blue-500">
                            <h2 className="text-gray-500 ">Employees</h2>
                            <p className="text-3xl font-bold text-blue-600">{ stats.employees }</p>
                        </div>

                        <div className="bg-white shadow-lg rounded-2xl p-6 border-l-4 border-green-500">
                            <h2 className="text-gray-500">Departments</h2>
                            <p className="text-3xl font-bold text-green-600">{stats.departments}</p>
                        </div>

                        <div className="bg-white shadow-lg rounded-2xl p-6 border-l-4 border-purple-500">
                            <h2 className="text-gray-500 ">Salary</h2>
                            <p className="text-3xl font-bold text-purple-600">{stats.salaries}</p>
                        </div>
                    </div>
                    <div className="mt-10 bg-linear-to-r from-blue-500 to-indigo-600 text-white p-8 rounded-2xl shadow-lg">
                        <h2 className="text-2xl fonr-semibold">Wellcome EPMS</h2>
                        <p className="mt-2 opacity-90">
                            Manage employees, Department, and salaries all in one place
                        </p>
                    </div>
                </div>
                {/* FOOTER */}
<footer className="mt-10 bg-white border-t border-gray-200 py-4 px-6 text-center">
    <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} EPMS System. All rights reserved.
    </p>

    <p className="text-gray-400 text-xs mt-1">
        Built with React + TailwindCSS 🚀 | GIKONKO TSS
    </p>
</footer>
            </div>
        </div>
    )
}

export default Dashboard;