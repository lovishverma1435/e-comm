// context/CartContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const userId = localStorage.getItem("id:");

  const getCart = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/getCart/${userId}`);
      setCartItems(response.data );
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  // Update cart on load
  useEffect(() => {
    if (userId) getCart();
  }, [userId]);

  const value = {
    cartItems,
    cartLength: cartItems.length,
    refreshCart: getCart,
    setCartItems // optional: use carefully
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
