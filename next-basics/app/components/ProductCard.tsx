import React from "react";
import AddToCart from "./AddToCart";

const ProductCard = () => {
  return (
    <div className="p-5 my-5 bg-sky-400 text-white text-xl cursor-pointer hover:bg-sky-500">
      <h2>ProductCard</h2>
      <AddToCart />
    </div>
  );
};

export default ProductCard;
