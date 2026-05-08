import { Link } from "react-router-dom";

function SideBar () {
    return (
        <div className="w-64 h-screen bg-gray-800 text-white p-5">
            <h2 className="text-2xl text-amber-300 font-bold mb-8 text-center">EPMS</h2>
            <ul className="space-y-4">
                <li><Link to="/Dashboard" className="hover:text-blue-400">Dashboard</Link></li>
                <li><Link to="/Employees" className="hover:text-blue-400">Employees</Link></li>
                <li><Link to="/Departments" className="hover:text-blue-400">Departments</Link></li>
                <li><Link to="/Salaries" className="hover:text-blue-400">Salaries</Link></li>
                <li><Link to="/Reports" className="hover:text-blue-400">Reports</Link></li>
            </ul>
        </div>
    )
}

export default SideBar;