const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/contact', (req, res) => {

  const {name, email, message} = req.body;

  console.log("New Contact Message:");
  console.log(name, email, message);

  res.json({
    status: "Message received",
    name: name,
    email: email
  });

});

app.listen(3004, () => {
  console.log("✅ Contact Service running on port 3004");
});