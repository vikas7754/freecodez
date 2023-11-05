import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
const port = 3002;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const server = app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Server is running");
  }
});
