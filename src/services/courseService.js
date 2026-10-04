const src = `${import.meta.env.BASE_URL}courses.json`;

export function getAllCourses() {
  return fetch(src).then((r) => r.json());
}

export function getPageCourses(page, size, fnFilter) {
  return getAllCourses().then((courses) => {
    const filtered = fnFilter ? courses.filter(fnFilter) : courses;
    const start = (page - 1) * size;
    const end = start + size;

    return {
      data: filtered.slice(start, end),
      total: filtered.length,
      page,
      size,
      totalPages: Math.ceil(filtered.length / size),
    };
  });
}

export function getCourseById(id) {
  return getAllCourses().then((courses) => courses.find((c) => c.id == id));
}

export function getAllCategories() {
  return getAllCourses().then((courses) => [
    ...new Set(courses.map((c) => c.category)),
  ]);
}

export function getAllLevels() {
  return getAllCourses().then((courses) => [
    ...new Set(courses.map((c) => c.level)),
  ]);
}
