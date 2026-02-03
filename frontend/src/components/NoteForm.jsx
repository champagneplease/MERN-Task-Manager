import { useEffect, useState } from "react";

export const NoteForm = ({ onSubmit, initialData = null, loading }) => {
  const [note, setNote] = useState({
    title: "",
    description: "",
    isImportant: false,
  });

  useEffect(() => {
    if (initialData && Object.keys(initialData).length > 0) {
      setNote({
        title: initialData.title || "",
        description: initialData.description || "",
        isImportant: initialData.isImportant || false,
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNote({
      ...note,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(note);
  };

  return (
    <form onSubmit={handleSubmit} className="card bg-base-300 w-full max-w-sm">
      <div className="card-body">
        <h2 className="card-title text-accent font-bold lg:text-2xl">
          {initialData ? "Editar POST" : "Nuevo POST"}
        </h2>

        {/* Input de usuario ELIMINADO intencionalmente */}

        <input
          type="text"
          name="title"
          placeholder="Título"
          className="input input-bordered w-full bg-base-100"
          value={note.title}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Descripción"
          className="textarea textarea-bordered w-full bg-base-100"
          rows={3}
          value={note.description}
          onChange={handleChange}
          required
        />

        <label className="flex items-center gap-2 text-amber-50">
          <input
            type="checkbox"
            name="isImportant"
            className="checkbox checkbox-accent"
            checked={note.isImportant}
            onChange={handleChange}
          />
          Importante
        </label>

        <div className="card-actions justify-end mt-4">
          <button
            type="submit"
            className="btn btn-accent text-base-100"
            disabled={loading}
          >
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Guardar"
            )}
          </button>
        </div>
      </div>
    </form>
  );
};
