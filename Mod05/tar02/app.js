const express = require("express");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, "views", "welcomeEveryone.html"));
});

app.get("/user", (req, res, next) => {
    res.sendFile(path.join(__dirname, "views", "welcomeUser.html"));
});

app.listen(8001);
