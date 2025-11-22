import Header from './Componentes/Header.jsx'
import ListarProductos from './listaDeProductos.jsx'  
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import Inicio from './Inicio.jsx'
import Footer from './Componentes/Footer.jsx'
import DetalleProducto from './DetalleProducto.jsx'
import ScrollToTop from './Componentes/ScrollToTop.jsx'
import WorkInProgress from './WorkInProgress.jsx'
import Layout from './Componentes/Layout.jsx'

function App() {
  return (
    <>
      <Header/>
       {/*  Aquí va el header */}
      <Layout>
      <ScrollToTop/>
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
      <Footer/>
    </>
  )
}

export default App;
