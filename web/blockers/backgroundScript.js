chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse)
    {
        sendResponse();
    });

chrome.webRequest.onBeforeRequest.addListener(onBeforeRequestHandler, {urls: ["http://banerator.net/*", "http://*.com/*banerator*", "*://www.adambarth.com/*"]}, ['blocking']);

function onBeforeRequestHandler(details)
{
    var tabId = details.tabId;
    console.log(tabId);
}

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab)
{
	if (changeInfo.status === "loading")
	{
		chrome.tabs.get(tabId, function (tabs)
		{
			var urls = localStorage.getItem("address");
			urls = CryptoJS.AES.decrypt(urls, "magicKey").toString(CryptoJS.enc.Utf8).split(";");
			for (var i = 0; i < urls.length; ++i)
			{
				var matchPattern = URLS_FOR_BLOCKING.PROTOCOLS.concat(urls[i]);
				if (tabs && tabs.url.toString().match(matchPattern))
				{
					chrome.tabs.update(tabId, {url:"../htmlPages/redirectPage.html"})
				}
			}
		});
	}
});
