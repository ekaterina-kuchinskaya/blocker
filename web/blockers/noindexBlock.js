var tagsForBlock = {
    NOINDEX: 'noindex'
};

function activateBlock()
{
    blockByTagName();
}

function blockByTagName()
{
    var badTags = document.getElementsByTagName(tagsForBlock.NOINDEX);
    deleteByTagName(badTags);
}

function deleteByTagName(badTags)
{
    if(badTags != null)
    {
        for (var i = 0; i < badTags.length; ++i)
        {
            badTags[i].parentNode.removeChild(badTags[i]);
            //badTags[i].style.setProperty("display", "none", "important");
            //badTags[i].style.setProperty("visibility", "hidden", "important");
            //badTags[i].style.setProperty("opacity", "0", "important");
            //var w = ( badTags[i].width === undefined ? -1 :  badTags[i].width);
            //var h = ( badTags[i].height === undefined ? -1 :  badTags[i].height);
            //badTags[i].style.setProperty("background-position", w + "px " + h + "px");
            //badTags[i].setAttribute("width", 0);
            //badTags[i].setAttribute("height", 0);
        }
    }
}
