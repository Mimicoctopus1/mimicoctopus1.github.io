ws = new WebSocket(document.location)

ws.responses = {}

ws.addEventListener("message", function(event) {
	let type = JSON.parse(event.data).type
	let data = JSON.parse(event.data).data
	if(ws.responses.type) {
		ws.responses[type](data)
	}
})