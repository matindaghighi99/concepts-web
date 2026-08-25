const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/password-reset", (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required." });
  }

  const token = Math.random().toString(36).slice(2);
  const resetLink = `http://localhost:3000/reset-password?token=${token}`;

  console.log(`Reset email sent to: ${email}`);
  console.log(`Reset link: ${resetLink}`);

  res.json({ message: "Reset link sent successfully." });
});

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});