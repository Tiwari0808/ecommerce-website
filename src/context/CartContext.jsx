import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({children}) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((products) => {
      const exitInCart = products.find((item) => item.id === product.id);
      if (exitInCart) {
        return products.map((item) => {
          return item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
      }else{
        return [...products,{...product, quantity:1}]
      }
    });
  };

  const removeFromCart = (id)=>{
    return setCartItems((products)=>{
        const isExist = products.find((item)=>item.id === id);
        if(isExist){
           return isExist.quantity > 1 ? products.map((item)=>{
                return item.id === id ? {...item,quantity:item.quantity -1} : item
            }) : products.filter((item)=> item.id !== id)
        }
        return products
    })
  }

  const increaseCartItem = (id)=>{
    setCartItems((cartProducts)=>{
      const isExist = cartProducts.find((item)=>item.id === id);
      if(isExist){
      return  cartProducts.map((item)=>{
          return item.id === id ? {...item,quantity:item.quantity + 1} : item
        })
      }
      return cartProducts
    })
  }

  return (
    <CartContext.Provider value={{cartItems,addToCart,removeFromCart,increaseCartItem}}>
        {children}
    </CartContext.Provider>
  )
};

export default CartProvider
export const useCart = ()=> useContext(CartContext)