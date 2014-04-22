var geturl=window.location.toString();
var FriendUrl="http://zc2.ayakashi.zynga.com/app.php?_c=friend";
var battleUrl="http://zc2.ayakashi.zynga.com/app.php?_c=battle";
var battlehref = [];
//var zid = [];
var parIn = 0;
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
//					zid = battlehref[94]+battlehref[95]+battlehref[96]+battlehref[97]+battlehref[98]+battlehref[99]+battlehref[100]+battlehref[101]+battlehref[102]+battlehref[103]+battlehref[104];
					zid += battlehref[i];
					}
					alert(zid);
				//	chrome.runtime.sendMessage(zid);
				}
			})
		}
	},4000);
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

