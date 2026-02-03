import { useState, useContext } from "react";
import { Link } from "react-router-dom"; 
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

export const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Asegúrate que tu backend espere /api/login
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/login`,
        formData,
      );
      if (res.data.token) {
        login(res.data.token);
        toast.success("Bienvenido");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Error al iniciar sesión");
    }
  };

  return (
    <div className="flex justify-center items-center mt-10">
      <form
        onSubmit={handleSubmit}
        className="card bg-base-300 w-full max-w-sm shadow-xl p-5"
      >
        <h2 className="text-2xl font-bold text-center text-accent mb-4">
          Iniciar Sesión
        </h2>

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

        <button type="submit" className="btn btn-primary w-full">
          Entrar
        </button>

        <p className="mt-4 text-center text-sm">
          ¿No tienes cuenta?{" "}
          <Link to="/register" className="text-accent">
            Regístrate
          </Link>
        </p>
      </form>
    </div>
  );
};
