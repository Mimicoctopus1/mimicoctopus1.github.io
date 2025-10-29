var populationPlaceholder = document.getElementsByClassName("populationPlaceholder")[0]

var messageResponses = {
  "population update": function(data) {
    populationPlaceholder.innerHTML = "<h1><div>This Website<br>POP.: " + data + "</div></h1>"
  }
}

ws.addEventListener("message", function(event) {
  let data = JSON.parse(event.data).data
  let type = JSON.parse(event.data).type
  messageResponses[type](data)
})