# Framework 7: Mixing-inline-and-ajax-pages
Demonstrates what happens in F7 mixing inline with ajax pages. The current ajax page will be cached. When retourning to the inline page and than clicking on an ajax page again it once again will be cached. So the DOM will grow farther instad of the cached ajax pages being reused. Conclusion: in the current state Framework7 can be only uset eather with inline- or ajax-pages. Mixing both isn't possible. Hopefully this will change in the future. 

[Open issue on F7](https://github.com/nolimits4web/Framework7/issues/1267)
