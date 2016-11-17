var path = require("path");
var express = require("express");
var static = require("serve-static");
var app = express();

app.use("/polymer", static(path.join(__dirname, "bower_components")));
app.use("/element", static(path.join(__dirname, "elements")));

app.get("/form", (req, res) => {
	res.send(req.query);
});

app.use("/", (req, res) => {
	res.sendFile(path.join(__dirname, "client", "index.html"))
});

app.listen(80, function() {
	console.log("Server Running at 80");
});