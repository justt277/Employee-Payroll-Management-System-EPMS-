import NavBar from "../Components/NavBar.jsx";
import SideBar from "../Components/SideBar.jsx";
import { useEffect, useState } from "react";
import { getEmployees } from "../Api/EmployeeApi.js";
import { getDepartments } from "../Api/Department.js";
import { getSalaries } from "../Api/SalaryApi.js";
import { motion } from "framer-motion";

function Dashboard() {
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
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  // 🎬 animation presets
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0 },
  };



  return (
    <div className="flex min-h-screen w-full bg-linear-to-br from-gray-900 via-gray-800 to-black text-white">

      <SideBar />

      <div className="flex-1 flex flex-col">

        <NavBar />

        <div className="p-6 space-y-10">

          {/* 🏷️ TITLE ANIMATION */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold tracking-wide">
              📊 Dashboard Overview
            </h1>
            <p className="text-gray-300 mt-2">
              Real-time insights of your EPMS system
            </p>
          </motion.div>

          {/* 📦 STATS CARDS */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >

            <motion.div
              variants={card}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl"
            >
              <p className="text-gray-300">Employees</p>
              <h2 className="text-4xl font-bold text-blue-400 mt-2">
                {stats.employees}
              </h2>
            </motion.div>

            <motion.div
              variants={card}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl"
            >
              <p className="text-gray-300">Departments</p>
              <h2 className="text-4xl font-bold text-green-400 mt-2">
                {stats.departments}
              </h2>
            </motion.div>

            <motion.div
              variants={card}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl"
            >
              <p className="text-gray-300">Salary Records</p>
              <h2 className="text-4xl font-bold text-purple-400 mt-2">
                {stats.salaries}
              </h2>
            </motion.div>

          </motion.div>

          {/* 🌈 WELCOME BANNER */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 p-8 rounded-2xl shadow-2xl"
          >
            <h2 className="text-2xl font-bold">
              Welcome to EPMS 🚀
            </h2>
            <p className="mt-2 text-white/90">
              Manage employees, departments, and salaries all in one intelligent system.
            </p>
          </motion.div>

          {/* 🦶 FOOTER */}
          <footer className="text-center text-gray-400 text-sm pt-6 border-t border-white/10">
            <p>© {new Date().getFullYear()} EPMS System. All rights reserved.</p>

            <p className="text-xs mt-1">
              Built with React + TailwindCSS ⚡ | GIKONKO TSS
            </p>
          </footer>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;