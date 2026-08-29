import React, { Suspense } from "react";

export const ProductDetails = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return <h1>Product Loaded</h1>;
};

export const CartDetails = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <h1>Cart Loaded</h1>;
};

const Product = () => {
  return (
    <div>
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
