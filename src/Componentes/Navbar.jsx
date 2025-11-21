import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
    // bg-[var(--colorNavBar)]
      className="w-full bg-[var(--color-secondary)] text-black shadow-lg flex justify-center gap-8"
      aria-label="Barra de navegación"
    >
      <Link to="/">Inicio</Link>
      <Link to="/listaDeProductos">Nuestras velas</Link>
      <Link to="/quienes">Quienes somos</Link>
      <Link to="/contacto">Contacto</Link>
    </nav>
  );
}

export default Navbar;
