import React from "react";
import Navbar from "../components/Navbar";
import { Home } from "lucide-react";
import { useNavigate } from "react-router";

const NotFoundPage = () => {
  const navigate = useNavigate();
  function homeHandle() {
    console.log("Navigating to Home");
    navigate("/");
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#FADA90]/20">
      {/* <Navbar /> */}
      <nav className="relative">
        <div className="max-w-7xl mx-auto py-4">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <a
                href="/"
                className="cursor-pointer font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#cf936e] to-[#674740]"
              >
                CALORIX.
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center min-h-[80vh]">
        {/* Animated 404 Text */}
        <div className="relative">
          <h1 className="text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#cf936e] to-[#674740] animate-pulse">
            404
          </h1>

          {/* Animated circles in background */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-64 h-64 rounded-full border-4 border-[#FADA90] animate-ping opacity-20" />
            <div className="absolute top-0 w-48 h-48 rounded-full border-4 border-[#cf936e] animate-ping opacity-10" />
          </div>
        </div>

        {/* Error Message */}
        <h2 className="mt-8 text-4xl font-semibold text-[#674740] ">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-4 text-lg text-gray-600 text-center max-w-md">
          The page you're looking for has vanished into thin air! Don't worry,
          you can always go back home.
        </p>

        {/* Home Button */}
        <button
          onClick={homeHandle}
          className="mt-8 px-8 py-3 bg-gradient-to-r from-[#cf936e] to-[#674740] text-white rounded-full
                    flex items-center gap-2 transform hover:scale-105 transition-all
                    shadow-lg hover:shadow-xl cursor-pointer"
        >
          <Home className="w-5 h-5" />
          Back to Home
        </button>

        {/* Animated Decorative Elements */}
        <div className="absolute top-1/3 left-20 animate-bounce delay-100">
          <div className="w-4 h-4 rounded-full bg-[#FADA90]" />
        </div>
        <div className="absolute bottom-1/3 right-20 animate-bounce delay-300">
          <div className="w-6 h-6 rounded-full bg-[#cf936e] opacity-50" />
        </div>
        <div className="absolute top-1/4 right-32 animate-bounce delay-500">
          <div className="w-3 h-3 rounded-full bg-[#674740] opacity-30" />
        </div>

        {/* SVG Background Pattern */}
        <div className="absolute bottom-0 left-0 right-0 opacity-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full"
          >
            <path
              fill="#cf936e"
              fillOpacity="1"
              d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,234.7C960,235,1056,181,1152,170.7C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
