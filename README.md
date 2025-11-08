# Troop 199
This is Troop 199's website.

# Pages
There is a branch called `pages`. On GitHub it is called `gh-pages`. This branch is for [GitHub Pages](https://pages.github.com) and [Codeberg Pages](https://codeberg.page) to serve static websites at [https://Mimicoctopus1.github.io](https://Mimicoctopus1.github.io) and [https://Mimicoctopus1.codeberg.page](https://Mimicoctopus1.codeberg.page). Using [FreeDNS](https://freedns.afraid.org), the GitHub site has a CNAME for [199.k.vu](https://199.k.vu). However, because this is the same code used for Codeberg, you have to [manually enter the domain on GitHub using the GitHub Pages settings](#domain-change). To publish to these static websites, use the [copy and paste script](#copy-paste) or continue manually:

Find which branch (`gh-pages` or `pages`) you have on your local machine.
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
git subtree split --prefix=public --branch=pages

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

Don't forget to [change the domain](#domain-change).

## Copy Paste

```shell
echo -n "Do you want to force? (y/n): " ; read force
if [[ $force == y ]] ; then echo "Forcing..." ;	force=" --force"
else echo "Not forcing..." ; force="" ; fi
git push$force github main ; git push$force codeberg main
if [[ "$(git branch)" == *pages* ]] ; then branch=pages
elif [[ "$(git branch)" == *gh-pages* ]] ; then branch=gh-pages
else echo -n "What branch to push to GitHub and Codeberg Pages? (pages/gh-pages)" ; read branch ; fi
git branch -D $branch &> /dev/null ; git subtree split --prefix=public --branch=$branch &> /dev/null
git push$force github $branch:gh-pages ; git push$force codeberg $branch:pages
echo "COMPLETE ✅"
```

Don't forget to [change the domain](#domain-change).

## Domain Change

Also, now go to [GitHub](https://github.com/Mimicoctopus1/mimicoctopus1.github.io/settings/pages) and change the GitHub Pages domain to 199.k.vu. Pushing undoes this, so you need to do it again. Do not add a CNAME file because it will be pushed over to Codeberg Pages.