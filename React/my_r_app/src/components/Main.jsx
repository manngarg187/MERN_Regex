import React from "react";
import ProductCard from "./ProductCard";
import Feature from "./Feature";

function Main() {
  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <h2>Main Content</h2>

      <ProductCard />
      <Feature />
    </div>
  );
}

export default Main;