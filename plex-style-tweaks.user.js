// ==UserScript==
// @name         Plex Style Tweaks
// @version      0.1
// @description  Make Plex Great Again!
// @author       rigrassm
// @match        https://app.plex.tv/desktop
// @match        https://app.plex.tv/desktop
// @match        https://plex.grassmucks.com/web/*
// @grant        none
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

addGlobalStyle('.modal-lg>.modal-dialog {width: 75vw;}');
addGlobalStyle('.modal-body-scroll {max-height: 75vh;}');
addGlobalStyle('.modal-body-with-panes .modal-body-pane {height: 100vh;}');
