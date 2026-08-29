import ProductsListing from "@/components/products/ProductsListing";
import React, { Suspense } from "react";

export const ProductDetails = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return <h1>Product Loaded</h1>;
};

export const CartDetails = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <h1>Cart Loaded</h1>;
};

const Product = async () => {
  const response = await fetch("https://dummyjson.com/products");
  if (!response.ok) {
    throw new Error("Somthing went rong");
  }
  const data = await response.json();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      }}>
      <ProductsListing products={data.products} totalProducts={data.total} />

      <Suspense fallback={<div>Product details loading....</div>}>
        <ProductDetails />
      </Suspense>
      <Suspense fallback={<div>Cart details loading....</div>}>
        <CartDetails />
      </Suspense>
    </div>
  );
};

export default Product;
