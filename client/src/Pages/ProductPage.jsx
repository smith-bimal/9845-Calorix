import React, { useState } from "react";
import Navbar from "../components/Navbar";
import background from "../assets/background.png";
import idli from "../assets/idli vada 1.png";
import ProductDetails from "./ProductDetailsPage";

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
      {/* main Component */}

      <ProductDetails/>
    </div>
  );
};

export default ProductPage;
