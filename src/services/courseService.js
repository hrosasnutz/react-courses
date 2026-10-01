const src = "./public/courses.json";

export function getAllCourses() {
  return fetch(src).then((r) => r.json());
}
