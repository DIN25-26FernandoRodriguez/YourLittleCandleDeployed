import { useState } from "react";
import { NavLink } from "react-router-dom";
export default function Nav() {

    // Estado para controlar si el menú está abierto o cerrado
    const [open, setOpen] = useState(false);
    return (
        <>
            {/* Botón para abrir/cerrar el menú hamburguesa */}
            <button onClick={() => setOpen(!open)}>
                ☰
            </button>
            {/* Menú hamburguesa que se muestra/oculta según el estado 'open' y las opciones que muestra */}
            <nav className={open ? "block" : "hidden"}>
                <NavLink to="/" onClick={() => setOpen(false)}>Inicio</NavLink>
                <NavLink to="/listaDeProductos" onClick={() => setOpen(false)}>Nuestras velas</NavLink>
                <NavLink to="/quienes" onClick={() => setOpen(false)}>Quienes somos</NavLink>
                <NavLink to="/contacto" onClick={() => setOpen(false)}>Contacto</NavLink>

            </nav>
        </>
    );
}