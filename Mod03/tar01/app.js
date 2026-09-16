/** @format */

const http = require("node:http");

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === "/") {
        res.write("<h1>Bem vindo ao meu site super legal</h1>");
        res.write(
            '<form method="POST" action="/create-user"><input type="text" name="usuario"/><input type="submit"/></form>',
        );
        res.end();
    }
    if (url == "/users") {
        res.write(
            "<html><ul><li>Cinco</li><li>Quatro</li><li>Três</li><li>Dois</li><li>Um</li></ul></html>",
        );
        res.end();
    }
    if (url === "/create-user" && method === "POST") {
        const body = [];
        req.on("data", (chunk) => {
            body.push(chunk);
        });
        req.on("end", () => {
            const parsed = Buffer.concat(body).toString().split("=")[1];
            console.log(parsed);
        });
        res.write("<h1>Usuário criado</h1>");
        res.end();
    }
});

server.listen(3000);
