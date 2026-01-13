import { products as initialProducts } from "../mocks/products.json";
import { Products } from "../components/products";
import { useState } from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { IS_DEVELOPMENT } from "../config";
import { useFilters } from "../hooks/filters";

function App() {
  const [products, setProducts] = useState(initialProducts);
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(products).slice(0, 10);

  return (
    <>
      <Header />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </>
  );
}

export default App;
