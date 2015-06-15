chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab)
{
	if (changeInfo.status === "loading")
	{
		chrome.tabs.get(tabId, function (tabs)
		{
			var urls = localStorage.getItem("urls");
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
