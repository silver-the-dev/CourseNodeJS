const e = require("express");
const app = e();

app.use("/users", (req, res, next) => {
    res.send("<h1>Welcome user</h1>");
});

app.use("/", (req, res, next) => {
    res.send("<h1>Welcome</h1>");
});

app.listen(3000);
