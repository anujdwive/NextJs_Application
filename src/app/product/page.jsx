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
      <h1>Products</h1>

      <table border='1'>
        <thead>
          <tr>
            <th>Sl.n</th>
            <th>Product Name</th>
            <th>category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.category}</td>
              <td>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}>
                  <button>Edit</button>
                  <button>Delete</button>
                  {/* <Link to={`/admin/users/${user.id}`}>View</Link> */}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan='4'>Total Products: {data?.total}</td>
          </tr>
        </tfoot>
      </table>

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
