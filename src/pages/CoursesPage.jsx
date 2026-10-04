import { useCallback, useState } from "react";
import CourseList from "../components/CourseList";
import SearchBar from "../components/SearchBar";

export default function CoursesPage() {
  const [filters, setFilters] = useState({
    name: null,
    categories: [],
    levels: [],
    ratings: [0, 5],
    prices: [0, 200],
  });

  // useCallback evita re-renders infinitos
  const handleSearch = useCallback((newFilters) => {
    setFilters(newFilters);
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <SearchBar onSearch={handleSearch}></SearchBar>
          </div>
          <div className="col-9">
            <CourseList filters={filters}></CourseList>
          </div>
        </div>
      </div>
    </>
  );
}
