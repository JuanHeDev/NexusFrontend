import { useState } from "react";
import Card from "./Card";

export default function CardSection({isAdmin}) {
    const [cards, setCards] = useState([
        { id: 1, title: "Servicio destacado", desc: "Breve descripción del servicio o producto." },
        { id: 2, title: "Automatización empresarial", desc: "Implementación de sistemas integrales para optimizar procesos." },
        { id: 3, title: "Desarrollo web", desc: "Creamos soluciones digitales modernas y escalables." },
    ]);

    // === FUNCIONES ADMIN ===
    const handleDelete = (id) => {
        setCards(cards.filter((card) => card.id !== id));
    };

    const handleEdit = (id, newTitle, newDesc) => {
        setCards(
            cards.map((card) =>
                card.id === id ? { ...card, title: newTitle, desc: newDesc } : card
            )
        );
    };

    const handleAdd = () => {
        const newCard = {
            id: Date.now(),
            title: "Nuevo servicio",
            desc: "Descripción pendiente de actualizar.",
        };
        setCards([...cards, newCard]);
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
                        title={c.title}
                        desc={c.desc}
                        isAdmin={isAdmin}
                        onDelete={handleDelete}
                        onEdit={handleEdit}
                    />
                ))}
            </div>
        </section>
    );
}
