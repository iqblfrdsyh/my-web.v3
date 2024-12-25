require("dotenv").config();

const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const path = require("path");
const routes = require("./routes");
const morgan = require("morgan");
const { secure } = require("./middleware/secure");

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "./public")));
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({ status: 200, success: true, msg: "Welcome to my api" });
});

Object.values(routes).forEach((route) => {
  app.use("/api/v1/", secure, route);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
