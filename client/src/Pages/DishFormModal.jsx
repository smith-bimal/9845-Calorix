import React, { useState,useEffect } from "react";
import { Camera, Minus, Plus, X } from "lucide-react";
import apiRequest from "../lib/apiRequest"

const DishFormModal = ({ isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  // Sample items
  const [selectedItem, setSelectedItem] = useState([0]);
  useEffect(() => {
    apiRequest.get('/items')
      .then(res => {
        setSelectedItem(res.data.items);
      })
  }, [])

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
  const [items, setItems] = useState([
    { name: "Rice", calories: "150 Kcal" },
    { name: "Pickle", calories: "15 Kcal" },
  ]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />

      {/* Modal Content */}
      <div className="relative  bg-white rounded-lg p-4 max-w-md w-full  z-10">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 rounded-full p-1 hover:bg-gray-100"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="space-y-4">
          {/* Image Upload */}
          <div className="flex flex-col rounded-xl items-center py-8 mx-12 shadow-[0_4px_4px_0_#0000001f,_inset_1px_0_4px_rgba(0,0,0,0.11)]">
            <Camera className="w-12 h-12 " />

            <span className="text-xs text-gray-600">
              Upload the picture of your dish
            </span>
          </div>

          {/* Dish Name */}
          <div className="mx-auto w-3/4">
            <input
              type="text"
              placeholder="Name"
              className="  px-[3.8rem] py-2 rounded-xl shadow-[0_4px_4px_0_#0000001f,_inset_1px_0_4px_rgba(0,0,0,0.11)] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FADA90]"
            />
          </div>

          {/* Items Section */}
          <div className="space-y-3 m-auto w-3/4">
            <div className="flex justify-between ">
              {/* Header for Items */}
              <div>
                <div className="text-sm font-semibold">Items</div>
                <select
                  className="border border-gray-300 px-4 rounded-xl shadow-[0_4px_4px_0_#0000001f,_inset_1px_0_4px_rgba(0,0,0,0.11)] p-1"
                  value={selectedItem}
                  onChange={(e) => setSelectedItem(e.target.value)}
                >
                  {selectedItem.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              {/* Header for Quantity */}
              <div>
                <div className="text-sm font-semibold">Quantity</div>
                <div className="flex items-center rounded-xl shadow-[0_4px_4px_0_#0000001f,_inset_1px_0_4px_rgba(0,0,0,0.11)]">
                  <button onClick={handleDecrease} className="  px-2">
                    -
                  </button>
                  <span className="mx-2">{quantity}</span>
                  <button onClick={handleIncrease} className=" px-2">
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="text-center">  
  <button className="py-1.5 px-8 bg-[#FADA90] rounded-full hover:bg-[#f5d4b3] transition-colors text-sm">  
    Add Items  
  </button>  
</div>

          </div>

          {/* Items List */}
          <div className="space-y-2 rounded-xl p-8 mx-10 shadow-[0_4px_4px_0_#0000001f,_inset_1px_0_4px_rgba(0,0,0,0.11)]">
            <h3 className="text-center text-xs text-gray-600 ">Items List</h3>
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-medium">
                <span>Item Name</span>
                <span>Calories</span>
              </div>
              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-1 border-b border-gray-200 text-sm"
                >
                  <span>{item.name}</span>
                  <div className="flex items-center space-x-3">
                    <span>{item.calories}</span>
                    <button className="p-1 rounded-full hover:bg-gray-100">
                      <Minus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">  
  <button className="py-1.5 px-8 bg-[#FADA90] rounded-full hover:bg-[#f5d4b3] transition-colors text-sm">  
    Add Dish  
  </button>  
</div>
        </div>
      </div>
    </div>
  );
};

export default DishFormModal;
