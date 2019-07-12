var app = require("express")();
var server = require("http").Server(app);
var path = require("path");
var serveStatic = require("serve-static");

server.listen(process.env.PORT || 2000);

app.get("/", function(req, res) {
  // res.sendFile(__dirname + '/socketclient/public');
  // res.sendFile(__dirname + '/dist');
  app.use(serveStatic(path.join(__dirname, "/dist")));
  console.log("connect get");
  // res.send("HolaWorld")
});
