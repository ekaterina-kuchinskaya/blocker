var links = JSON.parse(localStorage.getItem('links'));
if(links == null)
{
	links = [];
}
var submit = document.getElementById('addlink');

submit.onclick = function ()
{
//	var newlinkinput = document.getElementById('link');
//	var newlink = newlinkinput.value;
//	links.push(newlink);
//	localStorage.setItem('links', JSON.stringify(links));
//	alert("Error");
};
