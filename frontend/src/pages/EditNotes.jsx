import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { NoteForm } from "../components/NoteForm";
import { toast } from "react-toastify";

export const EditNotes = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/${id}`);
        setInitialData(res.data);
      } catch (error) {
        console.error("Error cargando POST:", error);
        toast.error("No se pudo cargar el POST");
        navigate("/");
      }
    };
    fetchNote();
  }, [id, navigate]);

  const handleEdit = async (note) => {
    try {
      setLoading(true);

      const noteToUpdate = {
        title: note.title,
        description: note.description,
        userName: note.userName,
        isImportant: note.isImportant,
      };

      const res = await axios.put(
        `${import.meta.env.VITE_API_URL}/${id}`,
        noteToUpdate,
      );

      if (res.status !== 200) {
        throw new Error("Error al editar POST");
      }

      toast.success("POST actualizado", {
        position: "bottom-center",
        autoClose: 2000,
        theme: "colored",
      });

      navigate("/");
    } catch (err) {
      console.error(err);
      toast.error("Error al editar", {
        position: "bottom-center",
        autoClose: 2000,
        theme: "colored",
      });
    } finally {
      setLoading(false);
    }
  };

  if (!initialData)
    return (
      <div className="grid place-items-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );

  return (
    <div className="min-h-screen grid place-items-center">
      <NoteForm
        onSubmit={handleEdit}
        initialData={initialData}
        loading={loading}
      />
    </div>
  );
};
