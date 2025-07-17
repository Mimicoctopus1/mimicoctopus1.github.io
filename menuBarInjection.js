var menuBarInjector = document.querySelectorAll(".menuBarInjector")[0]
var head = document.querySelectorAll("head")[0]

var style = document.createElement("style")
style.innerHTML = `
  .menuBar {
    line-height: 1em;
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(0, 0, 0, 1);
    padding: none;
    position: fixed;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 10%;
    overflow-x: auto;
    overflow-y: hidden;
  }

  .menuBar div {
    display: inline-block;
    text-align: center;
    height: 100%;
  }

  .menuBar div a {
    display: block;
    text-decoration: none;
    height: 100%;
    font-size: 3vh;
  }

  .menuBar div a img {
    height: 65%;/*The text if supposed to take up 3% of the viewport height, 30% of the menubar. The image takes up almost the other 70%.*/
  }

  body {
    padding-top: 10%;/*Makes room for the menubar.*/
  }
`
head.appendChild(style)

var menuBar = document.createElement("nav")
menuBar.innerHTML = `
<div class="menuBar">
  <div>
    <a href="/">
      <img src="/assets/menuBar/home.png"><br>
      Troop 199
    </a>
  </div>
  <div>
    <a href="/posts">
      <img src = "/assets/menuBar/posts.png"><br>
      Posts
    </a>
  </div>
  <div>
    <a href="/gallery">
      <img src = "/assets/menuBar/gallery.png"><br>
      Gallery
    </a>
  </div>
</div>
`
menuBarInjector.replaceWith(menuBar)