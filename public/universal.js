var menuBarInjector = createElement("script")
menuBarInjector.classname = "menuBarInjector"
menuBarInjector.src = "/menuBarInjection.js"
document.body.appendChild(menuBarInjector)

ws = new WebSocket(document.location)