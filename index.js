const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(`
  <h1>Home page</h1>
  <a href='/about'>Go to about page</a>
    `);
});

app.get("/about", (req, res) => {
  res.send(`
  <h1>WElcome to about page</h1>
    <a href='/'>Go to home page</a>
    `);
});
app.get("/help", (req, res) => {
  res.send("Hello help page");
});

app.listen(3000);
