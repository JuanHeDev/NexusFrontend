import { useRef } from "react";
import { useState } from "react";
import CardSection from "./components/CardSection";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";
import Login from "./components/Login";

function App() {
  const heroRef = useRef(null);
  const serviciosRef = useRef(null);
  const galeriaRef = useRef(null);
  const statsRef = useRef(null);

  const [showLogin, setShowLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLoginSuccess = (role) => {
    alert(`Conectado como ${role}`);
    if(role === 'admin'){
      setIsAdmin(true);
    }
    setShowLogin(false);

    //Volver al inicio de la página
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-slate-100 text-slate-900">
      <Navbar
        onNavigate={(section) => {
          section.current?.scrollIntoView({ behavior: 'smooth' });
        }}
        refs={{
          heroRef,
          serviciosRef,
          galeriaRef,
          statsRef,
        }}
        onAccessClick={() => setShowLogin(!showLogin)}
      />
      {/* Renderizado condicional */}
      {showLogin ? (
        <Login
          onBackClick={() => setShowLogin(false)}
          onLoginSuccess={handleLoginSuccess}
        />
      ) : (
        <>
          <section ref={heroRef}>
            <Hero
              onComenzarClick={() => setShowLogin(true)}
              onNavigate={(section) => {
                section.current?.scrollIntoView({ behavior: 'smooth' });
              }}
              refs={{
                statsRef
              }}
            />
          </section>
          <section ref={serviciosRef}><CardSection isAdmin={isAdmin}/></section>
          <section ref={galeriaRef}>
            <Gallery/>
          </section>
          <section ref={statsRef}><Stats /></section>
          <Footer
            onNavigate={(section) => {
              section.current?.scrollIntoView({ behavior: 'smooth' });
            }}
            refs={{
              heroRef,
              serviciosRef,
              galeriaRef,
              statsRef,
            }}
          />
        </>
      )}
    </div>
  )
}

export default App
