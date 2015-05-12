//localStorage.bannerMessageImg =

chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse)
    {
        //todo: add action
        sendResponse();
    });

chrome.webRequest.onBeforeRequest.addListener(onBeforeRequestHandler, {urls: ["http://banerator.net/*", "http://*.com/*banerator*", "*://www.adambarth.com/*"]}, ['blocking']);

function onBeforeRequestHandler(details) {
    console.log("456");
    var tabId = details.tabId;
    console.log(tabId);
}
