import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation(); // Detecta el cambio de ruta

  useEffect(() => {
    window.scrollTo(0, 0); // Mueve el scroll al inicio
  }, [pathname]); // Ejecuta cuando la ruta cambia

  return null; // Este componente no renderiza nada
};

export default ScrollToTop;
