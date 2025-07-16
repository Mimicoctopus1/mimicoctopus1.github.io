var express = require('express')
var path = require('path')
var Server = require('socket.io')
var http = require("node:http")

var app = express()
var server = http.createServer(app)

app.use(express.static("public"))/*Allow the user to access the public folder.*/

app.get('/', (request, response) => {/*When the user requests the domain root...*/
  response.render("./public/index.html")/*Send the index.html file.*/
})

var port = parseInt(process.env.PORT) || process.argv[3] || 8080;

app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (request, response) => {
  response.render('public/index.html')
})

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
})