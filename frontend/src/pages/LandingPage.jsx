import { Link } from "react-router-dom";
import { NotebookPen, LayoutList, ShieldCheck } from "lucide-react";

export const LandingPage = () => {
  return (
    <div className="hero min-h-[70vh] bg-base-200 rounded-box mt-4">
      <div className="hero-content text-center">
        <div className="max-w-md">
          {/* Icono Principal */}
          <div className="flex justify-center mb-6">
            <NotebookPen size={80} className="text-accent" />
          </div>

          <h1 className="text-5xl font-bold">Organiza tu día</h1>
          <p className="py-6 text-lg opacity-80">
            TodoApp es el espacio seguro para tus ideas. Crea tareas, marca lo
            importante y mantén tu productividad al máximo con una interfaz
            simple y rápida.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register" className="btn btn-primary font-bold px-8">
              Comenzar Gratis
            </Link>
            <Link to="/login" className="btn btn-outline font-bold px-8">
              Ya tengo cuenta
            </Link>
          </div>

          {/* Pequeñas características abajo */}
          <div className="mt-12 grid grid-cols-2 gap-4 text-sm opacity-60">
            <div className="flex flex-col items-center gap-2">
              <LayoutList />
              <span>Gestión Simple</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ShieldCheck />
              <span>Privacidad Total</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
