import React from "react";

export default function ProductItem({ product, onGetProduct, onOpenModal }) {
  const handleClickDetail = () => {
    onGetProduct(product);
    onOpenModal();
  };
  return (
    <div className="card product-list">
      <img
        className="card-img"
        src={product.image}
        alt="product"
        width="100%"
      />
      <div className="card-body">
        <h3 className="card-title">{product.name}</h3>
        <p className="card-text">{product.price}$</p>
        <button className="btn btn-success">Add to Cart</button>
        <button
          type="button"
          className="btn btn-primary ms-2"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={() => handleClickDetail()}
        >
          Detail
        </button>
      </div>
    </div>
  );
}
