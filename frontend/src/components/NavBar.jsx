import { PlusIcon, LogOut } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const NavBar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    // 1. Mismos estilos del contenedor padre que tenías originalmente
    <header className="navbar bg-base-300 py-8">
      {/* 2. Mismo contenedor interno para centrar el contenido */}
      <div className="w-full max-w-250 mx-auto flex items-center justify-between">
        <Link className="text-3xl font-bold" to={"/"}>
          TodoApp
        </Link>

        <div className="flex gap-4 items-center">
          {user ? (
            <>
              {/* 3. AQUÍ ESTÁ TU BOTÓN ORIGINAL RESTAURADO EXACTAMENTE IGUAL */}
              <NavLink
                className="btn btn-soft btn-primary font-bold text-[1.1em]"
                to={"/create"}
              >
                <PlusIcon />
                Crear un POST
              </NavLink>

              {/* Botón extra solo para salir (discreto) */}
              <button
                onClick={logout}
                className="btn btn-ghost btn-circle text-red-400"
                title="Cerrar Sesión"
              >
                <LogOut size={20} />
              </button>
            </>
          ) : (
            /* Opciones para cuando NO estás logueado */
            <>
              <NavLink className="btn btn-ghost font-bold" to={"/login"}>
                Entrar
              </NavLink>
              <NavLink
                className="btn btn-outline btn-accent font-bold"
                to={"/register"}
              >
                Registrarse
              </NavLink>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
