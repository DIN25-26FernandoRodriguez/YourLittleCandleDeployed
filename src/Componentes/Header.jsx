import Navbar from "./Navbar";

function Header() {
  return (
    <>
      <div className="relative w-full bg-[var(--color-secondary)] items-center justify-center mb-1 border-b-4 border-black">
        
        <img
          src="/Icono.png"
          alt="Logo YourLittleCandle"
          className="w-60 h-auto mx-auto mb-1"
        />

        <Navbar></Navbar>
      </div>
      
    </>
  );
}

export default Header;
