import { useState, useEffect } from "react";
import Card from "./Card";

export default function CardSection({ isAdmin }) {
    const [cards, setCards] = useState([]);

    // === CARGAR DESDE EL BACKEND ===
    useEffect(() => {
        const fetchServicios = async () => {
            try {
                const res = await fetch("http://localhost:8080/servicios");
                const data = await res.json();
                console.log("Servicios cargados:", data);
                setCards(data);
            } catch (error) {
                console.error("Error cargando servicios:", error);
            }
        };
        fetchServicios();
    }, []);

    // === FUNCIONES ADMIN ===
    const handleAdd = async () => {
        const nuevoServicio = {
            titulo: "Nuevo servicio",
            descripcion: "Descripción pendiente...",
            imagenUrl: "https://drive.google.com/uc?id=ID_DE_LA_IMAGEN"
        };
        const res = await fetch("http://localhost:8080/servicios", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(nuevoServicio)
        });
        const data = await res.json();
        setCards([...cards, data]);
    };

    const handleEdit = async (id, newTitle, newDesc) => {
        const updated = { titulo: newTitle, descripcion: newDesc };
        const res = await fetch(`http://localhost:8080/servicios/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updated)
        });
        const data = await res.json();
        setCards(cards.map(c => (c.id === id ? data : c)));
    };

    const handleDelete = async (id) => {
        await fetch(`http://localhost:8080/servicios/${id}`, { method: "DELETE" });
        setCards(cards.filter(c => c.id !== id));
    };

    return (
        <section className="py-16 px-6 md:px-12">
            <h2 className="text-3xl font-bold text-center mb-10">Nuestros Servicios</h2>

            {/* Botón para agregar (solo admin) */}
            {isAdmin && (
                <div className="text-center mb-6">
                    <button
                        onClick={handleAdd}
                        className="bg-emerald-500 text-white px-6 py-2 rounded-lg hover:bg-emerald-600 transition"
                    >
                        ➕ Agregar servicio
                    </button>
                </div>
            )}

            {/* Renderizado de tarjetas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {cards.map((c) => (
                    <Card
                        key={c.id}
                        id={c.id}
                        titulo={c.titulo}
                        descripcion={c.descripcion}
                        imagenUrl={c.imagenUrl}
                        isAdmin={isAdmin}
                        onDelete={handleDelete}
                        onEdit={handleEdit}
                    />
                ))}
            </div>
        </section>
    );
}
