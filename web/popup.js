document.addEventListener('DOMContentLoaded', init);

function init()
{
	var addLinkBtn = document.getElementById("addLinkBtn");
	addLinkBtn.addEventListener("click", addLinkBtnClickAction, false);
}

function addLinkBtnClickAction()
{
	var url = document.getElementById("url").value;
	var index = url.indexOf(":");
	url = url.substring(index + 3, url.length);
	var urls = localStorage.getItem("address");
	if(urls.indexOf(url) == -1)
	{
		urls = urls.concat(";" + url);
		localStorage.setItem("address", urls);
	}
};