const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.write("<h1>Fill in your details</h1>");
    res.write("<form method='POST' action='/message'>");
    res.write("<input type='text' name='message'>");
    res.write("<button type='submit'>Submit</button>");
    res.write("</form>");
    return res.end();
  }
  res.write("Thank you for submitting your feedback!");
  res.end();
});

server.listen(3000);
