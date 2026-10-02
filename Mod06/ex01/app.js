const express = require("express");
const path = require("path");
const app = express();
app.set('view engine', 'pug');
app.set('views', 'views')

const adminData = require("./routes/admin");
const shopRoute = require("./routes/shop");

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoute);
app.use((req, res, next) => {
    res.status(404).render('404')
});

app.listen(8000);
