const src = `${import.meta.env.BASE_URL}courses.json`;

export function getAllCourses() {
  return fetch(src).then((r) => r.json());
}

export function getCourseById(id) {
  return getAllCourses()
    .then(courses => courses.find(c => c.id == id));
}

export function getAllCategories() {
  return getAllCourses()
    .then(courses => [...new Set(courses.map(c => c.category))]);
}

export function getAllLevels() {
  return getAllCourses()
    .then(courses => [...new Set(courses.map(c => c.level))]);
}