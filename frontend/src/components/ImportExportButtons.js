import React, { useRef } from 'react';
import { importProducts, exportProducts } from '../services/api';
import './ImportExportButtons.css';

const ImportExportButtons = ({ onImportSuccess }) => {
  const fileInputRef = useRef(null);

  const handleExport = async () => {
    try {
      const response = await exportProducts();
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'products.csv');
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
      alert('Products exported successfully!');
    } catch (error) {
      console.error('Error exporting products:', error);
      alert('Failed to export products');
    }
  };

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.name.endsWith('.csv')) {
      alert('Please select a CSV file');
      return;
    }

    try {
      const response = await importProducts(file);
      alert(
        `Import completed!\nAdded: ${response.data.added}\nSkipped: ${response.data.skipped}`
      );
      onImportSuccess();
    } catch (error) {
      console.error('Error importing products:', error);
      alert('Failed to import products: ' + (error.response?.data?.error || error.message));
    } finally {
      // Reset file input
      e.target.value = '';
    }
  };

  return (
    <div className="import-export-buttons">
      <input
        type="file"
        ref={fileInputRef}
        accept=".csv"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      <button className="btn btn-secondary" onClick={handleImportClick}>
        Import
      </button>
      <button className="btn btn-secondary" onClick={handleExport}>
        Export
      </button>
    </div>
  );
};

export default ImportExportButtons;

