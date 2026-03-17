const express = require('express');
const app = express();

app.get('/skills', (req, res) => {
  res.json([
    "C++",
    "Python",
    "AWS",
    "Docker",
    "Kubernetes",
    "DevOps"
  ]);
});

app.listen(3002, () => {
  console.log("✅ Skills Service running on port 3002");
});
