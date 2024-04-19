// ==UserScript==
// @name           Auto meta viewport
// @namespace      https://github.com/NateScarlet/Scripts/tree/master/user-script
// @description    Use <meta name="viewport" content="width=device-width, initial-scale=1"> as default.
// @version        2222.01
// @run-at         document-start
// @match          old.reddit.com/*
// ==/UserScript==
function main() {
    const viewport = document.querySelector("meta[name=viewport]");
    if (viewport)
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0');
    else {
    const metaViewportElement = document.createElement('meta');
    metaViewportElement.setAttribute('name', 'viewport');
    metaViewportElement.setAttribute('content', 'width=device-width, initial-scale=1');
    document.head.appendChild(metaViewportElement);
    }
}
main();