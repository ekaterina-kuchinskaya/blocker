var links = JSON.parse(localStorage.getItem('links'));

function activateBlock()
{
    blockById();
}

function deleteById(badTags)
{
    if(badTags != null)
    {
        for (var i = 0; i < badTags.length; ++i)
        {
            document.getElementById(badTags[i]).remove();
        }
    }
}

function blockById()
{
    var allTagNames = document.getElementsByTagName("*");
    var allIds;
    var badTags = [];
    allIds = getAllIds(allTagNames);
    for (var i = 0; i < allIds.length; ++i)
    {
        if (/baner/.test(allIds[i]))
        {
          badTags.push(allIds[i]);
        }
    }
    deleteById(badTags);
}

function getAllIds(allTagNames)
{
    var allIds = [];
    for(var i = 0; i < allTagNames.length; ++i)
    {
        if(allTagNames[i].id)
        {
            allIds.push(allTagNames[i].id);
        }
    }
    return(allIds);
}
