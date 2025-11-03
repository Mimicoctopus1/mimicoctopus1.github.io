var posts = document.querySelectorAll(".postTable tbody tr")
var postsLeft = posts.length

while(postsLeft > 0) {
	let post = posts[postsLeft - 1]
	let date = post.children[0].innerHTML.split("/")

	post.children[2].innerHTML = "<a href=\"/posts/" + date[2] + "/" + date[0] + "/" + date[1] + "/" + post.children[2].innerHTML + "\">" + post.children[2].innerHTML + "</a>"
	
	postsLeft--
}