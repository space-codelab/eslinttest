var express = require("express");
var http = require("http");
var app = express();
var server = http.createServer(app);

const foo = "사용하지 않는 변수";

console.log(foo);

app.get("/", function (req, res) {
  res.send("root page");
});

app.get("/start", function (req, res) {
  res.send("start page");
});

server.listen(3000, "127.0.0.1", function () {
  console.log("Server listen on port " + server.address().port);
});
