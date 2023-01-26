const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<h1>Fill in your details</h1>");
    res.write("<form method='POST' action='/message'>");
    res.write("<input type='text' name='message'>");
    res.write("<button type='submit'>Submit</button>");
    res.write("</form>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const bufferData = [];
    req.on("data", (chunk) => {
      bufferData.push(chunk);
    });
    return req.on("end", () => {
      const data = Buffer.concat(bufferData).toString();
      const message = data.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("location", "/");
        return res.end();
      });
    });
  }
  res.write("Thank you for submitting your feedback!");
  res.end();
});

server.listen(3000);
