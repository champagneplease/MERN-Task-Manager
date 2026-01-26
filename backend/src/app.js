import express from "express";
import router from "./routers/apiRoutes.js";
import "dotenv/config";
import { conectDB } from "./config/db.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

//Middelware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://mern-task-manager-git-main-champagnepleases-projects.vercel.app",
      "https://mern-task-manager-swart.vercel.app",
    ],
  }),
);
app.use(express.json());
app.use("/", router);

conectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server ON - http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
