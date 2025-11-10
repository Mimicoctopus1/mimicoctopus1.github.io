var optionFlags = ""
process.argv.forEach(function(argument) {
	if(argument[0] == "-" && argument[1] != "-") {
		optionFlags += argument.slice(1)
	}
})

if(process.argv.includes("--verbose")) {
	verbose = console.log
} else {
	verbose = function() {}
}

verbose("Requiring dependencies")
verbose("|node:path")
var path = require("node:path")
verbose("|express")
var express = require("express")
verbose("|ws")
var WebSocket = require("ws")
verbose("|node:http")
var http = require("node:http")
verbose("|node:readline")
var readline = require("node:readline")

var rl = readline.createInterface({
	"input": process.stdin,
	"output": process.stdout,
	"terminal": false
})

verbose("Constructing express instance")
var app = express()
verbose("Constructing http server using express instance")
var server = http.createServer(app)
verbose("Constructing WebSocket server using http server")
var wss = new WebSocket.WebSocketServer({
	"autoPong": true,
	"server": server,
	"clientTracking": true
})


verbose("Configuring public folder for express instance")
app.use(express.static(path.join(__dirname, "public")))/*Allow the user to access the public folder*/

verbose("Deciding which port to use")
var port
if(process.argv.includes("--port")) {
	port = process.argv[process.argv.indexOf("--port") + 1]
}
port = parseInt(process.env.PORT) || port || 8080
verbose("Listening on port " + port)
server.listen(port)

verbose("Making WebSocket server aliases")
wss.send = function(data) {
	wss.clients.forEach(function(ws) {
		ws.send(data)
	})
}

var messageResponses = {

}

verbose("Setting up WebSocket events")
wss.on("connection", function(ws) {
	verbose(wss.clients.size + " users  +")
	wss.send(JSON.stringify({
		"type": "population update",
		"data": wss.clients.size
	}))

	ws.addEventListener("message", function(event) {
		let type = JSON.parse(event.data).type
		let data = JSON.parse(event.data).data
		messageResponses[type](data, ws)
	})
	
	ws.addEventListener("close", function() {
		verbose(wss.clients.size + " users  -")
		wss.send(JSON.stringify({
			"type": "population update",
			"data": wss.clients.size
		}))
	})
})

verbose("______________________________________________________               🛸")
verbose("|  __       __  _____    __            _____  _____  |   ✨   👾👾")
verbose("| |  |     |__|/  ___| _|  |_   ____  |  ___||  ___| |         👾")
verbose("| |  |      __ |  ___||_    _| /    \\ |  ___||  ___| |               ✨")
verbose("| |  |___  |  ||  |     |  |  |  (O) ||  |   |  |    |    🚀")
verbose("| |______| |__||__|     |__|   \\____/ |__|   |__|    |           ✨")
verbose("|____________________________________________________|  🌍    ✨")

stdinResponses = {
	"population": function() {
		console.log(wss.clients.size + " users  =")
	}
}
var readInput = function() {
	rl.question("", function(answer) {
		if(stdinResponses[answer]) {
			stdinResponses[answer]()
		}
		readInput()
	})
}
readInput()