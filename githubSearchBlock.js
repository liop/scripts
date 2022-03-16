// ==UserScript==
// @name         屏蔽github search 中的仓库
// @namespace    https://github.com/liop/scripts
// @version      0.1
// @description  try to take over the world!
// @author       liop
// @match        https://github.com/search*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

(function() {
    'use strict';
    let repos = GM_getValue('repos') || []
    console.log('repos:', repos)
    document.querySelectorAll('.repo-list-item').forEach(function(it) {
        let repo = it.querySelector('a')
        var name = repo.text
        if (repos.find(n => n === name)) {
            it.remove()
            console.log("github block "+name)
        }
        let btn = document.createElement('button')
        btn.textContent = "block"
        btn.style ="margin-left:20px"

        btn.addEventListener('click', function(e) {
            it.remove()
            repos.push(name)
            GM_setValue('repos', repos)
            console.log("github block "+name)
        })

        repo.parentElement.append(btn)
    })
    // Your code here...
})();
