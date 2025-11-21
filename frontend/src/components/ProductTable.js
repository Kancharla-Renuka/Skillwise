import React, { useState } from 'react';
import ProductRow from './ProductRow';
import './ProductTable.css';

const ProductTable = ({ products, onProductUpdated, onProductDeleted, onViewHistory }) => {
  return (
    <div className="product-table-container">
      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Unit</th>
            <th>Category</th>
            <th>Brand</th>
            <th>Stock</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan="8" className="no-products">
                No products found
              </td>
            </tr>
          ) : (
            products.map((product) => (
              <ProductRow
                key={product.id}
                product={product}
                onProductUpdated={onProductUpdated}
                onProductDeleted={onProductDeleted}
                onViewHistory={onViewHistory}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;

