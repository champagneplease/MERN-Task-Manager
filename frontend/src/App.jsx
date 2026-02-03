import { Routes, Route, Navigate } from "react-router-dom";
// IMPORTANTE: Importa la nueva página
import { LandingPage } from "./pages/LandingPage";

import { HomePages } from "./pages/HomePages";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { CreateNotes } from "./pages/CreateNotes";
import { EditNotes } from "./pages/EditNotes";
import { AuthProvider } from "./context/AuthContext"; // Ya está en main.jsx, pero si lo usas aquí para el context está bien
import { ProtectedRoute } from "./components/ProtectedRoute";
import { NavBar } from "./components/NavBar";
import { ToastContainer } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { user } = useContext(AuthContext); // Necesitamos saber si hay usuario

  return (
    <>
      <NavBar />

      <div className="w-full max-w-300 mx-auto p-3.5">
        <Routes>
          {/* LOGICA MAESTRA: Si hay usuario muestra notas, si no, la landing */}
          <Route path="/" element={user ? <HomePages /> : <LandingPage />} />

          {/* Si ya está logueado, no dejarlo entrar a login/register, mandarlo al home */}
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/register"
            element={!user ? <Register /> : <Navigate to="/" />}
          />

          <Route
            path="/create"
            element={
              <ProtectedRoute>
                <CreateNotes />
              </ProtectedRoute>
            }
          />

          <Route
            path="/edit/:id"
            element={
              <ProtectedRoute>
                <EditNotes />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        theme="colored"
      />
    </>
  );
}

export default App;
