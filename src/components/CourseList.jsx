import { useEffect, useState } from "react";
import { getAllCourses } from "../services/courseService";
import CourseCard from "./CourseCard";

export default function CourseList({ filters }) {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  // USE TO LOAD ASYNC FETCH COURSES
  useEffect(() => {
    getAllCourses().then((data) => {
      setCourses(data);
      setLoading(false);
    });
  }, []);

  const filteredCourses = courses.filter((course) => {
    const matchName =
      !filters.name ||
      course.title.toLowerCase().includes(filters.name.toLowerCase());

    const matchCategory =
      !filters.categories?.length ||
      filters.categories.includes(course.category);

    const matchLevel =
      !filters.levels?.length || filters.levels.includes(course.level);

    const matchRating =
      !filters.ratings ||
      (course.rating >= filters.ratings[0] &&
        course.rating <= filters.ratings[1]);

    const matchPrice =
      !filters.prices ||
      (course.price >= filters.prices[0] 
        && course.price <= filters.prices[1]);

    return (
      matchName && matchCategory && matchLevel && matchRating && matchPrice
    );
  });

  if (loading) return <div>Cargando...</div>;

  return (
    <>
      <div className="row rows-cols-1 row-cols-xs-2 row-cols-md-4 g-4">
        {filteredCourses.map((course) => (
          <div key={course.id} className="col">
            <CourseCard course={course}></CourseCard>
          </div>
        ))}
      </div>
    </>
  );
}
