import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h5 className="fw-bold mb-3">
              <i className="bi bi-mortarboard-fill text-primary me-2"></i>
              EduPlatform
            </h5>
            <p className="text-muted mb-0">
              Transformando carreras a través de la educación tecnológica de calidad.
            </p>
          </div>
          <div className="col-md-3">
            <h6 className="fw-bold mb-3">Enlaces</h6>
            <ul className="list-unstyled">
              <li><Link to="/courses" className="text-muted text-decoration-none">Catálogo</Link></li>
              <li><Link to="/about" className="text-muted text-decoration-none">Nosotros</Link></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6 className="fw-bold mb-3">Síguenos</h6>
            <div className="d-flex gap-3">
              <a href="#" className="text-muted fs-5"><i className="bi bi-twitter-x"></i></a>
              <a href="#" className="text-muted fs-5"><i className="bi bi-linkedin"></i></a>
              <a href="#" className="text-muted fs-5"><i className="bi bi-github"></i></a>
              <a href="#" className="text-muted fs-5"><i className="bi bi-youtube"></i></a>
            </div>
          </div>
        </div>
        <hr className="my-4 border-secondary" />
        <div className="text-center text-muted">
          <small>&copy; 2026 EduPlatform. Todos los derechos reservados.</small>
        </div>
      </div>
    </footer>
  );
}
