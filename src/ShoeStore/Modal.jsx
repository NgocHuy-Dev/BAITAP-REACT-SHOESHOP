import React from "react";

export default function Modal({ product, onCloseModal }) {
  if (!product) {
    return null;
  }
  return (
    <>
      <div style={{ display: "block" }} className="modal" tabIndex={-1}>
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{product.name}</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={onCloseModal}
              />
            </div>
            <div className="modal-body">
              <tbody>
                <tr>
                  <strong>Price: </strong>
                  {product.price} $
                </tr>
                <tr>
                  <strong>Alias: </strong>
                  {product.alias}
                </tr>
                <tr>
                  <strong>Description: </strong>
                  {product.description}
                </tr>
                <tr>
                  <strong>Note: </strong>
                  {product.shortDescription}
                </tr>
                <tr>
                  <strong>Quantity Available: </strong>
                  {product.quantity}
                </tr>
              </tbody>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onCloseModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal-backdrop fade show"></div>
    </>
  );
}
