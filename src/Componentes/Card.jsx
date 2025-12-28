import { Link } from "react-router-dom";

/**
 * Componente Card
 * Componente que va a coger la información que se le pasa por parámetro y la va a colocar dentro de un elemento con forma de Card
 * Muestra la información que se le pasa por parámetro de manera clara y ordenada
 * Necesario para cuando se quieren mostrar muchos elementos con la misma plantilla de visualización
 * 
 * @component
 * @param {image, name, price, to} props 
 * @returns {JSX.Element}
 */
function Card(props) {
    // Desestructuración de las propiedades recibidas
    const { image, name, price, to } = props;
    return (
        <article
            className="flex flex-col items-start gap-3 p-4 rounded-lg">

            {/* Enlace al detalle del producto */}
            <Link
                to={to}
                tabIndex={0}
                aria-label={`Abrir detalle de ${name}`}
                className="bg-[var(--color-secondary)] shadow-md overflow-hidden flex flex-col items-center text-left 
            hover:shadow-lg focus-within:shadow-lg transition-shadow duration-300 w-70 p-5 rounded-2xl border-2 border-black">

                <figure className="w-full rounded-lg bg-gray-100 overflow-hidden">

                    {/* Imagen del producto */}
                    <img className="w-full object-contain rounded-2xl" src={image} alt={name} />


                    {/* Texto alternativo para lectores de pantalla */}
                    <figcaption className="sr-only">{props.children}</figcaption>

                </figure>
                {/* Contenedor de texto con nombre, precio y descripción */}
                <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2 pt-3">{name}</h2>
                    <p><strong>{price}</strong></p>
                    <p >{props.children}</p>
                </div>
            </Link>
        </article>
    )

}

export default Card;