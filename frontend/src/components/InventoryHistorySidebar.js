import React, { useState, useEffect } from 'react';
import { getProductHistory, getProduct } from '../services/api';
import './InventoryHistorySidebar.css';

const InventoryHistorySidebar = ({ productId, onClose }) => {
  const [history, setHistory] = useState([]);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHistory();
    fetchProduct();
  }, [productId]);

  const fetchHistory = async () => {
    try {
      setLoading(true);
      const response = await getProductHistory(productId);
      setHistory(response.data);
    } catch (error) {
      console.error('Error fetching history:', error);
      alert('Failed to fetch inventory history');
    } finally {
      setLoading(false);
    }
  };

  const fetchProduct = async () => {
    try {
      const response = await getProduct(productId);
      setProduct(response.data);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  return (
    <div className="history-sidebar">
      <div className="sidebar-header">
        <h3>Inventory History</h3>
        <button className="sidebar-close" onClick={onClose}>
          ×
        </button>
      </div>
      <div className="sidebar-content">
        {product && (
          <div className="product-info">
            <h4>{product.name}</h4>
            <p>Current Stock: <strong>{product.stock}</strong></p>
          </div>
        )}
        {loading ? (
          <div className="loading">Loading history...</div>
        ) : history.length === 0 ? (
          <div className="no-history">No inventory history available</div>
        ) : (
          <div className="history-list">
            {history.map((record) => (
              <div key={record.id} className="history-item">
                <div className="history-date">{formatDate(record.change_date)}</div>
                <div className="history-change">
                  <span className="old-quantity">{record.old_quantity}</span>
                  <span className="arrow">→</span>
                  <span className="new-quantity">{record.new_quantity}</span>
                </div>
                <div className="history-difference">
                  {record.new_quantity > record.old_quantity ? (
                    <span className="increase">+{record.new_quantity - record.old_quantity}</span>
                  ) : (
                    <span className="decrease">{record.new_quantity - record.old_quantity}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default InventoryHistorySidebar;

