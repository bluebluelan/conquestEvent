var geturl=window.location.toString();
var FriendUrl="http://zc2.ayakashi.zynga.com/app.php?_c=friend";
var battleUrl="http://zc2.ayakashi.zynga.com/app.php?_c=battle";
var AcceptUrl="http://zc2.ayakashi.zynga.com/app.php?_c=webMessageCenter";
var battlehref = [];
//var zid = [];
var parIn = 0;
var friendZid = [];
var ii=0
var item_id;
var isBattlelist;
////////////////////////////////////Variable/////////////////////////////////
	/*$(".remaining-time").children().css("color","#d84676");
	$(".ribbon-title-top-right").css("color","#d84676").css("font-size","17px").text("可立刻交換");
	$(".silver-apple").next().text("99999");
	$(".gold-apple").next().text("99999");*/
////////////////////////////////////////////////////////////////////////////	
//alert(ii);
//alert(geturl);
//alert(zid[1]);
//alert($("a#update-battle-list").text());
/*$(function(){
	$("button.touch-button").click(function(){
		alert("poke");
		$("button[data-zid]").each(function(){
			alert(ii);
			friendZid[ii] =$(this).attr('data-zid')+"";
			ii++;
		});
		chrome.runtime.sendMessage(type:"poke",data:friendZid);
	});
});*/
isBattlelist=geturl.match(/battle_list/);
setInterval(function(){
	if (isBattlelist=="battle_list"){
		//alert($("a#update-battle-list").text());
	//	searchenemybyspirit();
	}
	// auto accept friend++
	if(geturl==AcceptUrl){
		$("ul#events-27006").children().each(function(){
	//		$("a.button.sub.accept.ok").click();
	//		chrome.runtime.sendMessage($(this).attr("eid"));
		});
	}
		// auto accept friend--
},1000);
//////////////////////////////function//////////////////////
function searchenemybyspirit(){
//	item_id=geturl.match(/target_item_id\=(\d+)/);
	$("div.status").children().children(".defense-kiai").next("dd").each(function(){
				parIn = parseInt($(this).text(),10);
			//	alert($(this).parents("a").prop("href"));
				if(parIn<70){
			//		alert(parIn);
					var zid = [];
					battlehref=$(this).parents("a").prop("href");
					zid=battlehref.match(/target_user_id\=(\d{11})/);
					//alert(zid[1]);
					chrome.runtime.sendMessage({type: "SEBS",data: zid[1]/*,item: item_id[1]*/});
				}
			});

};