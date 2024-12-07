import { Link } from "react-router-dom";
import "./index.css";

const hola = () => {
  return (
    <div className="main-page">
      <header className="main-header">
        <h1>SkillCode</h1>
        <p>
          Plataforma para la gestión de procesos de selección de talento de
          software
        </p>
      </header>

      <div className="login-section">
        <h2> . </h2>
        <div className="login-options">
          <Link to="/login" className="login-btn">
            Iniciar sesión
          </Link>
          <Link to="/register" className="register-link">
            ¿No tienes cuenta? Regístrate aquí
          </Link>
        </div>
      </div>

      <footer className="main-footer">
        <p>&copy; 2024 SkillCode. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default hola;
