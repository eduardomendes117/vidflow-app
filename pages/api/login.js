// /pages/api/login.js


export default function handler(req, res) {
  if (req.method === "POST") {
    const { email, senha } = req.body;

    if (!email || !senha) {
      return res.status(400).json({ message: "Preencha todos os campos." });
    }

    const stmt = db.prepare(
      "SELECT * FROM users WHERE email = ? AND senha = ?"
    );
    const user = stmt.get(email, senha);

    if (user) {
      return res.status(200).json({
        message: "Login bem-sucedido",
        token: "token-de-exemplo", // Substitua por JWT em produção
      });
    }

    return res.status(401).json({ message: "Credenciais inválidas." });
  }

  return res.status(405).json({ message: "Método não permitido." });
}
