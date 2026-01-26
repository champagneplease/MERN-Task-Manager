import { PlusIcon } from "lucide-react";
import { NavLink } from "react-router-dom";
export const NavBar = () => {
  return (
    <header className="navbar bg-base-300 py-8">
      <div className=" w-full max-w-250 mx-auto flex items-center justify-between">
        <NavLink className="text-3xl font-bold" to={"/"}>
          TodoApp
        </NavLink>
        <NavLink
          className="btn btn-soft btn-primary font-bold text-[1.1em]"
          to={"/create"}
        >
          <PlusIcon />
          Crear un POST
        </NavLink>
      </div>
    </header>
  );
};
