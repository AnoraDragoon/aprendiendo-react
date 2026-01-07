import { products as initialProducts } from "../mocks/products.json";
import { Products } from "../components/products";
import { useState } from "react";
import { Header } from "../components/header";

function App() {
  const [products, setProducts] = useState(initialProducts);
  const [filter, setFilter] = useState({ category: "all", minPrice: 0 });

  const filterProducts = (products) => {
    return products.filter((product) => {
      if (filter.category !== "all" && product.category !== filter.category) {
        return false;
      }
      if (product.price < filter.minPrice) {
        return false;
      }
      return true;
    });
  };

  return (
    <>
      <Header changeFilters={setFilter} />
      <Products products={filterProducts(products).slice(0, 10)} />
    </>
  );
}

export default App;
