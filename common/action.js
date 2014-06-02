var geturl=window.location.toString();
var FriendUrl="http://zc2.ayakashi.zynga.com/app.php?_c=friend";
var battleUrl="http://zc2.ayakashi.zynga.com/app.php?_c=battle";
var AcceptUrl="http://zc2.ayakashi.zynga.com/app.php?_c=webMessageCenter";
var ExtraUrl="http://zc2.ayakashi.zynga.com/app.php?_c=extra_quest_event_adventure&action=proceed&island_id=1&area_id=41&stage_id=201&evid=54&newest=1";
var battlehref = [];
//var zid = [];
var parIn = 0;
var friendZid = [];
var ii=0
var item_id;
var encounterEvent = [];
var isBattlelist;
var isExtraEvent;
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

	$(".button.mini").mouseover(function(){
		alert("poke");
		$("button[data-zid]").each(function(){
			alert(ii);
			friendZid[ii] =$(this).attr('data-zid')+"";
			ii++;
		});
		chrome.runtime.sendMessage(type:"poke",data:friendZid);
	});

isBattlelist=geturl.match(/battle_list/);
isExtraEvent=geturl.match(/extra_quest_event_adventure/);
setTimeout(function(){
	if(isBattlelist=="battle_list"){
		alert($("a#update-battle-list").text());
		searchenemybyspirit();
	}
	else if (geturl==AcceptUrl){
		$("ul#events-27006").children().each(function(){
			$("a.button.sub.accept.ok").click();
			chrome.runtime.sendMessage($(this).attr("eid"));
		});
	}
	else if (geturl=ExtraUrl){
		encounterEvent=$("pre").text().match(/battle_id\=(\d{6})/);
		chrome.runtime.sendMessage({type: "ExtraEventBoss",data: encounterEvent[1]});
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