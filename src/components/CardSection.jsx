import Card from "./Card";

export default function CardSection() {
    const cards = Array(6).fill({
        title: "Servicio destacado",
        desc: "Breve descripción del servicio o producto.",
    });

    return (
        <section className="py-16 px-6 md:px-12">
            <h2 className="text-3xl font-bold text-center mb-10">Nuestros Servicios</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {cards.map((c, i) => (
                    <Card key={i} title={c.title} desc={c.desc} />
                ))}
            </div>
        </section>
    );
}
