document.addEventListener('DOMContentLoaded', init);

function init()
{
	var addLinkBtn = document.getElementById("addLinkBtn");
	addLinkBtn.addEventListener("click", addUrl);
}

function addUrl()
{
	var url = document.getElementById("url").value;
	var index = url.indexOf(":");
	if(index != -1)
	{
		url = url.substring(index + 3, url.length);
	}
	var urls = localStorage.getItem("address");
	if(urls.indexOf(url) == -1)
	{
		urls = urls.concat(";" + url);
		localStorage.setItem("address", urls);
	}
};