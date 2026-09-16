/** @format */
const fs = require("fs");

function requestHandler(req, res) {
    const url = req.url;
    const method = req.method;
    res.setHeader("Content-Type", "text/html"); 
    if (url === "/") {
        res.write("<html>");
        res.write("<head><title>My First Page</title></head>");
        res.write(
            '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>',
        );
        res.write("</html>");
        return res.end();
    }
    if (url === "/message" && req.method === "POST") {
        const body = [];
        const string = [];
        req.on("data", (chunk) => {
            console.count(chunk);
            body.push(chunk);
        });
        return req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            string.push(parsedBody.split("=")[1]);
            console.log("Parsed Body:", string[0]);
            fs.writeFile("message.txt", string[0], (err) => {
                res.statusCode = 302;
                res.setHeader("Location", "/");
                return res.end();
            });
        });
    }
}

module.exports = requestHandler;
