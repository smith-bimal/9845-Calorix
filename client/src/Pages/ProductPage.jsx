import { useState } from 'react';
import LoginCard from '../components/LoginCard';
import RegisterCard from '../components/RegisterCard';
import background from '../assets/background.png';

const ProductPage = () => {
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
    <div className="min-h-screen">
      {/* Background Image */}
      <div
        className="fixed inset-0 w-full h-full bg-cover bg-center -z-10"
        style={{
          backgroundImage: `url(${background})`,
        }}
      />

      {/* Navbar */}
      <nav className="relative bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-white">Logo</span>
            </div>

            <div className="flex space-x-4">
              <button
                onClick={() => setShowLoginModal(true)}
                className="text-white hover:bg-white hover:text-black px-6 py-2 rounded-md text-sm font-medium transition-colors border border-white"
              >
                Login
              </button>
              <button
                onClick={() => setShowRegisterModal(true)}
                className="bg-white text-black px-6 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </nav>


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
    </div>
  );
};

export default ProductPage;