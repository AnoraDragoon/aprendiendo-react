import { useId } from "react";
import "./filters.css";
import { useFilters } from "../hooks/filters";

export function Filters() {
  const { filters, setFilters } = useFilters();
  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleMinPriceChange = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: Number(event.target.value),
    }));
  };

  const handleCategoryChange = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      category: String(event.target.value),
    }));
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor="minPrice">Precio a partir de:</label>
        <input
          type="range"
          id={minPriceFilterId}
          value={filters.minPrice}
          min={0}
          max={1000}
          onChange={handleMinPriceChange}
        />
        <span>${filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor="category">Categoría</label>
        <select
          id={categoryFilterId}
          onChange={handleCategoryChange}
          value={filters.category}
        >
          <option value="all">Todas</option>
          <option value="laptops">Portátiles</option>
          <option value="smartphones">Celulares</option>
        </select>
      </div>
    </section>
  );
}
