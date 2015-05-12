var tagsForBlock = {
    IFRAME: 'iframe'
};

function activateBlock()
{
    blockByTagName();
}

function blockByTagName()
{
    var badTags = document.getElementsByTagName(tagsForBlock.IFRAME);
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
