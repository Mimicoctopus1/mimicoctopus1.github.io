var menuBarInjector = document.createElement("script")
menuBarInjector.classname = "menuBarInjector"
menuBarInjector.src = "/menuBarInjection.js"
document.body.prepend(menuBarInjector)

ws = new WebSocket(document.location)