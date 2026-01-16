import "./products.css";
import { AddToCartIcon, RemoveFromCartIcon } from "./icons";
import { useCart } from "../hooks/use-cart";

export function Products({ products }) {
  const { cart, addToCart, removeFromCart } = useCart();

  return (
    <main className="products">
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div>
              <strong>{product.title}</strong> - ${product.price}
            </div>
            <div>
              {cart.some((item) => item.id === product.id) && (
                <button className="remove-cart-button"
                  onClick={() => {
                    removeFromCart(product);
                  }}
                >
                  <RemoveFromCartIcon />
                </button>
              )}
              <button
                onClick={() => {
                  addToCart(product);
                }}
              >
                <AddToCartIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
