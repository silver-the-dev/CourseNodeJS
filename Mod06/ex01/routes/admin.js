const express = require("express");
const path = require("path");

const rootDir = require("../util/path");

const products = [];
const router = express.Router();

router.get("/add-product", (req, res, next) => {
    res.render('add-product');
});

router.post("/product", (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect("/");
    console.log(products)
});

exports.routes = router;
exports.product = products;
