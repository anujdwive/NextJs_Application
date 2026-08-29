import React from "react";

const ProductsListing = ({ products, totalProducts }) => {
  return (
    <div>
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
          {products.map((product) => (
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
            <td colSpan='4'>Total Products: {totalProducts}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ProductsListing;
