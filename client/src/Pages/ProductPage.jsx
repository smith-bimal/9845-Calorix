
import React from "react";
import Navbar from "../components/Navbar";
import background from "../assets/background.png";

const ProductPage = () => {
  return (
    <div className="min-h-screen">
      {/* Background Image */}
      <div
        className="fixed inset-0 w-full h-full bg-cover bg-center -z-10"
        style={{
          backgroundImage: `url(${background})`,
        }}
      />
      
      {/* Navbar Component */}
      <Navbar />
    </div>
  );
};

export default ProductPage;
