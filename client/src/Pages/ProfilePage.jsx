import React from "react";
import { MoreVertical, ScanQrCode } from "lucide-react";
import background from "../assets/background.png";
import idli from "../assets/idli vada 1.png";
import { UserRound } from "lucide-react";

const ProfilePage = () => {
  const preferredDishes = [
    { name: "Veg Thali", calories: 1170 },
    { name: "Idli Vada combo", calories: 425 },
    { name: "Idli sambhar", calories: 225 },
  ];

  const recentSearches = [
    { name: "Masala Dosa", image: idli },
    { name: "Dal Rice", image: idli },
    { name: "Idli Sambhar", image: idli },
  ];

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
      <nav className="relative px-4 md:px-0">
        <div className="max-w-7xl mx-auto py-4">
          <div className="flex flex-col md:flex-row md:justify-between items-center space-y-4 md:space-y-0 md:h-20">
            <div className="flex items-center">
              <span className="font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#cf936e] to-[#674740]">
                CALORIX.
              </span>
            </div>

            <div className="flex items-center justify-center md:justify-around md:mr-8">
              <div className="flex items-center space-x-4 md:space-x-10">
                <button
                  className="p-3 border-2 border-gray-500 rounded-full md:mx-12"
                  style={{
                    boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`,
                  }}
                >
                  <ScanQrCode color="white" size={20} />
                </button>
                <button className="px-6 py-1.5 bg-[#FADA90] text-black rounded-full hover:bg-[#f5d4b3] transition-colors">
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 md:px-0">
        <div className="flex flex-col md:flex-row md:justify-around py-10">
          {/* Left Section - Profile */}
          <div className="mb-8 md:mb-0 md:mr-12 md:px-8">
            <div className="flex flex-col items-center">
              {/* Profile Image */}
              <div 
                className="w-32 h-32 bg-gray-200 rounded-full border-4 border-white"
                style={{boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`}}
              >
                <img
                  src={idli}
                  alt="Profile"
                  className="w-full h-full rounded-full"
                />
              </div>

              {/* Profile Info */}
              <h1 className="text-2xl font-bold mt-4 mb-1">Jane Doe</h1>
              <p className="text-black mb-6">jane.doe@example.com</p>

              {/* Add Dishes Button */}
              <button
                className="bg-[#FADA90] px-10 py-2 rounded-full w-full md:w-auto"
                style={{
                  boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`,
                }}
              >
                Add your dishes
              </button>

              <h2 className="text-gray-500 py-4">Saved dishes</h2>
              <div className="space-y-2 w-full">
                {recentSearches.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 border-b-2 border-gray-200"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section - Preferred Dishes */}
          <div className="w-full md:w-auto md:mr-16">
            <div className="bg-white rounded-3xl shadow-lg mb-4 p-6 md:p-10 overflow-x-auto">
              <h1 className="text-gray-500 font-semibold text-center mb-2">
                Your preferred dishes
              </h1>

              {/* Table Header */}
              <div className="border-b-2 border-gray-200 grid grid-cols-3 gap-4 mb-2 font-semibold text-black min-w-[500px]">
                <div>Dish Name</div>
                <div>Calories</div>
                <div className="text-center">Actions</div>
              </div>

              {/* Table Content */}
              <div className="space-y-2 text-gray-600 min-w-[500px]">
                {preferredDishes.map((dish, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-3 gap-4 items-center border-b-2 border-gray-200"
                  >
                    <div className="font-medium">{dish.name}</div>
                    <div>{dish.calories} Kcal</div>
                    <div className="flex justify-center">
                      <button className="hover:bg-gray-100 p-1 rounded-full">
                        <MoreVertical className="w-5 h-5 text-gray-600" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8 overflow-x-auto">
              <h2 className="text-gray-500 font-semibold text-center mb-2">
                Your dishes
              </h2>

              {/* Table Header */}
              <div className="grid grid-cols-3 gap-4 mb-2 font-semibold text-black border-b-2 border-gray-200 min-w-[500px]">
                <div>Dish Name</div>
                <div>Calories</div>
                <div className="text-center">Actions</div>
              </div>

              {/* Table Content */}
              <div className="space-y-2 text-gray-600 min-w-[500px]">
                {preferredDishes.map((dish, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-3 gap-4 items-center border-b-2 border-gray-200"
                  >
                    <div className="font-medium">{dish.name}</div>
                    <div>{dish.calories} Kcal</div>
                    <div className="flex justify-center">
                      <button className="hover:bg-gray-100 p-1 rounded-full">
                        <MoreVertical className="w-5 h-5 text-gray-600" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;