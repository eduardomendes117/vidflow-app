// /pages/api/register.js


export default function handler(req, res) {
  if (req.method === "POST") {
    const { email, senha } = req.body;

    if (!email || !senha) {
      return res.status(400).json({ message: "Preencha todos os campos." });
    }

    try {
      const stmt = db.prepare("INSERT INTO users (email, senha) VALUES (?, ?)");
      stmt.run(email, senha);
      return res
        .status(201)
        .json({ message: "Usuário registrado com sucesso." });
    } catch (error) {
      if (error.code === "SQLITE_CONSTRAINT_UNIQUE") {
        return res.status(409).json({ message: "Usuário já registrado." });
      }
      return res.status(500).json({ message: "Erro no servidor." });
    }
  }

  return res.status(405).json({ message: "Método não permitido." });
}
