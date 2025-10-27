var path = require("path")
var express = require("express")
var WebSocket = require("ws")
var http = require("node:http")

var app = express()
var server = http.createServer(app)
var wss = new WebSocket.WebSocketServer({"server": server})

app.use(express.static("./public"))/*Allow the user to access the public folder.*/
app.get('/', (request, response) => {/*When the user requests the domain root...*/
  response.render("./public/index.html")/*Send the index.html file.*/
})

var port = parseInt(process.env.PORT) || process.argv[3] || 8080;
server.listen(port)

wss.on("connection", function(ws) {
  console.log("User connected " + ws)
})