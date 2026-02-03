import express from "express";
import Note from "../models/apiModels.js";
import User from "../models/userModels.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const emailExist = await User.findOne({ email });
    if (emailExist)
      return res.status(400).json({ message: "El email ya existe" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await user.save();

    const token = jwt.sign(
      { id: savedUser._id, username: savedUser.username },
      process.env.JWT_SECRET || "secreto_super_seguro",
    );

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: "Error al registrar usuario" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "Usuario no encontrado" });

    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass)
      return res.status(400).json({ message: "Contraseña incorrecta" });

    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET || "secreto_super_seguro",
    );

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: "Error al iniciar sesión" });
  }
});

router.get("/", verifyToken, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.status(200).json(notes);
  } catch (err) {
    res.status(500).json({ error: "Error del servidor" });
  }
});

router.get("/:id", verifyToken, async (req, res) => {
  try {
    const { id } = req.params;
    const note = await Note.findOne({ _id: id, user: req.user.id });

    if (!note) return res.status(404).json({ error: "Nota no encontrada" });

    res.status(200).json(note);
  } catch (err) {
    res.status(500).json({ error: "Error del servidor" });
  }
});

router.post("/", verifyToken, async (req, res) => {
  try {
    const newNote = new Note({
      ...req.body,
      userName: req.user.username,
      user: req.user.id,
    });
    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (error) {
    res.status(500).json({ error: "Error al guardar la nota" });
  }
});

router.delete("/:id", verifyToken, async (req, res) => {
  try {
    const { id } = req.params;
    const deletedNote = await Note.findOneAndDelete({
      _id: id,
      user: req.user.id,
    });

    if (!deletedNote) {
      return res
        .status(404)
        .json({ error: "No encontrada o no tienes permiso" });
    }

    res.status(200).json({ message: "Nota eliminada" });
  } catch (err) {
    res.status(500).json({ error: "Error del servidor" });
  }
});

router.put("/:id", verifyToken, async (req, res) => {
  try {
    const { id } = req.params;
    const updatedNote = await Note.findOneAndUpdate(
      { _id: id, user: req.user.id },
      req.body,
      { new: true },
    );

    if (!updatedNote) {
      return res
        .status(404)
        .json({ error: "No encontrada o no tienes permiso" });
    }

    res.status(200).json(updatedNote);
  } catch (err) {
    res.status(500).json({ error: "Error del servidor" });
  }
});

export default router;
