import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";

const EXCHANGE_RATE = 83; // 1 USD = 83 INR, replace with dynamic rate if needed

interface Product {
  id: number; // Updated to number to match ProductsPage
  title: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const convertToINR = (amount: number) => (amount * EXCHANGE_RATE).toFixed(2);

function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product);
    toast.success(`${product.title} added to cart!`, {
      position: "bottom-right",
      duration: 2000,
    });
  };

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md p-4 cursor-pointer w-64 h-80 flex flex-col"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="flex-grow overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-40 object-cover mb-2 rounded-md"
        />
        <h3 className="text-lg font-semibold mb-1 line-clamp-2 overflow-hidden text-black">
          {product.title}
        </h3>
        <p className="text-gray-600 mb-2">₹{convertToINR(product.price)}</p>
      </div>
      <motion.button
        className={`w-full py-2 rounded-md transition-colors ${
          isHovered
            ? "bg-purple-700 text-white"
            : "bg-purple-100 text-purple-700"
        }`}
        whileTap={{ scale: 0.95 }}
        onClick={handleAddToCart} // Handle button click separately
      >
        {isHovered ? "Add to Cart" : "View Product"}
      </motion.button>
    </motion.div>
  );
}

export default ProductCard;
