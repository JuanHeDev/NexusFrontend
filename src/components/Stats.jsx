import { useState } from "react";
import libro from "../assets/libro.svg";
import medalla from "../assets/medalla.svg";
import usuario from "../assets/usuario.svg";

export default function Stats() {
    // Estado para controlar qué vista se muestra
    const [view, setView] = useState("logros");
    const [form, setForm] = useState({
        nombre: "",
        correo: "",
        mensaje: "",
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const logros = [
        { label: "Clientes", value: "120+", icon: usuario },
        { label: "Proyectos", value: "45", icon: libro },
        { label: "Premios", value: "8", icon: medalla },
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:8080/contactos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            if (response.ok) {
                setStatus("✅ Mensaje enviado correctamente.");
                setForm({ nombre: "", correo: "", mensaje: "" });
            } else {
                setStatus("❌ Error al enviar el mensaje.");
            }
        } catch (error) {
            console.error(error);
            setStatus("⚠️ No se pudo conectar con el servidor.");
        }
    };

    return (
        <section className="py-20 text-center bg-white">
            <h2 className="text-3xl font-bold mb-6">
                {view === "logros" ? "Nuestros Logros" : "Contáctanos"}
            </h2>

            {/* Botones para alternar vista */}
            <div className="flex justify-center gap-4 mb-10">
                <button
                    onClick={() => setView("logros")}
                    className={`px-6 py-2 rounded-lg font-medium transition ${view === "logros"
                        ? "bg-emerald-500 text-white"
                        : "border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white"
                        }`}
                >
                    Logros
                </button>
                <button
                    onClick={() => setView("contacto")}
                    className={`px-6 py-2 rounded-lg font-medium transition ${view === "contacto"
                        ? "bg-emerald-500 text-white"
                        : "border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white"
                        }`}
                >
                    Contacto
                </button>
            </div>

            {/* Contenido dinámico */}
            {view === "logros" ? (
                // === VISTA DE LOGROS ===
                <div className="flex flex-wrap justify-center gap-12">
                    {logros.map((item, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center"
                        >
                            <img
                                src={item.icon}
                                alt={item.label}
                                className="w-10 h-10 mb-3 text-emerald-500"
                            />
                            <div
                                className="w-24 h-24 
                            bg-emerald-500 rounded-full 
                            flex items-center justify-center 
                            text-white text-2xl font-bold">
                                {item.value}
                            </div>
                            <p className="mt-4 font-medium">{item.label}</p>
                        </div>
                    ))}
                </div>
            ) : (
                // === VISTA DE CONTACTO ===
                <div className="max-w-md mx-auto text-left">
                    <form
                        className="bg-slate-100 rounded-xl p-6 shadow-md"
                        onSubmit={handleSubmit}
                    >
                        <div className="mb-4">
                            <label className="block text-slate-700 font-medium mb-1">
                                Nombre
                            </label>
                            <input
                                type="text"
                                name="nombre"
                                className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                placeholder="Tu nombre"
                                value={form.nombre}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-slate-700 font-medium mb-1">
                                Correo electrónico
                            </label>
                            <input
                                type="email"
                                name="correo"
                                className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                placeholder="tu@correo.com"
                                value={form.correo}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-slate-700 font-medium mb-1">
                                Mensaje
                            </label>
                            <textarea
                                name="mensaje"
                                rows="3"
                                className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                placeholder="Escribe tu mensaje..."
                                value={form.mensaje}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-emerald-500 text-white py-2 rounded-lg hover:bg-emerald-600 transition"
                        >
                            Enviar mensaje
                        </button>
                    </form>
                    {status && (
                        <p className="text-center mt-4 text-sm text-gray-700">{status}</p>
                    )}
                </div>
            )}
        </section>
    );
}
