import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) return res.status(401).json({ error: "Acceso denegado" });

  try {
    const cleanToken = token.replace("Bearer ", "");

    const verified = jwt.verify(
      cleanToken,
      process.env.JWT_SECRET || "secreto_super_seguro",
    );
    req.user = verified;

    next();
  } catch (error) {
    res.status(400).json({ error: "Token no válido" });
  }
};
