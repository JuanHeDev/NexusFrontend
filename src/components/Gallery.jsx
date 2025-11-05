export default function Gallery() {
    return (
        <section className="bg-slate-100 py-16 px-6 md:px-12">
            <h2 className="text-3xl font-bold text-center mb-10">Galería de Proyectos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="h-48 bg-emerald-400 rounded-lg"></div>
                <div className="h-48 bg-emerald-400 rounded-lg"></div>
                <div className="h-48 bg-emerald-400 rounded-lg"></div>
            </div>
        </section>
    );
}
