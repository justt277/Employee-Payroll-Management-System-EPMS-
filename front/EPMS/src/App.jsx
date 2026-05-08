import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard.jsx";
import EmployeePage from './Pages/EmployeePage.jsx';
import DepartmentPage from './Pages/DepartmentPage.jsx';
import SalaryPage from './Pages/SalaryPage.jsx';
import Reports from './Pages/Report.jsx';
import SignUp from "./Pages/SignUp.jsx";
import ProtectedRoute from './Components/ProtectedRoute.jsx';
import FrontPage from "./Pages/FrontPage.jsx";
import NotificationsPage from "./Pages/NotificationsPage.jsx";

function App () {
  return (
    <div className="App-wrapper rounded-lg shadow-[0_10px_40px_rgba(255 , 255 , 255 , 0.2)] overflow-hidden">
      <Routes>
        <Route path="/" element={ <FrontPage/>}/>
        <Route path="/login" element={ <Login/>}/>
        <Route path="/signup" element={ <SignUp/>}/>
        
        <Route path="signin" to={ <Navigate to="/login"/>}/>

        <Route path="/Dashboard" element={
          <ProtectedRoute><Dashboard/></ProtectedRoute>
        }/>
        <Route path="/Employees" element={
          <ProtectedRoute><EmployeePage /></ProtectedRoute>
        }/>
        <Route path="/Departments" element={
          <ProtectedRoute><DepartmentPage /></ProtectedRoute>
        }/>
        <Route path="/Salary" element={
          <ProtectedRoute>< SalaryPage/></ProtectedRoute>
        }/>
        <Route path="/reports" element={
          <ProtectedRoute> <Reports/></ProtectedRoute>
        }/>
        <Route
        path="/notifications"
        element={<ProtectedRoute><NotificationsPage /></ProtectedRoute>}
        />
      </Routes>
    </div>
  )
}

export default App;