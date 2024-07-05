const { error } = require("console");
const express = require("express");
const app = express();

const userRoutes = require("./routes/user");

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.static("node_modules"));

app.use(userRoutes);
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
