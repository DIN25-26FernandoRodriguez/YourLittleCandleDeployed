import productos from "./data/productos"
import Contenedor from './Componentes/Contenedor.jsx'
import Card from './Componentes/Card.jsx'

function ListarProductos() {
  return (
    <>
      <Contenedor>

        <h1 className="text-4xl text-[#674835] font-bold">- Velas aromáticas -</h1>
        
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
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
      </Contenedor>
    </>
  )
}

export default ListarProductos
