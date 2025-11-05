import starbucks from "../assets/starbucks.png";
import dominos from "../assets/dominos.png";
import pizzahut from "../assets/pizzahut.png";

export default function Gallery() {
    const proyectos = [
        {
            nombre: "Starbucks",
            imagen:
                starbucks,
            descripcion:
                "Implementación de un sistema de pedidos y control de inventario en tiempo real, optimizando la gestión de sucursales y el flujo de caja.",
        },
        {
            nombre: "Domino's",
            imagen:
                dominos,
            descripcion:
                "Desarrollo de un módulo para pedidos en línea integrado con el sistema de punto de venta, mejorando la trazabilidad de entregas y tiempos de respuesta.",
        },
        {
            nombre: "Pizza Hut",
            imagen:
                pizzahut,
            descripcion:
                "Automatización de procesos de facturación y control de ventas con integración de reportes analíticos y monitoreo en tiempo real.",
        },
    ];

    return (
        <section className="bg-slate-100 py-16 px-6 md:px-12">
            <h2 className="text-3xl font-bold text-center mb-10 text-emerald-700">
                Galería de Proyectos
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {proyectos.map((proyecto, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition transform hover:-translate-y-1"
                    >
                        {/* Imagen */}
                        <div className="h-48 flex items-center justify-center bg-gray-50">
                            <img
                                src={proyecto.imagen}
                                alt={proyecto.nombre}
                                className="h-32 object-contain"
                            />
                        </div>

                        {/* Contenido */}
                        <div className="p-4 text-center">
                            <h3 className="text-lg font-semibold text-slate-700 mb-2">
                                {proyecto.nombre}
                            </h3>
                            <p className="text-sm text-slate-500 leading-relaxed">
                                {proyecto.descripcion}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
