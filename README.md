# Troop 199
This is Troop 199's website.

# Pages
There is a branch called `pages`. On GitHub it is called `gh-pages`. This branch is for [GitHub Pages](https://pages.github.com) and [Codeberg Pages](https://codeberg.page) to serve static websites at [https://Mimicoctopus1.github.io](https://Mimicoctopus1.github.io) and [https://Mimicoctopus1.codeberg.page](https://Mimicoctopus1.codeberg.page). Using [FreeDNS](https://freedns.afraid.org), the GitHub site has a CNAME for [199.k.vu](https://199.k.vu). To publish to these static websites, find which branch (`gh-pages` or `pages`) you have on your local machine.
```sh
git branch
```
You should get `main` and one other branch. If there is no branch, use `pages`. Also, if you have changed any history since last updating the pages branch, you need to delete the pages branch so that git doesn't complain about missing ancestors. If you haven't changed history, skip this.
```sh
#If you have the pages branch on your local machine
git branch -D pages

#If you have the gh-pages branch on your local machine
git branch -D gh-pages
```
Now, because Codeberg and GitHub Pages host statically (you can't access the actual server), we can only give them the contents of the ``public`` folder. So, put the contents of the public folder inside that branch.
```sh
#If you have the pages branch on your local machine
git subtree split --prefix=public --branch=pagesn

#If you have the gh-pages branch on your local machine
git subtree split --prefix=public --branch=gh-pages
```
Then push that branch over to GitHub and Codeberg.
```sh
#If you have the pages branch on your local machine
git push github pages:gh-pages
git push codeberg pages

#If you have the gh-pages branch on your local machine
git push github gh-pages
git push codeberg gh-pages:pages
```

Also, now go to GitHub and change the GitHub Pages domain to 199.k.vu. Pushing undoes this.