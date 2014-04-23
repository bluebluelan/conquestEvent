var geturl=window.location.toString();
var FriendUrl="http://zc2.ayakashi.zynga.com/app.php?_c=friend";
var battleUrl="http://zc2.ayakashi.zynga.com/app.php?_c=battle";
var battlehref = [];
//var zid = [];
var parIn = 0;
var friendZid = [];
var ii=0
//alert(zid[1]);
//alert(geturl);
	setTimeout(function(){
		if (geturl==battleUrl){
			$("div.status").children().children(".defense-kiai").next("dd").each(function(){
				parIn = parseInt($(this).text(),10);
			//	alert($(this).parents("a").prop("href"));
				if(parIn<300){
			//		alert(parIn);
					var zid = [];
					battlehref=$(this).parents("a").prop("href");
					for(var i=94;i<=104;i++){
					zid += battlehref[i];
					}
					alert(zid);
				//	chrome.runtime.sendMessage(zid);
				}
			});
		}
	},4000);
	$(".button.mini").mouseover(function(){
		if (geturl==FriendUrl){
			$("button[data-zid]").each(function(){
				friendZid[ii] =$(this).attr('data-zid')+"";
			//	alert(friendZid);
				ii++;
		       // chrome.runtime.sendMessage(friendZid);
			});
			chrome.runtime.sendMessage(friendZid);
		}
	});

/*
$(function(){
	$("#btn-guild-l").click(function(){
	alert("QQQQ");
	});
});
*/

