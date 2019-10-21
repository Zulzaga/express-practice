const express = require("express");
const app = express();  // refers to the express module

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.get("/contact", (req, res) => {
  res.send("Contact me at :");
});

app.get("/about", (req, res) => {
  res.send("My name is Zulsar");
});

app.get("/hobbies", (req, res) => {
  res.send("My hobbies");
});

// Listen on a specific port
app.listen(3000, () => {
  console.log("Server started on port 3000")
});
