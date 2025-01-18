import React, { useState } from 'react';

import idli from "../assets/idli vada 1.png";

const ProductDetails = () => {
  const [quantities, setQuantities] = useState({
    Idli: 1,
    Vada: 1,
    Sambhar: 1,
    Chutney: 1
  });

  const description = "An Idli Vada Combo typically includes soft, steamed rice cakes (idli) and crispy, deep-fried savory doughnuts (vadas), often served with coconut chutney and sambar. It's a popular South Indian breakfast that's both delicious and nutritious.";

  const handleQuantityChange = (item, change) => {
    setQuantities(prev => ({
      ...prev,
      [item]: Math.max(0, prev[item] + change)
    }));
  };

  const calculateTotalCalories = () => {
    return (
      quantities.Idli * 75 +
      quantities.Vada * 200 +
      quantities.Sambhar * 200 +
      quantities.Chutney * 50
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        {/* Left side - Text content */}
        <div className="flex-1 space-y-6">
          <h1 className="text-5xl font-bold mb-4">Idli Vada Combo</h1>
          <p className="text-gray-600 mb-8">{description}</p>

          <div className="space-y-4">
           
            {Object.entries({
              'Idli': '(75 kcal)',
              'Vada': '(200 kcal)',
              'Sambhar': '(200 kcal)',
              'Chutney': '(50 kcal)'
            }).map(([item, calories]) => (
              <div key={item} className="flex items-center justify-between">
                <div className="flex-1">
                  <span className="text-xl">{item}</span>
                  <span className="text-gray-500 ml-2">{calories}</span>
                </div>
                <div className="flex items-center rounded-lg gap-4" style={{
                  boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`,
                }}>
                  <button
                    onClick={() => handleQuantityChange(item, -1)}
                    className="w-8 h-8   flex items-center justify-center hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="w-8 text-center">{quantities[item]}</span>
                  <button
                    onClick={() => handleQuantityChange(item, 1)}
                    className="w-8 h-8    flex items-center justify-center hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-4 mt-8">
            <button className="px-6 py-2 bg-yellow-200 rounded-full hover:bg-yellow-300 transition-colors">
              Save preference
            </button>
            <button className="px-6 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
              Generate QR
            </button>
          </div>
        </div>

        {/* Right side - Image and calories */}
        <div className="flex-1 relative">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={idli}
              alt="Idli Vada Combo"
              className="w-250 h-auto"
            />
            <div className="absolute bottom-0 right-0 bg-black text-white p-6 rounded-tl-[4rem]">
              <div className="text-right">
                <div className="text-sm">Calories</div>
                <div className="text-4xl font-bold">{calculateTotalCalories()}</div>
                <div className="text-xl">kcal</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;