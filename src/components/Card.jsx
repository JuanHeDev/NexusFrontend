export default function Card({ title, desc }) {
    return (
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <div className="h-40 bg-slate-300 rounded-lg mb-4"></div>
            <h3 className="font-semibold text-lg mb-2">{title}</h3>
            <p className="text-slate-600 text-sm">{desc}</p>
        </div>
    );
}
