import { useState } from "react";

export default function Login({ onBackClick, onLoginSuccess }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Determinar rol según el email
        let role = "usuario";
        if (email.toLowerCase().includes("admin")) {
            role = "admin";
        }

        // Llamar a la función enviada por App
        onLoginSuccess(role);
    };

    return (
        <section
            id="login"
            className="min-h-screen flex items-center justify-center bg-slate-50 py-20"
        >
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold text-center mb-6 text-emerald-600">
                    Iniciar Sesión
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                            Correo electrónico
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                            placeholder="ejemplo@correo.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-emerald-500 text-white font-semibold py-2 rounded-lg hover:bg-emerald-600 transition"
                    >
                        Acceder
                    </button>
                </form>
                <button
                    onClick={onBackClick}
                    className="w-full mt-6 text-emerald-600 hover:underline"
                >
                    ← Volver a inicio
                </button>
                <p className="text-sm text-slate-500 text-center mt-6">
                    ¿No tienes cuenta?{" "}
                    <a href="#" className="text-emerald-600 hover:underline">
                        Regístrate aquí
                    </a>
                </p>
            </div>
        </section>
    );
}
