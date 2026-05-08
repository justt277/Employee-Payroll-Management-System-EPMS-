import { useNavigate, useLocation, Link } from "react-router-dom";
import { useNotification } from "../context/NotificationContext";

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ THIS WAS MISSING
  const { notifications } = useNotification();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/", { replace: true });
  };

  const getTitle = () => {
    switch (location.pathname) {
      case "/dashboard":
        return "Dashboard";
      case "/employees":
        return "Employees";
      case "/departments":
        return "Departments";
      case "/salary":
        return "Salary";
      case "/reports":
        return "Reports";
      default:
        return "EPMS";
    }
  };

  return (
    <nav className="w-400 bg-gray-800 text-white shadow-md px-6 py-4 flex justify-between items-center">

      <h1 className="text-xl font-semibold text-gray-200">
        {getTitle()}
      </h1>

      <div className="flex items-center gap-4">

        {/* 🔔 NOTIFICATIONS */}
        <Link to="/notifications" className="relative text-xl">
          🔔

          {notifications.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-2 rounded-full">
              {notifications.length}
            </span>
          )}
        </Link>

        {/* LOGOUT */}
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition"
        >
          Logout
        </button>

      </div>
    </nav>
  );
}

export default NavBar;