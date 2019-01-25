const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from app");
});

app.listen(process.env.PORT, () =>
  console.log(`App listening on port ${process.env.PORT}`)
);
