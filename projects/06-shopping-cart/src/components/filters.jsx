import { useState } from "react";
import "./filters.css";

export function Filters({ onChange }) {
  const [minPrice, setMinPrice] = useState(0);

  const handleMinPriceChange = (event) => {
    // Aquí algo huele mal
    // 2 fuentes de la verdad
    setMinPrice(Number(event.target.value));
    onChange((prevState) => ({
      ...prevState,
      minPrice: Number(event.target.value),
    }));
  };

  const handleCategoryChange = (event) => {
    // Esto Huele mal
    // Estamos pasando la función de actualizar estado nativa de React a un componente hijo
    onChange((prevState) => ({
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
          id="minPrice"
          value={minPrice}
          min={0}
          max={1000}
          onChange={handleMinPriceChange}
        />
        <span>${minPrice}</span>
      </div>

      <div>
        <label htmlFor="category">Categoría</label>
        <select id="category" onChange={handleCategoryChange}>
          <option value="all">Todas</option>
          <option value="laptops">Portátiles</option>
          <option value="smartphones">Celulares</option>
        </select>
      </div>
    </section>
  );
}
