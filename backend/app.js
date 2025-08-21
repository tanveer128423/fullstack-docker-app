const express = require("express");
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Default route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
