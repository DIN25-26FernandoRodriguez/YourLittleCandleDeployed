import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * 
 * Componente ScrollToTop
 * 
 * Componente que hace que cuando cambiemos de pantalla, el navegador se nos desplace al inicio de la página y no se 
 * quede bloqueado a la altura que estabamos antes de cambiar de página
 * 
 * @returns {JSX.Element}
 */

export default function ScrollToTop() {
  // Obtener la ubicación actual de la ruta
  const { pathname } = useLocation();

  // Cada vez que cambie la ruta, se ejecuta el efecto
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}