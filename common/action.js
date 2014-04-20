var geturl=window.location.toString();
//alert(geturl);
if (geturl=="http://zc2.ayakashi.zynga.com/app.php?_c=friend"){
	var zid=$("button").attr("data-zid");
	//alert(zid);
	chrome.runtime.sendMessage(zid);
}
/*
$(function(){
	$("#btn-guild-l").click(function(){
	alert("QQQQ");
	});
});
*/

