import { useContext } from "react";
import { CartContext } from "../contexts/cart";

export function useCart() {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error("useCart must be used with a CartProvider.");
  }

  return context;
}
