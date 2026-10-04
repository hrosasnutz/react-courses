export default function AboutPage() {
  return (
    <div className="bg-light">
      {/* Hero Section */}
      <div className="bg-dark text-white py-5" style={{
        background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)'
      }}>
        <div className="container py-5 text-center">
          <i className="bi bi-mortarboard-fill display-1 mb-4"></i>
          <h1 className="display-4 fw-bold mb-3">Sobre EduPlatform</h1>
          <p className="lead opacity-75 mx-auto" style={{ maxWidth: '600px' }}>
            Transformamos carreras a través de la educación tecnológica de calidad, 
            democratizando el acceso al conocimiento especializado.
          </p>
        </div>
      </div>

      <div className="container py-5">
        {/* Misión y Visión */}
        <div className="row g-4 mb-5">
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                    <i className="bi bi-bullseye text-primary fs-3"></i>
                  </div>
                  <h3 className="fw-bold mb-0">Nuestra Misión</h3>
                </div>
                <p className="text-muted mb-0">
                  Empoderar a profesionales de todo el mundo con habilidades técnicas 
                  actualizadas y prácticas, mediante cursos diseñados por expertos de la 
                  industria y una metodología de aprendizaje hands-on.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-success bg-opacity-10 p-3 rounded-circle me-3">
                    <i className="bi bi-eye-fill text-success fs-3"></i>
                  </div>
                  <h3 className="fw-bold mb-0">Nuestra Visión</h3>
                </div>
                <p className="text-muted mb-0">
                  Ser la plataforma de referencia para el aprendizaje continuo en tecnología, 
                  reconocida por la calidad de nuestros contenidos y el éxito profesional 
                  de nuestros estudiantes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="row g-4 mb-5 text-center">
          <div className="col-6 col-md-3">
            <div className="p-4 bg-white rounded shadow-sm">
              <i className="bi bi-collection-fill text-primary display-4 mb-3"></i>
              <h2 className="fw-bold mb-1">60+</h2>
              <p className="text-muted mb-0">Cursos especializados</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="p-4 bg-white rounded shadow-sm">
              <i className="bi bi-people-fill text-success display-4 mb-3"></i>
              <h2 className="fw-bold mb-1">10K+</h2>
              <p className="text-muted mb-0">Estudiantes activos</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="p-4 bg-white rounded shadow-sm">
              <i className="bi bi-award-fill text-warning display-4 mb-3"></i>
              <h2 className="fw-bold mb-1">95%</h2>
              <p className="text-muted mb-0">Satisfacción</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="p-4 bg-white rounded shadow-sm">
              <i className="bi bi-globe-americas text-info display-4 mb-3"></i>
              <h2 className="fw-bold mb-1">24/7</h2>
              <p className="text-muted mb-0">Acceso ilimitado</p>
            </div>
          </div>
        </div>

        {/* Valores */}
        <div className="row mb-5">
          <div className="col-12 text-center mb-4">
            <h2 className="fw-bold">Nuestros Valores</h2>
            <p className="text-muted">Los pilares que guían nuestra plataforma</p>
          </div>
          
          <div className="col-md-4 mb-4">
            <div className="text-center p-4">
              <div className="bg-primary bg-opacity-10 d-inline-flex p-4 rounded-circle mb-3">
                <i className="bi bi-lightbulb-fill text-primary fs-1"></i>
              </div>
              <h4 className="fw-bold">Innovación</h4>
              <p className="text-muted">
                Actualizamos constantemente nuestros contenidos para reflejar las 
                últimas tendencias y tecnologías del mercado.
              </p>
            </div>
          </div>
          
          <div className="col-md-4 mb-4">
            <div className="text-center p-4">
              <div className="bg-success bg-opacity-10 d-inline-flex p-4 rounded-circle mb-3">
                <i className="bi bi-hand-thumbs-up-fill text-success fs-1"></i>
              </div>
              <h4 className="fw-bold">Calidad</h4>
              <p className="text-muted">
                Cada curso pasa por rigurosos controles de calidad y es impartido 
                por profesionales con experiencia real en la industria.
              </p>
            </div>
          </div>
          
          <div className="col-md-4 mb-4">
            <div className="text-center p-4">
              <div className="bg-warning bg-opacity-10 d-inline-flex p-4 rounded-circle mb-3">
                <i className="bi bi-heart-fill text-warning fs-1"></i>
              </div>
              <h4 className="fw-bold">Comunidad</h4>
              <p className="text-muted">
                Fomentamos un ambiente de aprendizaje colaborativo donde los 
                estudiantes crecen juntos profesionalmente.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="row">
          <div className="col-12">
            <div className="bg-dark text-white rounded-3 p-5 text-center position-relative overflow-hidden">
              <div className="position-absolute top-0 start-0 w-100 h-100 opacity-10" style={{
                background: 'linear-gradient(45deg, #1e3c72 0%, #2a5298 100%)'
              }}></div>
              <div className="position-relative">
                <h3 className="fw-bold mb-3">¿Listo para impulsar tu carrera?</h3>
                <p className="lead mb-4 opacity-75">
                  Únete a miles de profesionales que ya están transformando su futuro
                </p>
                <a href="/courses" className="btn btn-primary btn-lg px-5">
                  <i className="bi bi-rocket-takeoff-fill me-2"></i>
                  Explorar Cursos
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
