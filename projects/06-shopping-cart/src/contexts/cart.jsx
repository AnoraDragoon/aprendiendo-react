import { createContext, useReducer } from "react";
import {
  CART_ACTION_TYPES,
  cartInitialState,
  cartReducer,
} from "../reducers/cart";

export const CartContext = createContext();

function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const addToCart = (product) =>
    dispatch({ type: CART_ACTION_TYPES.ADD_TO_CART, payload: product });

  const clearCart = () => dispatch({ type: CART_ACTION_TYPES.CLEAR_CART });

  const removeFromCart = (product) =>
    dispatch({ type: CART_ACTION_TYPES.REMOVE_FROM_CART, payload: product });

  return { cart: state, addToCart, clearCart, removeFromCart };
}

export function CartProvider({ children }) {
  const { cart, addToCart, clearCart, removeFromCart } = useCartReducer();
  return (
    <CartContext.Provider
      value={{ cart, addToCart, clearCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
