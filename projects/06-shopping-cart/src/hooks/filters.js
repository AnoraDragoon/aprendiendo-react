import { useContext } from "react";
import { FiltersContext } from "../contexts/filters";


export function useFilters() {
  const { filters, setFilters } = useContext(FiltersContext);

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
