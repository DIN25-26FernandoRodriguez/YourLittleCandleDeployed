import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Componente que hace que al cambiar de ruta, la página se desplace hacia arriba

export default function ScrollToTop() {
  // Obtener la ubicación actual de la ruta
  const { pathname } = useLocation();

  // Cada vez que cambie la ruta, se ejecuta el efecto
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}