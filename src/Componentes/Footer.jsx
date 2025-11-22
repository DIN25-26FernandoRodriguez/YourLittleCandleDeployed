import { Link } from "react-router-dom";

// Componente Footer que contiene enlaces a redes sociales y ubicación
function Footer() {
  return (
    <nav
      className="w-full bg-[var(--color-secondary)] text-black p-4 shadow-lg flex border-t-4 border-black justify-center gap-8"
      aria-label="Footer"
    >
      <Link to="/redes">Nuestras redes</Link>
      <Link to="/ubicacion">Ubicacion</Link>
    </nav>
  );
}

export default Footer;
