var hidingTags = [];
function hideBadTags(badTags)
{
	for (var i=0; i<badTags.length; ++i)
	{
		badTags[i].innerHTML='';
		setTagStyle(badTags[i]);
	}
	if(hidingTags.length > 0)
	{
		window.setTimeout('deleteBanners(hidingTags)', 5000);
	}

}

function deleteBanners(tags)
{
	for(var i = 0; i < tags.length; ++i)
	{
		if(tags[i].parentNode != null)
		{
			tags[i].parentNode.removeChild(tags[i]);
		}
	}
	hidingTags = [];
}

function setTagStyle(tag)
{
	var w;
	var h;
	if(tag.width === undefined || tag.width == 0)
	{
		w = "100px !important";
	}
	else
	{
		w = tag.width;
	}
	if(tag.height === undefined || tag.height == 0)
	{
		h = w;
	}
	else
	{
		h = tag.height;
	}
	tag.removeAttribute("class");
	//tag.removeAttribute("src");
	tag.removeAttribute("style");
	//tag.removeAttribute("background-image");

	var img = document.createElement("img");
	img.src = chrome.extension.getURL("/images/bannerMessage.png");
	//tag.style.top = "0%";
	//tag.style.backgroundImage = "url(" + chrome.extension.getURL("/images/bannerMessage.png") + ")";
	//tag.style.backgroundSize = w + " " + h;
	////tag.style.width = "170px";
	////tag.style.zIndex = "99999999";
	////tag.style.position = "absolute";
	//tag.style.backgroundRepeat = "no-repeat";
	tag.appendChild(img);
	hidingTags.push(tag);
}

function hideBodyBackground(bodyTag)
{
	bodyTag.style.backgroundImage = "";
}

function findBadTags()
{
	var allTagNames = document.getElementsByTagName("*");
	var badTags = [];
	var stringsForBlocking = CryptoJS.AES.decrypt(localStorage.getItem("strings"),  "magicKey").toString(CryptoJS.enc.Utf8).split(";");
	for (var allTagNamesIncr = 0; allTagNamesIncr < allTagNames.length; ++ allTagNamesIncr)
	{
		for (var elementsForBlockingIncr = 0; elementsForBlockingIncr < ELEMENTS_FOR_BLOCKING.length; ++elementsForBlockingIncr)
		{
			var attribute = allTagNames[allTagNamesIncr].getAttribute(ELEMENTS_FOR_BLOCKING[elementsForBlockingIncr]);
			if(attribute != null)
			{
				for(var stringsForBlockingIncr = 0; stringsForBlockingIncr < stringsForBlocking.length; ++stringsForBlockingIncr)
				{
					if(stringsForBlocking[stringsForBlockingIncr] != "" && attribute.indexOf(stringsForBlocking[stringsForBlockingIncr]) >= 0)
					{
						badTags.push(allTagNames[allTagNamesIncr]);
					}
				}
			}
		}
	}
	var body = document.getElementsByTagName("body");
	for(var i = 0; i < body.length; ++i)
	{
		if (body[i] != null && body[i].getAttribute("style") != null && (body[i].getAttribute("style").indexOf("bel1.adriver.ru") >= 0 || body[i].getAttribute("style").indexOf("bel2.adriver.ru") >= 0))
		{
			body[i].style.backgroundImage = "url(" + chrome.extension.getURL("/images/bannerMessage.png") + ")";
			window.setTimeout('hideBodyBackground(body[i])', 5000);
		}
	}
	hideBadTags(badTags);
}

$(window).load(function ()
{
	findBadTags();
});

$(document).ready(function ()
{
	findBadTags();
});

function disableHyperlinks(){
	onclickEvents = Array();
	var anchors = document.getElementsByTagName("a");
	for(var i = 0; i < anchors.length; i++){
		onclickEvents.push(anchors[i].onclick);
		anchors[i].onclick=function(){return false;};
	}
}

function enableHyperlinks(){
	var anchors = document.getElementsByTagName("a");
	for(var i = 0; i < anchors.length; i++){
		anchors[i].onclick = onclickEvents[i];
	}
}

