import { Navigate, Route, Routes } from "react-router"
import Header from './components/Header'
import Footer from './components/Footer'
import CoursesPage from './pages/CoursesPage'
import NotFoundPage from './pages/NotFoundPage'
import AboutPage from './pages/AboutPage'

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Navigate to="/courses" replace />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
