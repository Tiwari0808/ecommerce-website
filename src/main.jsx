import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import CartProvider from "./context/CartContext.jsx";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./context/auth-context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <CartProvider>
          <App />
        </CartProvider>
      </BrowserRouter>
    </AuthContextProvider>
  </StrictMode>
);
