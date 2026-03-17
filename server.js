const express = require('express');
const app = express();

app.get('/education', (req, res) => {
  res.json({
    degree: "B.Tech CSE",
    university: "Lovely Professional University",
    year: "2021–2025"
  });
});

app.listen(3003, () => {
  console.log("✅ Education Service running on port 3003");
});
