var tagsForBlock = {
    NOINDEX: 'noindex'
};

document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        activateBlock();
    }
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
        }
    }
}