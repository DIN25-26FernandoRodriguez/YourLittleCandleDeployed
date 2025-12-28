import { Link, useParams } from 'react-router-dom';
import productos from "../data/productos.js";

/**
 * 
 * Componente DetalleProducto
 * 
 * Componente que nos va a mostrar toda la información que contiene el producto que seleccionemos
 * Necesario para cuando en una lista de productos no se muestra toda la información que tiene cada producto almacenada
 * 
 * @returns {JSX.Element}
 */
function DetalleProducto() {
  const { id } = useParams();

  // Buscar producto según ID
  const product = productos.find(p => p.id === parseInt(id));

  // Si no existe, mensaje de error
  if (!product) {
    return <h1 className="text-center mt-10">Lo siento, no tenemos ese producto</h1>;
  }

  return (
    <main className="max-w-5xl mx-auto px-6 py-10">

      {/* Botón volver */}
      <Link
        to="/listaDeProductos"
        className="text-black hover:underline ml-4 bg-[var(--color-secondary)] border-2 border-black p-2 rounded-2xl"
      >
        Volver a los productos
      </Link>


      {/* Contenido */}
      <div className="flex flex-col md:flex-row items-center vertical md:items-start gap-10 mt-8">

        <div className="flex flex-col flex-1 items-center">
          {/* Imagen */}
          <img
            src={`/${product.image}`}
            alt={product.name}
            className="w-[300px] h-[300px] border-2 border-black p-2 object-contain rounded-2xl"
          />
          <h1 className="text-3xl pb-5 pt-5 mb-6 text-[#674835]">
            {product.name}
          </h1>
          <p><strong>{product.price}</strong></p>
          {/* Botón agregar al carrito */}
          <button
            className="text-white hover:underline pl-8 pr-8  bg-[var(--color-primary)] border-2 border-black p-1 rounded-2xl"
          >
            Agregar
          </button>
        </div>

        {/* Información */}
        <div className="flex-1 text-left">


          <h2 className="text-2xl mb-4 text-[#674835]">Descripción del producto</h2>

          <section className="space-y-3 text-lg">
            <p>{product.description}</p>

          </section>

        </div>
      </div>
    </main>
  );
}

export default DetalleProducto;
