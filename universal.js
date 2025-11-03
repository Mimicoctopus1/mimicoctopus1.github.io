var universalInjector = document.getElementsByClassName("universal")[0]
var head = document.querySelectorAll("head")[0]

var style = document.createElement("style")
style.innerHTML = `
.header {
line-height: 1em;
background-color: rgba(255, 255, 255, 1);
border: 1px solid rgba(0, 0, 0, 1);
padding: none;
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 10vh;
overflow-x: auto;
overflow-y: hidden;
z-index: 100;
}

.header div {
display: inline-block;
text-align: center;
height: 100%;
}

.header div a {
display: block;
text-decoration: none;
height: 100%;
font-size: 3vh;
}

.header div a img {
height: 65%;/*The text if supposed to take up 3% of the viewport height, 30% of the menubar. The image takes up almost the other 70%.*/
}

body {
margin-top: 0;
padding-top: 10vh;/*Makes room for the menubar.*/
}
`

var header = document.createElement("nav")
header.className = "header"
header.innerHTML = `
<div>
  <a href="/">
    <img src="/assets/header/home.png"><br>
    Troop 199
  </a>
</div>
<div>
  <a href="/posts">
    <img src = "/assets/header/posts.png"><br>
    Posts
  </a>
</div>
<div>
  <a href="/gallery">
    <img src = "/assets/header/gallery.png"><br>
    Gallery
  </a>
</div>
`

var footer = document.createElement("nav")
footer.className = "footer"
footer.innerHTML = `
<h1>Acknowledgements</h1>
<div class="acknowledgements">
<div>
    <h2>Domain (<a href="https://199.k.vu">199.k.vu</a>)</h2>
    <a href="https://freedns.afraid.org">FreeDNS</a>
</div>
<div>
    <h2>Static Web Hosting</h2>
    <a href="https://docs.github.com/en/pages">GitHub Pages</a><br>
    <a href="https://codeberg.page">Codeberg Pages</a>
</div>
<div>
    <h2>Code Hosting</h2>
    <a href="https://github.com/home">GitHub</a><br>
    <a href="https://codeberg.org/about">Codeberg</a>
</div>
<div>
    <h2>IDE <span class="headerdescription">(Integrated Development Environment)</span></h2>
    <a href="https://firebase.studio">Firebase Studio</a>
</div>
<div>
    <h2>Image Editing</h2>
    <a href="https://wickeditor.com">The Wick Editor</a>
</div>
</div>
`

head.appendChild(style)
document.body.prepend(header)
document.body.insertBefore(footer, universalInjector)

ws = new WebSocket(document.location)