"use client";
import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import toast from "react-hot-toast";
import Image from "next/image"; // Import Image component

const EXCHANGE_RATE = 83; // 1 USD = 83 INR, replace with dynamic rate if needed

function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const [discountCode, setDiscountCode] = useState<string>("");
  const [discountAmount, setDiscountAmount] = useState<number>(0);

  const handleApplyDiscount = () => {
    if (discountCode === "SAVE10") {
      setDiscountAmount(0.1); // 10% discount
      toast.success("10% discount applied!", {
        duration: 3000, // Duration in milliseconds
      });
    } else if (discountCode === "FLAT10") {
      setDiscountAmount(10); // $10 off
      toast.success("$10 discount applied!", {
        duration: 3000,
      });
    } else {
      setDiscountAmount(0);
      toast.error("Invalid discount code", {
        duration: 3000,
      });
    }
  };

  const calculateSubtotal = () => {
    return cart
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const calculateTotal = () => {
    const subtotal = parseFloat(calculateSubtotal());
    const discountInUSD =
      discountAmount < 1 ? subtotal * discountAmount : discountAmount;
    const total =
      discountAmount < 1
        ? subtotal * (1 - discountAmount)
        : Math.max(0, subtotal - discountInUSD);

    return total.toFixed(2);
  };

  const convertToINR = (amount: number) => (amount * EXCHANGE_RATE).toFixed(2);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-4">
        <h1 className="text-2xl font-semibold mb-4">Your Cart</h1>
        {cart.length > 0 ? (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-4 border-b pb-4"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={80} // Set width
                height={80} // Set height
                className="object-cover"
              />
              <div className="flex-1 ml-4">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-700">₹{convertToINR(item.price)}</p>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() =>
                    updateQuantity(item.id, Math.max(1, item.quantity - 1))
                  }
                  className="bg-gray-300 text-gray-700 px-2 py-1 rounded-md"
                >
                  -
                </button>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(
                      item.id,
                      Math.max(1, parseInt(e.target.value))
                    )
                  }
                  className="w-16 text-center border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 mx-2 text-black"
                />
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="bg-gray-300 text-gray-700 px-2 py-1 rounded-md"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 ml-4"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
        {cart.length > 0 && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold">Cart Summary</h2>
            <div className="flex justify-between">
              <p>Subtotal:</p>
              <p>₹{convertToINR(parseFloat(calculateSubtotal()))}</p>
            </div>
            <div className="flex justify-between mt-2">
              <input
                type="text"
                placeholder="Discount code"
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
                className="w-48 border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
              />
              <button
                onClick={handleApplyDiscount}
                className="bg-purple-700 text-white p-2 rounded-md"
              >
                Apply
              </button>
            </div>
            <div className="flex justify-between mt-2">
              <p>Discount:</p>
              <p>
                {discountAmount < 1
                  ? `${(discountAmount * 100).toFixed(0)}%`
                  : `₹${convertToINR(discountAmount)}`}
              </p>
            </div>
            <div className="flex justify-between mt-4 text-xl font-semibold">
              <p>Total:</p>
              <p>₹{convertToINR(parseFloat(calculateTotal()))}</p>
            </div>
            <button
              onClick={() => toast.success("Proceeding to checkout...")}
              className="bg-green-500 text-white p-2 mt-4 w-full rounded-md"
            >
              Checkout
            </button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default CartPage;
