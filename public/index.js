var populationPlaceholder = document.getElementsByClassName("populationPlaceholder")[0]

Object.assign(ws.responses, {
	"population update": function(data) {
		populationPlaceholder.innerHTML = "<h1><div>This Website<br>POP.: " + data + "</div></h1>"
	}
})