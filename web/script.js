var links = JSON.parse(localStorage.getItem('links'));

var badTags = document.getElementsByTagName('noindex');
deleteDangerousTags(badTags);
badTags = document.getElementsByTagName('iframe');
deleteDangerousTags(badTags);

function deleteDangerousTags(badTags)
{
    if(badTags != null)
    {
        for (var i = 0; i < badTags.length; ++i)
        {
            badTags[i].parentNode.removeChild(badTags[i]);
        }
    }
}