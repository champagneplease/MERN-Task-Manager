import { SquarePen, Trash } from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export const CardNotes = ({ note }) => {
  const navigate = useNavigate();

  if (!note) return null;

  const { title, description, createdAt, isImportant, userName, _id } = note;

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.delete(`${import.meta.env.VITE_API_URL}/${_id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.status !== 200) throw new Error("Error al eliminar POST");

      toast.success("POST eliminado");
      window.location.reload();
    } catch (err) {
      toast.error("No tienes permiso o hubo un error");
    }
  };

  const handleEdit = () => {
    navigate(`/edit/${_id}`);
  };

  return (
    <div className="card bg-base-300 w-full shadow-xl">
      <div className="card-body">
        <div className="flex justify-between items-start">
          <p className="text-sm opacity-70 mb-1">@{userName || "yo"}</p>
          {isImportant && (
            <span className="badge badge-accent badge-outline text-xs">
              Importante
            </span>
          )}
        </div>

        <h2 className="card-title text-accent font-bold lg:text-2xl wrap-break-word">
          {title}
        </h2>
        <p className="text-amber-50  wrap-break-word whitespace-pre-wrap">
          {description}
        </p>

        <div className="flex justify-between items-center mt-6">
          <time className="text-xs opacity-60" dateTime={createdAt || ""}>
            {createdAt
              ? format(new Date(createdAt), "dd 'de' MMMM yyyy", { locale: es })
              : "Fecha desconocida"}
          </time>

          <div className="flex gap-4">
            <button
              onClick={handleEdit}
              className="btn btn-ghost btn-sm btn-circle text-white"
            >
              <SquarePen size={20} />
            </button>
            <button
              onClick={handleDelete}
              className="btn btn-ghost btn-sm btn-circle text-red-400"
            >
              <Trash size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
