import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

export const AuthPage = ({ isRegister = false }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const endpoint = isRegister ? "/api/register" : "/api/login";

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}${endpoint}`,
        formData,
      );
      if (res.data.token) {
        login(res.data.token);
        toast.success(isRegister ? "Cuenta creada" : "Bienvenido de nuevo");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Error en la autenticación");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center mt-10">
      <form
        onSubmit={handleSubmit}
        className="card bg-base-300 w-full max-w-sm shadow-xl"
      >
        <div className="card-body">
          <h2 className="card-title text-accent font-bold text-2xl">
            {isRegister ? "Crear Cuenta" : "Iniciar Sesión"}
          </h2>

          {isRegister && (
            <input
              type="text"
              name="username"
              placeholder="Nombre de usuario"
              className="input input-bordered w-full bg-base-100"
              onChange={handleChange}
              required
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            className="input input-bordered w-full bg-base-100"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            className="input input-bordered w-full bg-base-100"
            onChange={handleChange}
            required
          />

          <div className="card-actions justify-end mt-4">
            <button
              type="submit"
              className="btn btn-accent w-full"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : isRegister ? (
                "Registrarse"
              ) : (
                "Entrar"
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
