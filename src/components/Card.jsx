import { useState } from "react";

export default function Card({ id, titulo, descripcion, imagenUrl, isAdmin, onDelete, onEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState(titulo);
    const [editDesc, setEditDesc] = useState(descripcion);

    const handleSave = () => {
        onEdit(id, editTitle, editDesc);
        setIsEditing(false);
    };

    return (
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition relative">
            {imagenUrl && (
                <img
                    src={imagenUrl}
                    alt={titulo}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                />
            )}

            {isEditing ? (
                <>
                    <input
                        type="text"
                        className="border border-slate-300 rounded-lg px-2 py-1 w-full mb-2"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                    />
                    <textarea
                        rows="3"
                        className="border border-slate-300 rounded-lg px-2 py-1 w-full mb-2"
                        value={editDesc}
                        onChange={(e) => setEditDesc(e.target.value)}
                    ></textarea>

                    <button
                        onClick={handleSave}
                        className="bg-emerald-500 text-white px-3 py-1 rounded mr-2"
                    >
                        Guardar
                    </button>
                    <button
                        onClick={() => setIsEditing(false)}
                        className="bg-gray-300 text-slate-700 px-3 py-1 rounded"
                    >
                        Cancelar
                    </button>
                </>
            ) : (
                <>
                    <h3 className="font-semibold text-lg mb-2">{titulo}</h3>
                    <p className="text-slate-600 text-sm mb-4">{descripcion}</p>

                    {/* Botones admin */}
                    {isAdmin && (
                        <div className="flex gap-2 justify-end">
                            <button
                                onClick={() => setIsEditing(true)}
                                className="text-blue-600 hover:underline"
                            >
                                ✏️ Editar
                            </button>
                            <button
                                onClick={() => onDelete(id)}
                                className="text-red-500 hover:underline"
                            >
                                🗑️ Eliminar
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}
