//AppContext.js
import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useCart = () => {
  return useContext(AppContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <AppContext.Provider value={{ cartItems, addToCart, clearCart }}>
      {children}
    </AppContext.Provider>
  );
};
