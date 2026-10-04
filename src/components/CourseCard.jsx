export default function CourseCard({ course }) {
  const getLevelBadgeColor = (level) => {
    const colors = {
      'Principiante': 'bg-success',
      'Intermedio': 'bg-warning text-dark',
      'Avanzado': 'bg-danger'
    };
    return colors[level] || 'bg-secondary';
  };

  return (
    <div className="card h-100 shadow-sm border-0 course-card">
      <div className="position-relative overflow-hidden">
        <img
          src={course.image}
          className="card-img-top course-image"
          alt={course.title}
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <span className={`position-absolute top-0 end-0 m-2 badge ${getLevelBadgeColor(course.level)}`}>
          {course.level}
        </span>
        <div className="position-absolute bottom-0 start-0 m-2">
          <span className="badge bg-dark bg-opacity-75">
            <i className="bi bi-clock me-1"></i>
            {course.duration}h
          </span>
        </div>
      </div>
      
      <div className="card-body d-flex flex-column">
        <div className="mb-2">
          <span className="badge bg-light text-dark border">
            <i className="bi bi-tag-fill me-1"></i>
            {course.category}
          </span>
        </div>
        
        <h5 className="card-title fw-bold mb-2 text-truncate-2" title={course.title}>
          {course.title}
        </h5>
        
        <p className="card-text text-muted small flex-grow-1" style={{
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          lineHeight: '1.4em',
          maxHeight: '4.2em'
        }}>
          {course.description}
        </p>
        
        <div className="mt-auto">
          <div className="d-flex align-items-center mb-2">
            <i className="bi bi-person-circle text-muted me-2"></i>
            <small className="text-muted">{course.instructor}</small>
          </div>
          
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <i className="bi bi-star-fill text-warning me-1"></i>
              <span className="fw-bold">{course.rating}</span>
              <small className="text-muted ms-1">/5</small>
            </div>
            <h5 className="mb-0 text-primary fw-bold">
              ${course.price}
            </h5>
          </div>
        </div>
      </div>
      
      <div className="card-footer bg-transparent border-top-0 pt-0 pb-3 px-3">
        <button className="btn btn-outline-primary w-100">
          <i className="bi bi-eye-fill me-2"></i>
          Ver detalles
        </button>
      </div>
    </div>
  );
}
