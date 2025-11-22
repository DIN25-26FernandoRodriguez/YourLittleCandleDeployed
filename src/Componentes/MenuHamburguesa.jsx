import { useState } from "react";
import { NavLink } from "react-router-dom";
export default function Nav() {

    const [open, setOpen] = useState(false);
    return (
        <>
            <button onClick={() => setOpen(!open)}>
                ☰
            </button>
            <nav className={open ? "block" : "hidden"}>
                <NavLink to="/" onClick={() => setOpen(false)}>Inicio</NavLink>
                <NavLink to="/listaDeProductos" onClick={() => setOpen(false)}>Nuestras velas</NavLink>
                <NavLink to="/quienes" onClick={() => setOpen(false)}>Quienes somos</NavLink>
                <NavLink to="/contacto" onClick={() => setOpen(false)}>Contacto</NavLink>

            </nav>
        </>
    );
}