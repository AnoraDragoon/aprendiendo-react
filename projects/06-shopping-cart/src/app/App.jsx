import { products as initialProducts } from "../mocks/products.json";
import { Products } from "../components/products";
import { useState } from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { IS_DEVELOPMENT } from "../config";

function useFilters() {
  const [filters, setFilters] = useState({ category: "all", minPrice: 0 });

  const filterProducts = (products) => {
    return products.filter((product) => {
      if (filters.category !== "all" && product.category !== filters.category) {
        return false;
      }
      if (product.price < filters.minPrice) {
        return false;
      }
      return true;
    });
  };

  return { filterProducts, setFilters, filters };
}

function App() {
  const [products, setProducts] = useState(initialProducts);
  const { filterProducts, setFilters, filters } = useFilters();

  const filteredProducts = filterProducts(products).slice(0, 10);

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer filters={filters} />}
    </>
  );
}

export default App;
