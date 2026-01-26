import { NoteForm } from "../components/NoteForm";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const CreateNotes = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleCreate = async (note) => {
    try {
      setLoading(true);

      const res = await axios.post(`${import.meta.env.VITE_API_URL}`, note);

      if (res.status !== 201) {
        throw new Error("Error al crear POST");
      }

      toast.success("POST creado con éxito", {
        position: "bottom-center",
        autoClose: 2000,
        theme: "colored",
      });

      navigate("/");
    } catch (err) {
      console.error(err);
      toast.error("Error al crear POST", {
        position: "bottom-center",
        autoClose: 2000,
        theme: "colored",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen grid place-items-center">
      <NoteForm onSubmit={handleCreate} loading={loading} />
    </div>
  );
};
