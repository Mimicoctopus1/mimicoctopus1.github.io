var path = require("path")
var express = require("express")
var WebSocket = require("ws")
var http = require("node:http")

var app = express()
var server = http.createServer(app)
var wss = new WebSocket.WebSocketServer({"server": server})

app.use(express.static(path.join(__dirname, "public")))/*Allow the user to access the public folder.*/
app.get('/', (request, response) => {/*When the user requests the domain root...*/
  response.render(path.join(__dirname, "public", "index.html"))/*Send the index.html file.*/
})

var port = parseInt(process.env.PORT) || process.argv[3] || 8080;
server.listen(port)

wss.send = function(data) {
  wss.clients.forEach(function(ws) {
    ws.send(data)
  })
}

wss.on("connection", function(ws) {
  wss.send(JSON.stringify({
    "type": "population update",
    "data": wss.clients.size
  }))
  
  ws.on("close", function(ws) {
    wss.send(JSON.stringify({
      "type": "population update",
      "data": wss.clients.size
    }))
  })
})