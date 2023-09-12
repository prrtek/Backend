const express = require("express");

const app = express();

const PORT = 4000;

app.listen(PORT, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${PORT}`);
});

app.get("/api/v1/instagram", (req, res) => {
  const instagram = {
    username: "admin",
    id: 8,
  };
  res.json(instagram);
});

app.get("/api/v1/facebook", (req, res) => {
  const facebook = {
    username: "admin fb",
    id: 83,
  };
  res.json(facebook);
});
