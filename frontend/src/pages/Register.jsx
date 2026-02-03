import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

export const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/register`,
        formData,
      );
      if (res.data.token) {
        login(res.data.token);
        toast.success("Cuenta creada con éxito");
      }
    } catch (err) {
      toast.error("Error al registrarse");
    }
  };

  return (
    <div className="flex justify-center items-center mt-10">
      <form
        onSubmit={handleSubmit}
        className="card bg-base-300 w-full max-w-sm shadow-xl p-5"
      >
        <h2 className="text-2xl font-bold text-center text-accent mb-4">
          Crear Cuenta
        </h2>

        <input
          type="text"
          placeholder="Nombre de Usuario"
          className="input input-bordered w-full mb-3"
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
        />
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full mb-3"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="input input-bordered w-full mb-3"
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />

        <button type="submit" className="btn btn-accent w-full">
          Registrarse
        </button>

        <p className="mt-4 text-center text-sm">
          ¿Ya tienes cuenta?{" "}
          <Link to="/login" className="text-primary">
            Inicia Sesión
          </Link>
        </p>
      </form>
    </div>
  );
};
