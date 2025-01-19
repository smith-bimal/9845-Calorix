import { useState } from "react";
import { ScanLine } from "lucide-react";
import LoginCard from "./LoginCard";
import RegisterCard from "./RegisterCard";
import SecondaryBtn from "./SecondaryBtn";
import PrimaryBtn from "./PrimaryBtn";

const Navbar = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const switchToRegister = () => {
    setShowLoginModal(false);
    setShowRegisterModal(true);
  };

  const switchToLogin = () => {
    setShowLoginModal(true);
    setShowRegisterModal(false);
  };

  return (
    <>
      <nav>
        <div className="mx-auto py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="font-bold text-[2.5rem] text-transparent bg-clip-text bg-gradient-to-r from-[#cf936e] to-[#674740]">
                CALORIX.
              </span>
            </div>

            <div className="flex items-center justify-center gap-10">
              <p className="font-medium hover:text-neutral-600 cursor-pointer transition-all duration-150">Why Calorix?</p>
              <p className="font-medium hover:text-neutral-600 cursor-pointer transition-all duration-150">About</p>
              <p className="font-medium hover:text-neutral-600 cursor-pointer transition-all duration-150"><ScanLine size={28} cursor={"pointer"} /></p>
            </div>

            <div className="flex items-center gap-6">
              <SecondaryBtn onclick={switchToRegister}>Sign up</SecondaryBtn>
              <PrimaryBtn onClick={switchToLogin}>Sign in</PrimaryBtn>
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
    </>
  );
};

export default Navbar;