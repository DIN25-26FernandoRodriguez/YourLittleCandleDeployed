import productos from "./data/productos"
import Card from './Componentes/Card.jsx'
import Layout from "./Componentes/Layout.jsx"

// Componente para listar todos los productos
function ListarProductos() {
  return (
    <>
    {/* Usamos el componente Layout para envolver el contenido principal */}
      <Layout>
        <h1 className="text-4xl text-[#674835] font-bold">- Velas aromáticas -</h1>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {/* Mapeamos el array de productos para crear una Card por cada producto */}
            {productos.map((producto) => (
              <Card
                key={producto.id}
                name={producto.name}
                image={producto.image}
                price={producto.price}
                to={`/producto/${producto.id}`}
              >
                {producto.description}
              </Card>
            ))}
          </div>
        </div>
      </Layout>
    </>
  )
}

export default ListarProductos
