import express from "express";

const app = express();

const PORT = 5001;

app.get("/health", (req, res) => {
  res.send("Hello World Dev");
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
