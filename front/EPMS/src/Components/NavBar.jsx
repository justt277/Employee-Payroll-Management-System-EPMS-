import { use } from "react";
import { Link, useNavigate } from "react-router-dom";

function NavBar () {
    const Navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        Navigate('/', { replace: true });
    }
    return (
        <nav className="w-full bg-amber-500 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
            <Link to="/Employee">Employee</Link>
            <Link to="/Department">Department</Link>
            <Link to="/Salary">Salary</Link>
            <Link to="/Report">Report</Link>
            <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">
                Logout
            </button>
        </div>
        </nav>
    );
}

export default NavBar;