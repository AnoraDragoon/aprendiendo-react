import { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = [];

export const CART_ACTION_TYPES = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  CLEAR_CART: "CLEAR_CART",
};

const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action;

  switch (actionType) {
    case CART_ACTION_TYPES.ADD_TO_CART:
      const { id } = actionPayload;
      const productInCartIndex = state.findIndex((item) => item.id === id);

      if (productInCartIndex >= 0) {
        const newState = structuredClone(state);
        newState[productInCartIndex].quantity++;
        return newState;
      }
      return [...state, { ...actionPayload, quantity: 1 }];

    case CART_ACTION_TYPES.REMOVE_FROM_CART:
      return state.filter((item) => actionPayload.id !== item.id);

    default:
      return initialState;
  }
};

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (product) =>
    dispatch({ type: CART_ACTION_TYPES.ADD_TO_CART, payload: product });

  const clearCart = () => dispatch({ type: CART_ACTION_TYPES.CLEAR_CART });

  const removeFromCart = (product) =>
    dispatch({ type: CART_ACTION_TYPES.REMOVE_FROM_CART, payload: product });

  return (
    <CartContext.Provider
      value={{ cart: state, addToCart, clearCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
