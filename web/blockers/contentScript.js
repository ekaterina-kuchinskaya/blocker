//window.stop();
//$('script').empty();

//chrome.extension.sendRequest({command: "call"}, hideTags());
deleteTags();
function deleteTags() {
    //var script = document.getElementsByTagName('script');
    //for (var i = 0; i < script.length; ++i)
    //{
        //script[i].parentNode.removeChild(script[i]);
    //}

    var iframe = document.getElementsByTagName('iframe');
    hideIframeTags(iframe);
    for (var i = 0; i < iframe.length; ++i)
    {
        iframe[i].parentNode.removeChild(iframe[i]);
    }

    var noindex = document.getElementsByTagName('noindex');
    hideNoindexTags(noindex);
    for (var i = 0; i < noindex.length; ++i)
    {
        noindex[i].parentNode.removeChild(noindex[i]);
    }
}

function getAllChildren(tag)
{
    var children=tag.childNodes;
    var allChildren=new Array;
    allChildren.push(children);
    while(children)
    {
        //children=
    }
}

function setTagStyle(tag)
{
    var tagChildren = tag.childNodes;
    var currentTag = tag;
    for (var i = 0; i < tagChildren.length; i++)
    {
        currentTag = tagChildren[i];
        if (/url/.test(currentTag.style.background))
        {
            currentTag.style.setProperty("background", "url() white", "important");
        }
        if (/url/.test(currentTag.style.backgroundImage))
        {
            currentTag.style.backgroundImage="";
            currentTag.style.background="white";
        }
        if (/img/.test(currentTag))
        {
            currentTag.src="";
            currentTag.style.background="white";
        }
        if(/src/.test(currentTag))
        {
            currentTag.src="";
            currentTag.style.background="white";
        }
    }
    //tag.style.setProperty("background", "white", "important");
    //tag.style.setProperty("z-index", "20", "important");

    //tag.style.setProperty("display", "none", "important");
    //tag.style.setProperty("visibility", "hidden", "important");
    //tag.style.setProperty("opacity", "0", "important");
    //var w = ( tag.width === undefined ? -1 :  tag.width);
    //var h = ( tag.height === undefined ? -1 :  tag.height);
    //tag.style.setProperty("background-position", w + "px " + h + "px");
    //tag.setAttribute("width", 0);
    //tag.setAttribute("height", 0);
}

function hideIframeTags(iframe)
{

    //chrome.extension.sendRequest({tags: "iframe"}, deleteTags);

    for (var i=0; i<iframe.length; ++i)
    {
        var children=iframe[i].childNodes;
        for(var j=0; j<children.length; ++i)
        {
            iframe[i].removeChild(children[i]);
        }
        setTagStyle(iframe[i]);
    }
}

function hideNoindexTags(noindex) {

    //chrome.extension.sendRequest({tags: "iframe"}, deleteTags);

    for (var i=0; i<noindex.length; ++i)
    {
        var children=noindex[i].childNodes;
        for(var j=0; j<children.length; ++i)
        {
            noindex[i].removeChild(children[i]);
            noindex[i].appendChild('div');
        }
        setTagStyle(noindex[i].childNodes[0]);
    }

    var noindex = document.getElementsByTagName('noindex');
    for (var k = 0; k < noindex.length; ++k)
    {
        //noindex[i].parentNode.removeChild(noindex[i]);
        setTagStyle(noindex[k]);
    }
}

window.onload = function(){setTimeout(deleteTags, 0);};
