import { Link } from "react-router-dom";

function Card(props) {
    const { image, name, price, to } = props;
    return (
        <article
            className="flex flex-col items-start gap-3 p-4 rounded-lg">

            <Link
                to={to} 
                tabIndex={0} 
                aria-label={`Abrir detalle de ${name}`}
                className="bg-[var(--color-secondary)] shadow-md overflow-hidden flex flex-col items-center text-left 
            hover:shadow-lg focus-within:shadow-lg transition-shadow duration-300 w-70 p-5 rounded-2xl border-2 border-black">

                <figure className="w-full rounded-lg bg-gray-100 overflow-hidden">

                    <img className="w-full object-contain rounded-2xl" src={image} alt={name} />

                
                    <figcaption className="sr-only">{props.children}</figcaption>

                </figure>
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