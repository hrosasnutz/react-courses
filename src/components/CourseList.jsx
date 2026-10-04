import { useCallback, useEffect, useState } from "react";
import { getPageCourses } from "../services/courseService";
import CourseCard from "./CourseCard";

export default function CourseList({ filters }) {
  const [result, setResult] = useState({ data: [], totalPages: 0, total: 0 });
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const filterFn = useCallback((course) => {
    const matchName = !filters.name || 
      course.title.toLowerCase().includes(filters.name.toLowerCase());
    const matchCategory = !filters.categories?.length || 
      filters.categories.includes(course.category);
    const matchLevel = !filters.levels?.length || 
      filters.levels.includes(course.level);
    const matchRating = !filters.ratings || 
      (course.rating >= filters.ratings[0] && course.rating <= filters.ratings[1]);
    const matchPrice = !filters.prices || 
      (course.price >= filters.prices[0] && course.price <= filters.prices[1]);

    return matchName && matchCategory && matchLevel && matchRating && matchPrice;
  }, [filters]);

  useEffect(() => {
    getPageCourses(page, 6, filterFn).then((data) => {
      setResult(data);
      setLoading(false);
    });
  }, [page, filterFn]);

  if (loading) return <div className="text-center py-5"><div className="spinner-border text-primary"/></div>;

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="fw-bold mb-0">Cursos disponibles</h4>
        <span className="badge bg-primary">
          Página {page} de {result.totalPages || 1}
        </span>
      </div>

      {/* Paginación arriba */}
      <nav className="mb-4">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => setPage(p => p - 1)}>
              Anterior
            </button>
          </li>
          {[...Array(result.totalPages)].map((_, i) => (
            <li key={i + 1} className={`page-item ${page === i + 1 ? 'active' : ''}`}>
              <button className="page-link" onClick={() => setPage(i + 1)}>
                {i + 1}
              </button>
            </li>
          ))}
          <li className={`page-item ${page >= result.totalPages ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => setPage(p => p + 1)}>
              Siguiente
            </button>
          </li>
        </ul>
      </nav>

      <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4 mb-4">
        {result.data.map((course) => (
          <div key={course.id} className="col">
            <CourseCard course={course} />
          </div>
        ))}
      </div>
    </>
  );
}