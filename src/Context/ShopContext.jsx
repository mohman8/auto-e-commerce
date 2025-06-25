import React, { useState, createContext } from 'react';
import data_product from '../Components/Assests/data.js';

export const ShopContext = createContext({
  data_product: null,
  cartItems: {},
  addToCart: () => {},
  removeFromCart: () => {}
});

const getDefaultCart = () => {
  return {};
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    const product = data_product.find(item => item.id === itemId);
    if (!product) return;

    setCartItems((prev) => {
      const existingItem = prev[itemId];
      if (existingItem) {
        return {
          ...prev,
          [itemId]: {
            ...existingItem,
            quantity: existingItem.quantity + 1,
          },
        };
      } else {
        return {
          ...prev,
          [itemId]: {
            ...product,
            quantity: 1,
          },
        };
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const existingItem = prev[itemId];
      if (!existingItem) return prev;

      if (existingItem.quantity <= 1) {
        const updated = { ...prev };
        delete updated[itemId];
        return updated;
      }

      return {
        ...prev,
        [itemId]: {
          ...existingItem,
          quantity: existingItem.quantity - 1,
        },
      };
    });
  };
const getTotalCartAmount = () => {
  return Object.values(cartItems).reduce((total, item) => {
    return total + item.new_price * item.quantity;
  }, 0);
};
//   const getTotalCartAmount =(itemId)=>{
//   let totalAmount=0;
//   for(const item in cartItems){
//     if(cartItems[item]>0){
//       let itemInfo=data_product.find((product)=>product.id===Number(item))
//       totalAmount += itemInfo.new_price * cartItems[item];
//     }
//     return totalAmount;
//   }
// }

  const contextValue = {
    data_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}
