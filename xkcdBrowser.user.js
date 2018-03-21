// ==UserScript==
// @name         XKCD Keybord Browser
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Use 'A' or 'J' to go back; 'D' or 'L' to go forward.
// @author       Florin Tobler
// @match        https://xkcd.com/*/
// @grant        CC-0-3
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...

    //on keypress event
    document.onkeypress = function(event) {
        //console.log(event);
        var key = event.key;
        if (key == 'a' || key == 'j') {
            navigatePage(-1);
        } else if (key == 'd' || key == 'l') {
            navigatePage(+1);
        } else if (key == 'i') {
            window.scrollBy(0, -100);
        } else if (key == 'k') {
            window.scrollBy(0, 100);
        }
    };

    //function to navigate forward or backward
    function navigatePage(increment) {
        var url = location.href.split('/');
        var nr = parseInt(url[3]);
        nr += increment;
        url[3] = nr + "";
        console.log(url);
        location.href = url.join("/");
    }
})();
