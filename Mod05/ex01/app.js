/** @format */

const http = require("node:http");

const express = require("express");

const app = express();

app.use("/product", (req, res, next) => {
    console.log("Another");
    res.send("<h1>Hello from product</h1>");
});

app.use("/", (req, res, next) => {
    console.log("In the Middleware");
    res.send("<h1>Hello from Express</h1>");
});

app.listen(8000);
