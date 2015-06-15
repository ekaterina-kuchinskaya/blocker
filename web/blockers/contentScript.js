var hidingTags = [];
function hideBadTags(badTags)
{
    for (var i=0; i<badTags.length; ++i)
    {
		badTags[i].innerHTML='';
		setTagStyle(badTags[i]);
    }
}

function deleteBanners(tags)
{
	for(var i = 0; i < tags.length; ++i)
	{
		tags[i].parentNode.removeChild(tags[i]);
	}
	hidingTags = [];
}

function setTagStyle(tag)
{
	var w = ( tag.width === undefined ? "100%" :  tag.width);
	var h = ( tag.height === undefined ? "100%" :  tag.height);
	if(w.indexOf("%") >= 0 || w == "")
	{
		w = "100% !important";
	}
	if(h.indexOf("%") >= 0 || h == "")
	{
		h = w;
	}
	if(w.indexOf("%") == -1 && w.indexOf("px") ==-1)
	{
		w = w + "px";
	}
	if(h.indexOf("%") == -1 && h.indexOf("px") ==-1)
	{
		h = h + "px";
	}
	tag.removeAttribute("class");
	tag.removeAttribute("src");
	tag.removeAttribute("style");
	tag.removeAttribute("background-image");

	var newDiv = document.createElement("div");
	tag.style.top = "0%";
	tag.style.backgroundImage = "url(" + chrome.extension.getURL("/images/bannerMessage.png") + ")";
	tag.style.backgroundSize = "100%";
	tag.style.backgroundRepeat = "no-repeat";
	hidingTags.push(tag);
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
