import { useState } from "react";
import { ScanLine, X } from "lucide-react";
import LoginCard from "./LoginCard";
import RegisterCard from "./RegisterCard";
import SecondaryBtn from "./SecondaryBtn";
import PrimaryBtn from "./PrimaryBtn";
import PopupLayout from "./PopupLayout";
import QRScanner from "./QRScanner";

const Navbar = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showWhy, setShowWhy] = useState(false);

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
              <p className="font-medium hover:text-neutral-600 cursor-pointer transition-all duration-150" onClick={() => setShowWhy(true)}>Why Calorix?</p>
              <p className="font-medium hover:text-neutral-600 cursor-pointer transition-all duration-150" onClick={() => setShowAbout(true)} > About</p>
              <p className="font-medium hover:text-neutral-600 cursor-pointer transition-all duration-150" onClick={() => setIsScanning(true)}><ScanLine size={28} cursor={"pointer"} /></p>
            </div>

            <div className="flex items-center gap-6">
              <SecondaryBtn onclick={switchToRegister}>Sign up</SecondaryBtn>
              <PrimaryBtn onclick={switchToLogin}>Sign in</PrimaryBtn>
            </div>
          </div>
        </div>
      </nav >

      {showLoginModal && (
        <LoginCard
          onClose={() => setShowLoginModal(false)}
          switchToRegister={switchToRegister}
        />
      )
      }
      {
        showRegisterModal && (
          <RegisterCard
            onClose={() => setShowRegisterModal(false)}
            switchToLogin={switchToLogin}
          />
        )
      }

      {
        isScanning && (
          <PopupLayout>
            <div className="pt-6">
              <div className="relative">
                <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10" width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M47.4116 3C47.4116 4.65685 46.0685 6 44.4116 6H30C16.7452 6 6 16.7452 6 30V41.9591C6 43.616 4.65685 44.9591 3 44.9591V44.9591C1.34315 44.9591 0 43.616 0 41.9591V30C0 13.4315 13.4315 0 30 0H44.4116C46.0685 0 47.4116 1.34315 47.4116 3V3ZM47.4116 297C47.4116 295.343 46.0685 294 44.4116 294H30C16.7452 294 6 283.255 6 270V258.858C6 257.201 4.65685 255.858 3 255.858V255.858C1.34315 255.858 0 257.201 0 258.858V270C0 286.569 13.4315 300 30 300H44.4116C46.0685 300 47.4116 298.657 47.4116 297V297ZM253.406 297C253.406 298.657 254.749 300 256.406 300H270C286.569 300 300 286.569 300 270V258.858C300 257.201 298.657 255.858 297 255.858V255.858C295.343 255.858 294 257.201 294 258.858V270C294 283.255 283.255 294 270 294H256.406C254.749 294 253.406 295.343 253.406 297V297ZM256.406 6C254.749 6 253.406 4.65685 253.406 3V3C253.406 1.34315 254.749 0 256.406 0H270C286.569 0 300 13.4315 300 30V41.9591C300 43.616 298.657 44.9591 297 44.9591V44.9591C295.343 44.9591 294 43.616 294 41.9591V30C294 16.7452 283.255 6 270 6H256.406Z" fill="url(#paint0_linear_52_61)" />
                  <defs>
                    <linearGradient id="paint0_linear_52_61" x1="300" y1="150.409" x2="-6.94823" y2="150.409" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#714F44" />
                      <stop offset="1" stopColor="#D19470" />
                    </linearGradient>
                  </defs>
                </svg>


                {
                  isScanning ?
                    <div className="w-[300px] h-[300px] rounded-[2rem] overflow-hidden relative">
                      <QRScanner setIsScanning={setIsScanning} />
                    </div>
                    :
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" className="opacity-35" alt="QR code" />
                }

                <svg id={`${isScanning ? "scantrail" : ""}`} className="absolute left-0 top-1/2 duration-700 z-10" width="300" height="136" viewBox="0 0 300 136" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="300" height="136" fill="url(#paint0_linear_52_69)" />
                  <defs>
                    <linearGradient id="paint0_linear_52_69" x1="150.351" y1="0" x2="150.351" y2="136" gradientUnits="userSpaceOnUse">
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>

                <svg id={`${isScanning ? "scanning" : ""}`} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-700 z-10" width="300" height="7" viewBox="0 0 300 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="3.5" y1="3.5" x2="296.5" y2="3.5" stroke="url(#paint0_linear_52_67)" strokeWidth="7" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="paint0_linear_52_67" x1="0" y1="7.5" x2="300" y2="7.5" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#D29470" />
                      <stop offset="1" stopColor="#714F44" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="relative z-50 p-1 bg-neutral-600 rounded-full text-white w-fit m-auto mt-8 cursor-pointer" onClick={() => setIsScanning(false)}>
                <X />
              </div>
            </div>
          </PopupLayout>
        )
      }

      {showAbout &&
        <PopupLayout>
          <div className="relative text-justify sm:p-6">
            <h3 className="text-2xl font-semibold mb-6">About Calorix</h3>
            <p>Welcome to Calorix, your ultimate companion for managing your dietary habits effortlessly. Calorix is a cutting-edge web application designed to help you track the calorie content of your meals with just a quick scan of a QR code. Our innovative platform provides detailed calorie information for each dish, including a breakdown of individual ingredients, empowering you to make informed food choices.</p>
            <br />
            <p>With Calorix, you can easily see the calorie breakup of any dish, modify the quantity of individual items, and dynamically update the calorie calculation in real-time. Whether you&apos;re dining out or cooking at home, Calorix ensures that you stay on top of your nutritional goals. Our user-friendly interface and robust backend infrastructure make it simple to manage your dietary habits, making Calorix not just a tool, but a lifestyle companion for healthier living.</p>
            <div className="absolute right-0 top-0 cursor-pointer" onClick={() => setShowAbout(false)}>
              <X />
            </div>
          </div>
        </PopupLayout>
      }

      {showWhy &&
        <PopupLayout>
          <div className="relative text-justify sm:p-6">
            <h3 className="text-2xl font-semibold mb-6">About Calorix</h3>
            <p>In today&apos;s fast-paced world, maintaining a healthy diet can be challenging. Calorix is here to simplify this process by providing a seamless way to track the calorie content of your meals. With just a quick scan of a QR code, users can instantly access detailed calorie information for each dish, including the breakdown of individual ingredients. This innovative approach not only simplifies dietary management but also encourages informed food choices.</p>
            <br />
            <p>Calorix&apos;s dynamic calorie calculation feature ensures that users stay on top of their nutritional goals effortlessly. Whether you&apos;re dining out or cooking at home, Calorix makes it easy to maintain a balanced diet. The real-time updates allow users to see the impact of their food choices instantly, helping them make healthier decisions on the go.</p>
            <br />
            <p>Moreover, Calorix is not just a tool; it&apos;s a lifestyle companion for healthier living. By providing detailed calorie information and real-time updates, it helps users stay informed and make better dietary choices. Whether you&apos;re a fitness enthusiast, a busy professional, or someone trying to make healthier food choices, Calorix is the perfect partner to help you achieve your nutritional goals. Join us on this journey to a healthier, more informed lifestyle with Calorix.</p>
            <div className="absolute right-0 top-0 cursor-pointer" onClick={() => setShowWhy(false)}>
              <X />
            </div>
          </div>
        </PopupLayout>
      }
    </>
  );
};

export default Navbar;