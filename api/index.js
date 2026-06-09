const express = require('express');
const app = express();

app.use(express.json());

// Juste une route de contrôle pour vérifier que ton backend Vercel tourne bien
app.get('/api/status', (req, res) => {
  res.json({
    status: "Online",
    message: "Le backend de mon portfolio fonctionne parfaitement sur Vercel !"
  });
});

module.exports = app;