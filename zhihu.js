// ==UserScript==
// @name         知乎Print
// @namespace    http://tampermonkey.net/
// @version      2024-05-23
// @description  try to take over the world!
// @require      https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js
// @author       You
// @match        https://www.zhihu.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// ==/UserScript==
(function(jQuery) {
    'use strict';

    // Your code here...
    setTimeout(function() {
        $("header.AppHeader").remove();
        console.log('header removed...')
        $(".ContentItem-actions").css("display", "none");
        console.log('comment removed...')
        $(".Question-sideColumn")[0].remove();
        console.log('side removed...')
        $(".Question-mainColumn").css("width", "100%");
    }, 3000)

})();
