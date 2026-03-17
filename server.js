const express = require('express');
const app = express();

app.get('/about', (req, res) => {
  res.json({
    name: "Arpit Sharma",
    role: "Aspiring DevOps Engineer",
    description: "Learning Cloud, DevOps, Microservices"
  });
});

app.listen(3001, () => {
  console.log("✅ About Service running on port 3001");
});
