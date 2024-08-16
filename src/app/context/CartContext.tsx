// src/app/context/CartContext.tsx
"use client";
import React, { createContext, useReducer, useContext, ReactNode } from "react";

// Define the types for the cart item and context
interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
}

// Initialize the context with an empty value or undefined
const CartContext = createContext<CartContextType | undefined>(undefined);

const cartReducer = (state: CartItem[], action: any) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // Check if the item already exists in the cart
      const existingItemIndex = state.findIndex(
        (item) => item.id === action.product.id
      );
      if (existingItemIndex >= 0) {
        // Update quantity if item exists
        return state.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // Add new item if not exists
      return [...state, { ...action.product, quantity: 1 }];
    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.id);
    case "UPDATE_QUANTITY":
      return state.map((item) =>
        item.id === action.id ? { ...item, quantity: action.quantity } : item
      );
    default:
      return state;
  }
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addToCart = (product: CartItem) => {
    dispatch({ type: "ADD_TO_CART", product });
  };

  const removeFromCart = (id: number) => {
    dispatch({ type: "REMOVE_FROM_CART", id });
  };

  const updateQuantity = (id: number, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", id, quantity });
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
