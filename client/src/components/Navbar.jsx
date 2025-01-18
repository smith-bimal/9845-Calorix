
import React, { useState } from "react";
import { ScanQrCode } from "lucide-react";
import LoginCard from "./LoginCard";
import RegisterCard from "./RegisterCard";

const Navbar = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const switchToRegister = () => {
    setShowLoginModal(false);
    setShowRegisterModal(true);
  };

  const switchToLogin = () => {
    setShowRegisterModal(false);
    setShowLoginModal(true);
  };

  return (
    <>
      <nav className="relative">
        <div className="max-w-7xl mx-auto py-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <span className="font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#cf936e] to-[#674740]">
                CALORIX.
              </span>
            </div>

            {/* Center Items */}
            <div className="flex items-center justify-around mr-8">
              <button
                className="p-3 hover:bg-gray-100 rounded-full mx-8"
                style={{
                  boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`,
                }}
              >
                <ScanQrCode size={24} />
              </button>
              <a href="#why" className="text-black hover:text-gray-600 mr-10">
                Why Calorix?
              </a>
              <a
                href="#about"
                className="text-black font-medium hover:text-gray-600 mr-32"
              >
                About
              </a>
              <div className="flex items-center space-x-10">
                <button className="px-6 py-1.5 bg-black text-[#FADA90] border border-[#FADA90] rounded-full hover:bg-gray-100">
                  About
                </button>
                <button
                  onClick={() => setShowLoginModal(true)}
                  className="px-6 py-1.5 bg-[#FADA90] text-black rounded-full hover:bg-[#f5d4b3] transition-colors"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Modals */}
      {showLoginModal && (
        <LoginCard
          onClose={() => setShowLoginModal(false)}
          switchToRegister={switchToRegister}
        />
      )}
      {showRegisterModal && (
        <RegisterCard
          onClose={() => setShowRegisterModal(false)}
          switchToLogin={switchToLogin}
        />
      )}
    </>
  );
};

export default Navbar;