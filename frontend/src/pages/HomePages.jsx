import { useEffect, useState } from "react";
import { CardNotes } from "../components/CardNotes";
import axios from "axios";

const apiURL = import.meta.env.VITE_API_URL;

export const HomePages = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token"); // Obtener token

        // Si no hay token, no hacemos la petición (opcional, pero buena práctica)
        if (!token) return;

        const response = await axios.get(apiURL, {
          headers: { Authorization: `Bearer ${token}` }, // Enviarlo
        });
        setNotes(response.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-3">
        <span className="loading loading-spinner loading-lg text-accent"></span>
        <p className="text-xl opacity-80">Cargando...</p>
      </div>
    );

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] xl:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
      {notes.length > 0 ? (
        notes.map((note) => <CardNotes key={note._id} note={note} />)
      ) : (
        <p className="col-span-full text-center opacity-50">
          No tienes notas creadas.
        </p>
      )}
    </div>
  );
};
