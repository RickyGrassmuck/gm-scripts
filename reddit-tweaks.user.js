// ==UserScript==
// @name Reddit Hotkeys
// @include https://www.reddit.com/*
// @include https://reddit.com/*
// @include https://*.reddit.com/*
// @grant none
// @version 1.0.2
// ==/UserScript==


// Toggle sidebar, requires shine extension

function toggle(className) {
    $('html').toggleClass(className);
}

$('body').keyup(function(e) {
  if (e.target.nodeName.toLowerCase() !== 'input' && e.target.nodeName.toLowerCase() !== 'textarea') {
    e.preventDefault();
    if(e.ctrlKey && e.altKey) {
      switch( e.keyCode ) {
		    case 77:
          toggle("show-multireddits");
          break;
        case 83:
          e.preventDefault();
          toggle("show-sidebar");
          break;
      }
    }
  }
});
