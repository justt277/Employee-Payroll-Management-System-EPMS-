import { useNavigate, useLocation } from "react-router-dom";
import { useNotification } from "../context/NotificationContext";

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/", { replace: true });
  };

  const { notifications } = useNotification();

  // convert route to page title
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
    <nav className="w-full bg-gray-800 text-white shadow-md px-6 py-4 flex justify-between items-center">

      {/* Page Title */}
      <h1 className="text-xl font-semibold text-gray-200">
        {getTitle()}
      </h1>

      {/* Right side actions */}
      <div className="flex items-center gap-4">

        {/* optional: notifications placeholder */}
        <button className="text-gray-300 hover:text-white">
<div className="relative">
  <button className="text-xl">🔔</button>

  {notifications.length > 0 && (
    <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-2 rounded-full">
      {notifications.length}
    </span>
  )}

  <div className="absolute right-0 mt-3 w-80 bg-gray-900 text-white rounded-xl shadow-lg overflow-hidden z-50">
    {notifications.slice(0, 5).map((n) => (
      <div key={n.id} className="p-3 border-b border-white/10">
        <p className="text-sm">{n.message}</p>
        <span className="text-xs text-gray-400">{n.time}</span>
      </div>
    ))}
  </div>
</div>
        </button>

        {/* logout */}
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