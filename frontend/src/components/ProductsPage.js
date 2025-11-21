import React, { useState, useEffect } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';
import ImportExportButtons from './ImportExportButtons';
import AddProductModal from './AddProductModal';
import InventoryHistorySidebar from './InventoryHistorySidebar';
import { getProducts, getCategories } from '../services/api';
import './ProductsPage.css';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [products, searchQuery, selectedCategory]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await getProducts();
      setProducts(response.data);
      setFilteredProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
      alert('Failed to fetch products');
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await getCategories();
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const filterProducts = () => {
    let filtered = [...products];

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (product.brand && product.brand.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Apply category filter
    if (selectedCategory) {
      filtered = filtered.filter((product) => product.category === selectedCategory);
    }

    setFilteredProducts(filtered);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleProductUpdated = () => {
    fetchProducts();
  };

  const handleProductDeleted = () => {
    fetchProducts();
    if (selectedProductId) {
      setSelectedProductId(null);
    }
  };

  const handleViewHistory = (productId) => {
    setSelectedProductId(productId);
  };

  const handleCloseHistory = () => {
    setSelectedProductId(null);
  };

  return (
    <div className="products-page">
      <header className="products-header">
        <div className="header-left">
          <SearchBar onSearchChange={handleSearchChange} />
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
          <button
            className="btn btn-primary"
            onClick={() => setIsAddModalOpen(true)}
          >
            Add New Product
          </button>
        </div>
        <div className="header-right">
          <ImportExportButtons onImportSuccess={fetchProducts} />
        </div>
      </header>

      <main className="products-main">
        <div className={`products-content ${selectedProductId ? 'with-sidebar' : ''}`}>
          {loading ? (
            <div className="loading">Loading products...</div>
          ) : (
            <ProductTable
              products={filteredProducts}
              onProductUpdated={handleProductUpdated}
              onProductDeleted={handleProductDeleted}
              onViewHistory={handleViewHistory}
            />
          )}
        </div>

        {selectedProductId && (
          <InventoryHistorySidebar
            productId={selectedProductId}
            onClose={handleCloseHistory}
          />
        )}
      </main>

      {isAddModalOpen && (
        <AddProductModal
          onClose={() => setIsAddModalOpen(false)}
          onProductAdded={handleProductUpdated}
        />
      )}
    </div>
  );
};

export default ProductsPage;

