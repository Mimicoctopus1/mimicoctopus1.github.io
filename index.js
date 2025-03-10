var menuBar = document.querySelectorAll(".menuBar")[0]

var moveMenuBar = () => {
  menuBar.style.top ||= "0px"

  if(menuBar.moving == "up") {
    menuBar.style.top = parseFloat(menuBar.style.top) - 1 + "%"
  } else if(menuBar.moving == "down") {
    menuBar.style.top = parseFloat(menuBar.style.top) + 1 + "%"
  }

  if(menuBar.moving == "up") { 
    if(parseFloat(menuBar.style.top) > -parseFloat(menuBar.clientHeight)) {
      requestAnimationFrame(moveMenuBar)
    } else {
      menuBar.moving = undefined
      menuBar.style.top = -parseFloat(menuBar.clientHeight)
    }
  } else if(menuBar.moving == "down") { 
    if(parseFloat(menuBar.style.top) < 0) {
      requestAnimationFrame(moveMenuBar)
    } else {
      menuBar.moving = undefined
      menuBar.style.top = 0
    }
  }
}

var oldScrollY = scrollY

onscroll = (event) => {
  let bottomOfView = scrollY + innerHeight
  let bottomOfDocument = document.documentElement.scrollHeight

  if(scrollY > oldScrollY && scrollY > 0) {/*We're going down.*/
    if(menuBar.moving != "up") {/*The bar needs to go up.*/
      menuBar.moving = "up"
      moveMenuBar()
    }
  } else if(scrollY < oldScrollY && bottomOfView < bottomOfDocument) {/*We're going up.*/
    if(menuBar.moving != "down") {/*The bar needs to go down.*/
      menuBar.moving = "down"
      moveMenuBar()
    }
  }
  oldScrollY = scrollY
}

document.body.ontouchmove = onscroll