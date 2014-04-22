var geturl=window.location.toString();
var FriendUrl="http://zc2.ayakashi.zynga.com/app.php?_c=friend";
var battleUrl="http://zc2.ayakashi.zynga.com/app.php?_c=battle";
var zid = [];
var parIn = 0;
//alert(zid[1]);
//alert(geturl);
	setTimeout(function(){
		if (geturl==battleUrl){
			$("div.status").children().children(".defense-kiai").next("dd").each(function(){
				parIn = parseInt($(this).text(),10);
			//	alert($(this).parents("a").prop("href"));
				if(parIn<300){
					alert(parIn);
					zid=$(this).parents("a").prop("href");
					chrome.runtime.sendMessage(zid);
				}
			})
		}
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

