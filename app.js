"use strict";
// This code will enable strict mode to
// the website

const express = require("express");
const path = require("path");
const loanController = require("./controllers/loanController");
const app = express();
// These const line will import the express framework, the
// node.js path module, the custom controller, and will create
// the express application instance

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
//These app.set programs will set the port number, and
// will set the EJS as a templating engine.

app.use(express.static(path.join(__dirname, "public")));
// The app.use program will serve static files from the public
//folder

app.get("/", loanController.renderHome);
app.get("/calculate", loanController.calculateLoan);
// These app.get programs will route the user to the home page, then
// it will move the user to the calculation page

app.listen(app.get("port"), () => {
    console.log(`Server started on http://localhost:${app.get("port")}`);
});
// This program will start the server and will listen on that specific port, then
// it will log a message in the terminal showing where the server is running