import React, { useState } from 'react';
import { updateProduct, deleteProduct } from '../services/api';
import './ProductRow.css';

const ProductRow = ({ product, onProductUpdated, onProductDeleted, onViewHistory }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState({ ...product });
  const [loading, setLoading] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
    setEditedProduct({ ...product });
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedProduct({ ...product });
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      await updateProduct(product.id, editedProduct);
      setIsEditing(false);
      onProductUpdated();
    } catch (error) {
      console.error('Error updating product:', error);
      alert('Failed to update product: ' + (error.response?.data?.error || error.message));
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (window.confirm(`Are you sure you want to delete "${product.name}"?`)) {
      try {
        setLoading(true);
        await deleteProduct(product.id);
        onProductDeleted();
      } catch (error) {
        console.error('Error deleting product:', error);
        alert('Failed to delete product: ' + (error.response?.data?.error || error.message));
      } finally {
        setLoading(false);
      }
    }
  };

  const handleChange = (field, value) => {
    setEditedProduct((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const getStockStatus = (stock) => {
    if (stock === 0) {
      return { text: 'Out of Stock', class: 'out-of-stock' };
    }
    return { text: 'In Stock', class: 'in-stock' };
  };

  const status = getStockStatus(isEditing ? editedProduct.stock : product.stock);

  if (isEditing) {
    return (
      <tr className="editing-row">
        <td>{product.id}</td>
        <td>
          <input
            type="text"
            value={editedProduct.name || ''}
            onChange={(e) => handleChange('name', e.target.value)}
            className="edit-input"
          />
        </td>
        <td>
          <input
            type="text"
            value={editedProduct.unit || ''}
            onChange={(e) => handleChange('unit', e.target.value)}
            className="edit-input"
          />
        </td>
        <td>
          <input
            type="text"
            value={editedProduct.category || ''}
            onChange={(e) => handleChange('category', e.target.value)}
            className="edit-input"
          />
        </td>
        <td>
          <input
            type="text"
            value={editedProduct.brand || ''}
            onChange={(e) => handleChange('brand', e.target.value)}
            className="edit-input"
          />
        </td>
        <td>
          <input
            type="number"
            value={editedProduct.stock || 0}
            onChange={(e) => handleChange('stock', parseInt(e.target.value) || 0)}
            className="edit-input"
            min="0"
          />
        </td>
        <td>
          <span className={`stock-status ${status.class}`}>{status.text}</span>
        </td>
        <td>
          <div className="product-actions">
            <button
              className="btn btn-success"
              onClick={handleSave}
              disabled={loading}
            >
              Save
            </button>
            <button
              className="btn btn-secondary"
              onClick={handleCancel}
              disabled={loading}
            >
              Cancel
            </button>
          </div>
        </td>
      </tr>
    );
  }

  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.unit || '-'}</td>
      <td>{product.category || '-'}</td>
      <td>{product.brand || '-'}</td>
      <td>{product.stock}</td>
      <td>
        <span className={`stock-status ${status.class}`}>{status.text}</span>
      </td>
      <td>
        <div className="product-actions">
          <button
            className="btn btn-secondary"
            onClick={() => onViewHistory(product.id)}
          >
            History
          </button>
          <button
            className="btn btn-primary"
            onClick={handleEdit}
            disabled={loading}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={handleDelete}
            disabled={loading}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ProductRow;

