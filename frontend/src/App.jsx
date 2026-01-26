import { Routes, Route } from "react-router-dom";
import { HomePages } from "./pages/HomePages";
import { EditNotes } from "./pages/EditNotes";
import { CreateNotes } from "./pages/CreateNotes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="w-full max-w-300 mx-auto p-3.5 ">
      <Routes>
        <Route path="/" element={<HomePages></HomePages>}></Route>
        <Route path="/create" element={<CreateNotes></CreateNotes>}></Route>
        <Route path="/edit/:id" element={<EditNotes></EditNotes>}></Route>
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="light"
      ></ToastContainer>
    </div>
  );
}

export default App;
