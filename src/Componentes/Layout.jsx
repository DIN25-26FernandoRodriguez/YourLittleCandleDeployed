
// Componente Layout que envuelve el contenido principal de la página
function Layout({children}) {

  return (
    <>
      <main
        id="main-content"

        role="main"

        tabIndex="-1"

        className="min-h-screen bg-linear-to-bg-br flex flex-col items-center p-8">
          
        <section aria-labelledby="main-section-title" className="w-full max-w-7xl text-center">
          {children}
        </section>
      
      </main>
    </>
  )
}

export default Layout
