import { Route, Routes } from "react-router-dom"
import DetalleProducto from './Componentes/DetalleProducto.jsx'
import Footer from './Componentes/Footer.jsx'
import Header from './Componentes/Header.jsx'
import Layout from './Componentes/Layout.jsx'
import ScrollToTop from './Componentes/ScrollToTop.jsx'
import Inicio from './Inicio.jsx'
import ListarProductos from './listaDeProductos.jsx'
import WorkInProgress from './WorkInProgress.jsx'

function App() {
  return (
    <>
      <Header/>
       {/*  Aquí va el header */}
      <Layout>
        {/* Componente que desplaza la página hacia arriba al cambiar de ruta */}
      <ScrollToTop/>
      {/* Definición de las rutas de la aplicación */}
        <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/listaDeProductos" element={<ListarProductos />} />
        <Route path="/producto/:id" element={<DetalleProducto />} />
        <Route path="/contacto" element={<WorkInProgress />} />
        <Route path="/quienes" element={<WorkInProgress />} />
        <Route path="/redes" element={<WorkInProgress />} />
        <Route path="/ubicacion" element={<WorkInProgress />} />
        
        </Routes>
      </Layout>
      {/* Aquí va el footer */}
      <Footer/>
    </>
  )
}

export default App;
