const express = require("express");
const path = require("path");
const reqFilter = require("./middleware");

const route = express.Router();
const app = express();

route.use(reqFilter);

// const publicPath = path.join(__dirname, "public");
// console.log(publicPath);

// app.use(express.static(publicPath));         // Not use this as it displays file type and is quite hectic to use

// app.use(reqfiter);
app.get("/", (req, res) => {
  res.send("Welcome to home page");
});
app.get("/about", (req, res) => {
  res.send("Welcome to about page");
});
route.get("/contact", (req, res) => {
  res.send("Welcome to contact page");
});
route.get("/help", (req, res) => {
  res.send("Welcome to help page");
});

app.use("/", route);
// app.set("view engine", "ejs");
// app.get("/profile", (req, res) => {
//   const user = {
//     name: "Praful",
//     email: "test@gmail.com",
//     city: "Noida",
//   };
//   res.render("profile", { user });
// });

// app.get("/login", (req, res) => {
//   res.render("login");
// });

// app.get("/", (req, res) => {
//   res.sendFile(`${publicPath}/index.html`);
// });
// app.get("/about", (req, res) => {
//   res.sendFile(`${publicPath}/about.html`);
// });
// app.get("/help", (req, res) => {
//   res.sendFile(`${publicPath}/help.html`);
// });
// app.get("/*", (req, res) => {
//   res.send("Error 404 page");
// });

// app.get("/", (req, res) => {
//   res.send(`
//   <h1>Home page</h1>
//   <a href='/about'>Go to about page</a>
//     `);
// });

// app.get("/about", (req, res) => {
//   res.send(`
//   <h1>WElcome to about page</h1>
//     <a href='/'>Go to home page</a>
//     `);
// });
// app.get("/help", (req, res) => {
//   res.send("Hello help page");
// });

app.listen(3000);
