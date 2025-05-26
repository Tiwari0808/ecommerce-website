import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./auth-context";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const {email} = useContext(AuthContext)
  const baseURL = "https://crudcrud.com/api/13bfecd408294db0aa871462f4d146b5";
  const userCartURL = `${baseURL}/cart${email?.replace(/[@.]/g, "")}`;

  
  useEffect(() => {
    const fetchCart = async () => {
      if (!email) return; // wait until email is available
      try {
        const response = await axios.get(userCartURL);
        setCartItems(response.data); // backend sends array
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCart();
  }, [email]); // re-run only when email is available


  const addToCart = async (product) => {
    try {
      setCartItems((products) => {
        const exitInCart = products.find((item) => item.id === product.id);
        if (exitInCart) {
          return products.map((item) => {
            return item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item;
          });
        } else {
          return [...products, { ...product, quantity: 1 }];
        }
      });
      let res = await axios.post(userCartURL,{...product,quantity:1})
       console.log("Added to backend:", res.data);
      alert(res.data)
    } catch (error) {
      console.log(error);
      
    }
  };

  const removeFromCart = (id) => {
    return setCartItems((products) => {
      const isExist = products.find((item) => item.id === id);
      if (isExist) {
        return isExist.quantity > 1
          ? products.map((item) => {
              return item.id === id
                ? { ...item, quantity: item.quantity - 1 }
                : item;
            })
          : products.filter((item) => item.id !== id);
      }
      return products;
    });
  };

  const increaseCartItem = (id) => {
    setCartItems((cartProducts) => {
      const isExist = cartProducts.find((item) => item.id === id);
      if (isExist) {
        return cartProducts.map((item) => {
          return item.id === id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
      }
      return cartProducts;
    });
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, increaseCartItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
export const useCart = () => useContext(CartContext);
