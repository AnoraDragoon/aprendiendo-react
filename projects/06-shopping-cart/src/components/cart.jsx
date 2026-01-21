import { useId } from "react";
import { ClearCartIcon, CartIcon } from "./icons";
import "./cart.css";
import { useCart } from "../hooks/use-cart";

function CartItem({ product, addToCart }) {
  return (
    <li>
      <img src={product.thumbnail} alt={product.title} />
      <div>
        <strong>{product.title}</strong> - ${product.price}
      </div>

      <footer>
        <small>Qty: {product.quantity}</small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  );
}

export function Cart() {
  const cartCheckboxId = useId();
  const { cart, addToCart, clearCart } = useCart();
  return (
    <>
      <label htmlFor={cartCheckboxId} className="cart-button">
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />

      <aside className="cart">
        <ul>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              product={item}
              addToCart={() => addToCart(item)}
            />
          ))}
        </ul>

        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}
