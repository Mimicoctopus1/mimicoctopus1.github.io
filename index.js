let verbose = function() {}
process.argv.forEach(function(argument) {
  if((argument[0] == "-" && argument[1] != "-" && argument.includes("v")) || argument == "--verbose") {
    verbose = console.log
    return
  }
})

verbose("Requiring dependencies")
verbose("|path")
var path = require("path")
verbose("|express")
var express = require("express")
verbose("|ws")
var WebSocket = require("ws")
verbose("|node:http")
var http = require("node:http")

verbose("Constructing express instance")
var app = express()
verbose("Constructing http server using express instance")
var server = http.createServer(app)
verbose("Constructing WebSocket server using http server")
var wss = new WebSocket.WebSocketServer({"server": server})


verbose("Configuring public folder for express instance")
app.use(express.static(path.join(__dirname, "public")))/*Allow the user to access the public folder*/

verbose("Deciding which port to use")
var port = parseInt(process.env.PORT) || process.argv[3] || 8080
verbose("Listening on port " + port)
server.listen(port)


verbose("Making WebSocket server aliases")
wss.send = function(data) {
  wss.clients.forEach(function(ws) {
    ws.send(data)
  })
}

verbose("Setting up WebSocket events")
wss.on("connection", function(ws) {
  verbose(wss.clients.size + " users  +1")
  wss.send(JSON.stringify({
    "type": "population update",
    "data": wss.clients.size
  }))
  
  ws.on("close", function(ws) {
    verbose(wss.clients.size + " users  -1")
    wss.send(JSON.stringify({
      "type": "population update",
      "data": wss.clients.size
    }))
  })
})

verbose("______________________________________________________               🛸")
verbose("|  ____     __  _____    __            _____  _____  |   ✨   👾👾")
verbose("| |    |   |__|/  ___| _|  |_   ____  /  ___|/  ___| |         👾")
verbose("| |    |    __ |  ___||_    _| /    \\ |  ___||  ___| |               ✨")
verbose("| |    |__ |  ||  |     |  |  |  (O) ||  |   |  |    |    🚀")
verbose("| |______| |__||__|     |__|   \\____/ |__|   |__|    |           ✨")
verbose("|____________________________________________________|  🌍    ✨")