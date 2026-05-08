import { Link } from "react-router-dom";

function FrontPage() {
  return (
    <div className="relative h-screen w-300 overflow-hidden text-white">

      {/* 🎥 BACKGROUND VIDEO */}
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover scale-105"
      >
        <source src="/video/EPMS.mp4" type="video/mp4" />
      </video>

      {/* 🌑 DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      {/* 🧭 NAVBAR */}
      <nav className="relative z-10 flex justify-between items-center px-8 py-6">

        {/* LOGO */}
        <h1 className="text-3xl font-bold tracking-widest text-amber-300">
          EPMS
        </h1>

        {/* NAV LINKS */}
        <div className="flex items-center gap-4 text-sm">

          <Link
            to="/"
            className="text-gray-300 hover:text-white transition"
          >
            Home
          </Link>

          <Link
            to="/login"
            className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg shadow-md transition"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg shadow-md transition"
          >
            Signup
          </Link>
        </div>
      </nav>

      {/* ✨ HERO SECTION */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-6">

        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight max-w-3xl">
          Manage Employees Like a <span className="text-blue-400">Pro</span>
        </h1>

        <p className="mt-6 max-w-2xl text-gray-200 text-base md:text-lg leading-relaxed">
          A smart system designed for efficiency, control, and simplicity.  
          Manage employees, departments, and salaries in one powerful dashboard.

          <span className="block mt-3 text-gray-300 text-sm">
            Built for modern organizations that value speed, clarity, and structure.
          </span>
        </p>

        {/* 🚀 CTA BUTTONS */}
        <div className="mt-8 flex gap-4">

          <Link
            to="/login"
            className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl font-semibold shadow-lg transition transform hover:scale-105"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl font-semibold shadow-lg transition transform hover:scale-105"
          >
            Get Started
          </Link>

        </div>
      </div>
    </div>
  );
}

export default FrontPage;