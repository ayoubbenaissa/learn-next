"use client";
import React from "react";

const AddToCart = () => {
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        console.log(" ** A2C ** ");
      }}
    >
      AddToCart
    </button>
  );
};

export default AddToCart;
