import React from "react";
import ProductItem from "./ProductItem";

export default function ProductList({ products, onGetProduct, onOpenModal }) {
  const handleGetProduct = (product) => {
    onGetProduct(product);
  };
  return (
    <div className="row g-5 ">
      {products.map((product) => {
        return (
          <div key={product.id} className="col-md-4 ">
            <ProductItem
              product={product}
              onGetProduct={handleGetProduct}
              onOpenModal={onOpenModal}
            />
          </div>
        );
      })}
    </div>
  );
}
