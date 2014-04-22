var geturl=window.location.toString();
var FriendUrl="http://zc2.ayakashi.zynga.com/app.php?_c=friend";
var zid = ["0","1","2","3","0","1","2","3"];
//alert(zid[1]);
//alert(geturl);
	setTimeout(function(){
		alert($("div.status").children().children(".defense-kiai").next("dd").text());
	},5000);
	$(".button.mini").mouseover(function(){
		if (geturl==FriendUrl){
		zid[0]=$("button").attr("data-zid");
		alert(zid[1]);
		alert(zid);
	//	var qq=zid.length;//zid 11 numbers
		chrome.runtime.sendMessage(zid);
		}
	});

/*
$(function(){
	$("#btn-guild-l").click(function(){
	alert("QQQQ");
	});
});
*/

