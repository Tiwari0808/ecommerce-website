import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/auth-context";

const CartModule = () => {
  const { cartItems, addToCart, removeFromCart, increaseCartItem } =
    useContext(CartContext);
  const totalAmount = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  const { email } = useContext(AuthContext);
  let cleanedEmail = email.replace(/[@.]/g, "");
  const baseURL = "https://crudcrud.com/api/ced2033407c04c85945f490d078ad5b2";
  const userCartURL = `${baseURL}/cart${cleanedEmail}`;

  return (
    <div
      className="cart-container p-3 bg-light border rounded"
      style={{ maxWidth: "700px", margin: "auto" }}>
      <h2 className="mb-4 text-center">Cart</h2>
      {cartItems.map((item, index) => (
        <div
          key={index}
          className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
          <img
            src={item.imageUrl}
            alt={item.title}
            width="80"
            height="80"
            className="rounded"
          />
          <div className="flex-grow-1 ms-3">
            <h5 className="mb-1">{item.title}</h5>
            <p className="mb-0">Price: ₹{item.price}</p>
            <p className="mb-0">Quantity: {item.quantity}</p>
            <p className="mb-0 fw-bold">Total: ₹{item.price * item.quantity}</p>
          </div>
          <button
            onClick={() => {
              increaseCartItem(item.id);
            }}
            className="btn btn-primary fw-bolder text-bg-success">
            +
          </button>
          <button
            onClick={() => {
              removeFromCart(item.id);
            }}
            className="btn btn-primary fw-bolder text-bg-danger">
            -
          </button>
        </div>
      ))}

      <h4 className="text-end mt-4">Grand Total: ₹{totalAmount}</h4>
    </div>
  );
};

export default CartModule;
