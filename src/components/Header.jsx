import { Link, NavLink } from "react-router";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-4" to="/">
          <i className="bi bi-mortarboard-fill text-primary me-2"></i>
          EduPlatform
        </Link>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => 
                  `nav-link px-3 ${isActive ? 'active fw-bold text-primary' : ''}`
                } 
                to="/courses"
              >
                <i className="bi bi-grid-fill me-1"></i>
                Catálogo
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => 
                  `nav-link px-3 ${isActive ? 'active fw-bold text-primary' : ''}`
                } 
                to="/about"
              >
                <i className="bi bi-info-circle-fill me-1"></i>
                Nosotros
              </NavLink>
            </li>
            <li className="nav-item ms-lg-3">
              <button className="btn btn-primary px-4">
                <i className="bi bi-box-arrow-in-right me-2"></i>
                Ingresar
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
