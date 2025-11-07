import { useRef, useState, useEffect } from "react";
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

  const [isLoggedIn, setIsLoggedIn] = useState(false); //Estado de sesión
  const [showLogin, setShowLogin] = useState(false); //Mostrar componente de login
  const [user, setUser] = useState(null); //Datos del usuario

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    console.log("Datos recibidos en App:", userData);
    setIsLoggedIn(true);
    setShowLogin(false);
    //Volver al inicio de la página
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setIsLoggedIn(false);
    alert("Sesión cerrada correctamente 👋");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  //Habilitar sesión si hay datos en localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
  }, []);


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
          <section ref={serviciosRef}><CardSection isAdmin={user?.rol === "admin"} /></section>
          <section ref={galeriaRef}>
            <Gallery />
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
