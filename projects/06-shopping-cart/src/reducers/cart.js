export const cartInitialState =
  JSON.parse(globalThis.localStorage.getItem("cart")) || [];

export const CART_ACTION_TYPES = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  CLEAR_CART: "CLEAR_CART",
};

export function updateLocalStorage(state) {
  globalThis.localStorage.setItem("cart", JSON.stringify(state));
}

export function cartReducer(state, action) {
  const { type: actionType, payload: actionPayload } = action;

  switch (actionType) {
    case CART_ACTION_TYPES.ADD_TO_CART:
      const { id } = actionPayload;
      const productInCartIndex = state.findIndex((item) => item.id === id);

      if (productInCartIndex >= 0) {
        const newState = structuredClone(state);
        newState[productInCartIndex].quantity++;
        updateLocalStorage(newState);
        return newState;
      }
      const newState = [...state, { ...actionPayload, quantity: 1 }];
      updateLocalStorage(newState);
      return newState;

    case CART_ACTION_TYPES.REMOVE_FROM_CART:
      const removedState = state.filter((item) => actionPayload.id !== item.id);
      updateLocalStorage(removedState);
      return removedState;

    default:
      updateLocalStorage(cartInitialState);
      return cartInitialState;
  }
}
