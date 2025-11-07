import { useState } from "react";

export default function Card({ id, titulo, descripcion, imagenUrl, isAdmin, onDelete, onEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState(titulo);
    const [editDesc, setEditDesc] = useState(descripcion);
    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState(imagenUrl);
    const [isUploading, setIsUploading] = useState(false);

    //Subida de imagen a Cloudinary vía backend
    const handleImageUpload = async (file) => {
        try {
            setIsUploading(true);
            const formData = new FormData();
            formData.append("file", file);

            const res = await fetch("http://localhost:8080/upload", {
                method: "POST",
                body: formData,
            });

            if (!res.ok) throw new Error("Error al subir la imagen");

            const data = await res.json();
            setPreview(data.url); // actualiza la previsualización
            return data.url;
        } catch (err) {
            console.error("Error subiendo imagen:", err);
            alert("❌ Error al subir la imagen");
            return null;
        } finally {
            setIsUploading(false);
        }
    };

    const handleSave = async () => {
        let finalImageUrl = preview;

        // Si hay una nueva imagen seleccionada, la subimos antes de guardar
        if (selectedFile) {
            const uploadedUrl = await handleImageUpload(selectedFile);
            if (uploadedUrl) {
                finalImageUrl = uploadedUrl;
            } else {
                alert("❌ No se pudo subir la nueva imagen");
                return; // Si la subida falla, no continuar
            }
        }
        // Actualizar el servicio en el backend
        onEdit(id, editTitle, editDesc, finalImageUrl);
        // Limpiar estado temporal
        setSelectedFile(null);
        setIsEditing(false);
    };

    // Cambiar imagen localmente
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    return (
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition relative">
            {preview && (
                <img
                    src={preview}
                    alt={editTitle}
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

                    {/* Input para subir imagen */}
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="mb-3"
                    />

                    {isUploading && (
                        <p className="text-sm text-emerald-600 mb-2">Subiendo imagen...</p>
                    )}

                    <div className="flex gap-2 justify-end">
                        <button
                            onClick={handleSave}
                            disabled={isUploading}
                            className={`${isUploading ? "bg-gray-400" : "bg-emerald-500 hover:bg-emerald-600"
                                } text-white px-3 py-1 rounded`}
                        >
                            💾 Guardar
                        </button>
                        <button
                            onClick={() => setIsEditing(false)}
                            className="bg-gray-300 text-slate-700 px-3 py-1 rounded"
                        >
                            Cancelar
                        </button>
                    </div>
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