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

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [role, setRole] = useState(null);

  const handleLogin = (role) => {
    setIsLoggedIn(true);
    setRole(role);
    setShowLogin(false);
    alert(`Conectado como ${role === "admin" ? "Administrador" : "Usuario"}`);
    //Volver al inicio de la página
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setRole(null);
    alert("Sesión cerrada correctamente 👋");
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
        isLoggedIn={isLoggedIn}
        onLoginClick={() => setShowLogin(true)}
        onLogoutClick={handleLogout}
      />
      {/* Renderizado condicional */}
      {showLogin ? (
        <Login
          onBackClick={() => setShowLogin(false)}
          onLogin={handleLogin}
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
          <section ref={serviciosRef}><CardSection isAdmin={role === "admin"}/></section>
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
