// src/app/products/page.tsx
"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard"; // Adjust the path if necessary
import { useCart } from "../context/CartContext"; // Ensure this import is correct
import Navbar from "../components/Navbar"; // Import the Navbar component
import Footer from "../components/Footer"; // Import the Footer component
import Loader from "../components/Loadingbar"; // Import the Loader component
import { FaSearch, FaFilter } from "react-icons/fa"; // Import the icons

function ProductsPage() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("https://fakestoreapi.com/products");
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = (e) => {
    setSortOption(e.target.value);
  };

  const filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "price-asc") {
        return a.price - b.price;
      } else if (sortOption === "price-desc") {
        return b.price - a.price;
      } else if (sortOption === "title-asc") {
        return a.title.localeCompare(b.title);
      } else if (sortOption === "title-desc") {
        return b.title.localeCompare(a.title);
      }
      return 0;
    });

  return (
    <>
      <Navbar />
      <div className="p-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div className="relative w-full md:w-auto mb-2 md:mb-0 md:mr-4">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={handleSearch}
              className="border border-gray-300 p-2 pl-10 rounded text-black w-full"
            />
            <FaSearch className="absolute left-3 top-3 text-black" />
          </div>
          <div className="relative w-full md:w-auto">
            <select
              value={sortOption}
              onChange={handleSort}
              className="border border-gray-300 p-2 pl-10 rounded text-black w-full"
            >
              <option value="" className="text-black">
                Sort by
              </option>
              <option value="price-asc" className="text-black">
                Price: Low to High
              </option>
              <option value="price-desc" className="text-black">
                Price: High to Low
              </option>
              <option value="title-asc" className="text-black">
                Title: A-Z
              </option>
              <option value="title-desc" className="text-black">
                Title: Z-A
              </option>
            </select>
            <FaFilter className="absolute left-3 top-3 text-black" />
          </div>
        </div>
        {loading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default ProductsPage;
