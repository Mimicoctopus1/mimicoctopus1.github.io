var populationPlaceholder = document.getElementsByClassName("populationPlaceholder")[0]

var messageResponses = {
	"population update": function(data) {
		populationPlaceholder.innerHTML = "<h1><div>This Website<br>POP.: " + data + "</div></h1>"
	}
}

ws.addEventListener("message", function(event) {
	let type = JSON.parse(event.data).type
	let data = JSON.parse(event.data).data
	messageResponses[type](data)
})