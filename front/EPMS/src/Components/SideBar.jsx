import { Link, useLocation } from "react-router-dom";

function SideBar() {
  const location = useLocation();

  const linkStyle = (path) =>
    `block px-4 py-2 rounded-lg transition ${
      location.pathname === path
        ? "bg-blue-600 text-white"
        : "text-gray-300 hover:bg-gray-700 hover:text-white"
    }`;

  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-6 flex flex-col">

      {/* Logo */}
      <h2 className="text-3xl font-bold text-amber-300 mb-10 text-center tracking-wide">
        EPMS
      </h2>

      {/* Navigation */}
      <nav className="space-y-3">
        <Link to="/dashboard" className={linkStyle("/dashboard")}>
          📊 Dashboard
        </Link>

        <Link to="/employees" className={linkStyle("/employees")}>
          👤 Employees
        </Link>

        <Link to="/departments" className={linkStyle("/departments")}>
          🏢 Departments
        </Link>

        <Link to="/salary" className={linkStyle("/salary")}>
          💰 Salary
        </Link>

        <Link to="/reports" className={linkStyle("/reports")}>
          📄 Reports
        </Link>
      </nav>
    </div>
  );
}

export default SideBar;