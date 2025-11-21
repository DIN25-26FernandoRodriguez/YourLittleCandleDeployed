import Contenedor from './Componentes/Contenedor.jsx'
import Articulo from './Articulo.jsx'
import Header from './Componentes/Header.jsx'
import ListarProductos from './listaDeProductos.jsx'  
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import Inicio from './Inicio.jsx'
import Admin from './Admin.jsx'
import Footer from './Componentes/Footer.jsx'
import DetalleProducto from './DetalleProducto.jsx'
import ScrollToTop from './Componentes/ScrollToTop.jsx'
import Contacto from './WorkInProgress.jsx'
import WorkInProgress from './WorkInProgress.jsx'

function App() {
  return (
    <>
      <Header/>
       {/*  Aquí va el header */}
      <Contenedor>
      <ScrollToTop/>
        <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/listaDeProductos" element={<ListarProductos />} />
        <Route path="/producto/:id" element={<DetalleProducto />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/contacto" element={<WorkInProgress />} />
        <Route path="/quienes" element={<WorkInProgress />} />
        <Route path="/redes" element={<WorkInProgress />} />
        <Route path="/ubicacion" element={<WorkInProgress />} />
        
        </Routes>
      </Contenedor>
      <Footer/>
    </>
  )
}

export default App;
