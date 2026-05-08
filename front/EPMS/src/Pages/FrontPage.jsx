import { Link } from "react-router-dom";

function FrontPage() {
  return (
    <div className="relative h-screen w-300 overflow-hidden">

      {/* 🎥 BACKGROUND VIDEO */}
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
      >
        <source src="/video/EPMS.mp4" type="video/mp4" />
      </video>

      {/* 🌑 DARK OVERLAY (for readability) */}
      <div className="absolute w-full h-full bg-black/60"></div>

      {/* 🧭 NAVBAR */}
      <nav className="relative z-10 flex justify-between items-center p-6 text-white">
        
        {/* 🏷️ LOGO */}
        <h1 className="text-2xl font-bold tracking-wide">
          EPMS
        </h1>

        {/* 🔘 NAV BUTTONS */}
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/login" className="bg-green-500 text-white hover:bg-green-600 px-4 py-2 rounded">
            Login
          </Link>
          <Link to="/signup" className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">
            Signup
          </Link>
        </div>
      </nav>

      {/* ✨ HERO SECTION */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
        
        <h1 className="text-5xl font-bold mb-4">
          Manage Employees Like a Pro
        </h1>

        <p className="max-w-xl text-lg mb-6">
A powerful and smart parking management system designed for simplicity, speed, and control. It enables efficient organization of parking spaces, smooth vehicle tracking, and seamless entry and exit management to reduce congestion and improve overall flow.

Beyond parking operations, the system also supports essential administrative functions such as user management, reporting, and real-time monitoring, helping organizations maintain order, security, and full control over their parking facilities with ease and reliability.
        </p>

        {/* 🚀 CTA BUTTONS */}
        <div className="space-x-4">
          <Link
            to="/login"
            className="bg-green-500 px-6 py-3 rounded-lg hover:bg-green-600"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600"
          >
            Get Started
          </Link>
        </div>

      </div>
    </div>
  );
}

export default FrontPage;