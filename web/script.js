var links = JSON.parse(localStorage.getItem('links'));

function checkURL(tabId, tab)
{
    if (document.readyState === "complete")
    {
        var badTag = document.getElementsByClassName('header_black');
    }
    if(badTag != null)
    {
        alert(badTag.length);
    }
    else
    {
        alert("not found");
    }
    for(var i = 0; i < links.length; i++)
    {
        if(tab.url.indexOf(links[i]) !== -1)
        {
            chrome.tabs.update(tabId, {url: "error.html"});
        }
    }
}

(
    function (w)
    {
        chrome.tabs.onUpdated.addListener(checkURL);
    }
)
(window);