import { products as initialProducts } from "../mocks/products.json";
import { Products } from "../components/products";
import { useState } from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { IS_DEVELOPMENT } from "../config";
import { useFilters } from "../hooks/filters";
import { Cart } from "../components/cart";
import { CartProvider } from "../contexts/cart";

function App() {
  const [products, setProducts] = useState(initialProducts);
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(products).slice(0, 10);

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  );
}

export default App;
