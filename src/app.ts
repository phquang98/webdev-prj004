import express from "express";

const app = express();

app.get("/", (req, res, next) => {
  res.status(200).json({ message: "Server Online!" });
});

app.listen(3000);
// testing husky
