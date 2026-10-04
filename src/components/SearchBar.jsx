import { getAllCategories, getAllLevels } from "../services/courseService";
import { useFilterOptions } from "../hooks/useFilterOptions";
import CheckFilter from "./filters/CheckFilter";
import TextFilter from "./filters/TextFilter";
import RangeTextFilter from "./filters/RangeTextFilter";
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [name, setName] = useState("");
  const categories = useFilterOptions(getAllCategories);
  const levels = useFilterOptions(getAllLevels);
  const [ratings, setRatings] = useState([0, 5]);
  const [prices, setPrices] = useState([0, 200]);

  const handleSearchClick = () => {
    if (prices[0] > prices[1]) {
      alert("El precio mínimo no puede ser mayor al máximo");
      return;
    }

    if (ratings[0] > ratings[1]) {
      alert("La valoración mínima no puede ser mayor a la máxima");
      return;
    }

    const selectedCategories = categories.items
      .filter((i) => i.checked)
      .map((i) => i.name);

    const selectedLevels = levels.items
      .filter((i) => i.checked)
      .map((i) => i.name);

    onSearch({
      name: name,
      categories: selectedCategories,
      levels: selectedLevels,
      ratings: ratings,
      prices: prices,
    });
  };

  const handleReset = () => {
    setName("");
    setPrices([0, 200]);
    setRatings([0, 5]);
    categories.reset();
    levels.reset();
    onSearch({
      name: "",
      categories: [],
      levels: [],
      ratings: [0, 5],
      prices: [0, 200],
    });
  };

  function handlePricesRangeChange(pos, value) {
    setPrices((prev) => {
      const updated = [...prev];
      updated[pos] = Number(value);
      return updated;
    });
  }

  function handleRatingRangeChange(pos, value) {
    setRatings((prev) => {
      const updated = [...prev];
      updated[pos] = Number(value);
      return updated;
    });
  }

  const isLoading = categories.loading && levels.loading;
  if (isLoading) return (
    <div className="d-flex justify-content-center py-4">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Cargando...</span>
      </div>
    </div>
  );

  return (
    <div className="p-3">
      <div className="accordion accordion-flush" id="filterAccordion">
        <TextFilter
          id="name"
          title="Buscar curso"
          text={name}
          onTextChange={setName}
        />
        <CheckFilter
          id="category"
          title="Categorías"
          items={categories.items}
          onCheck={categories.toggle}
        />
        <CheckFilter
          id="level"
          title="Nivel"
          items={levels.items}
          onCheck={levels.toggle}
        />
        <RangeTextFilter
          id="rating"
          title="Valoración"
          min={0}
          max={5}
          range={ratings}
          onRangeChange={handleRatingRangeChange}
        />
        <RangeTextFilter
          id="price"
          title="Precio"
          min={0}
          max={200}
          range={prices}
          onRangeChange={handlePricesRangeChange}
        />
      </div>
      
      <div className="d-grid gap-2 mt-4 pt-3 border-top">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSearchClick}
        >
          <i className="bi bi-search me-2"></i>
          Aplicar filtros
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary btn-sm"
          onClick={handleReset}
        >
          <i className="bi bi-arrow-counterclockwise me-2"></i>
          Limpiar filtros
        </button>
      </div>
    </div>
  );
}
