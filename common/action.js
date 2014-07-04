var geturl=window.location.toString();
var FriendUrl="http://zc2.ayakashi.zynga.com/app.php?_c=friend";
var battleUrl="http://zc2.ayakashi.zynga.com/app.php?_c=battle";
var AcceptUrl="http://zc2.ayakashi.zynga.com/app.php?_c=webMessageCenter";
var ExtraUrl="http://zc2.ayakashi.zynga.com/app.php?_c=extra_quest_event_adventure&action=proceed&island_id=1&area_id=41&stage_id=201&evid=54&newest=1";
var DesUrl="http://zc2.ayakashi.zynga.com/app.php?_c=deposit"
var ConUrl="http://yasushi.me/ayabeta/conquest.html"
var battlehref = [];
//var zid = [];
var parIn = 0;
var friendZid = [];
var ii=0
var item_id= [];
var encounterEvent = [];
var isBattlelist;
var isExtraEvent;
var isDeposit =[];
var isCaptcha =[];
var itemid = [];
var acceptlist = [];
var leaderDetail = [];
var monsterDetail = [];
var flag = 0;
////////////////////////////////////Variable/////////////////////////////////
	/*$(".remaining-time").children().css("color","#d84676");
	$(".ribbon-title-top-right").css("color","#d84676").css("font-size","17px").text("可立刻交換");
	$(".silver-apple").next().text("99999");
	$(".gold-apple").next().text("99999");*/
////////////////////////////////////////////////////////////////////////////	
//alert($("a#update-battle-list").text());
	/*$(".button.mini").mouseover(function(){
		if (geturl==FriendUrl){
			$("button[data-zid]").each(function(){
				friendZid[ii] =$(this).attr('data-zid')+"";
			//	alert(friendZid);
				ii++;
		       // chrome.runtime.sendMessage(friendZid);
			});
			chrome.runtime.sendMessage(friendZid);
		}
	});*/
isBattlelist=geturl.match(/battle_list/);
isExtraEvent=geturl.match(/extra_quest_event_adventure/);
isDeposit=geturl.match(/deposit/);
isWebMsg=geturl.match(/webMessageCenter/);
if(geturl.match(/login_bonus/)=="login_bonus"){
//	chrome.runtime.sendMessage({type: "goTodeposit"});
	/*setTimeout(function(){
		if(geturl.match(/Deposit/)=="Deposit"){
			chrome.runtime.sendMessage({type: "deposit",data: $("#category-head").next().attr("eid")});
		}	
			// auto accept friend--
	},3000);*/
}
//setInterval(function(){
setTimeout(function(){
	if(isBattlelist=="battle_list"&&flag == 0){
	//	alert($("a#update-battle-list").text());
		searchenemybyspirit();
		console.log(flag);
	}
	else if (geturl==AcceptUrl){
		$("ul#events-27006").children().each(function(){
			acceptlist.push($(this).attr("eid"));
		});
		console.log(acceptlist);
		chrome.runtime.sendMessage({type: "FriendAccept",data: acceptlist});
	}
	/*else if (geturl=ExtraUrl){
		encounterEvent=$("pre").text().match(/battle_id\=(\d{6})/);
		chrome.runtime.sendMessage({type: "ExtraEventBoss",data: encounterEvent[1]});
	}*/
//	console.log(geturl);
	else if (geturl==ConUrl){
		searchenemybyspirit();
	}
	else{
		console.log("HHH")
	}
			// auto accept friend--
},3000);
//////////////////////////////function//////////////////////
function searchenemybyspirit(){
	i=1
	monsterDetail.push($("div.ctlt").next().children().children(".iad").text())
	monsterDetail.push($("div.ctlt").next().children().children(".ia").text())
	monsterDetail.push($("div.ctlt").next().children().children(".id").text())
	monsterDetail.push($("div.ctlt").next().children().children(".ic").text())
	console.log(monsterDetail)
	$("div#ctlm").children().each(function(){
		if (i<10){
			monsterDetail.push($(this).children().children(".iad").text())
			monsterDetail.push($(this).children().children(".ia").text())
			monsterDetail.push($(this).children().children(".id").text())
			monsterDetail.push($(this).children().children(".ic").text())
			i+=1
		}
	})
	console.log(monsterDetail);
	console.log("QQQQQ")
	chrome.runtime.sendMessage({type:"SEBS",data:monsterDetail});
	console.log("Action Finish");
};
//	}
//	console.log(monsterDetail);
	//console.log(monsterDetail.length);
//	chrome.runtime.sendMessage({type:"Conquest", data: leaderDetail,monsterDetail})
	/*
	children().children(".defense-kiai").next("dd").each(function(){
				parIn = parseInt($(this).text(),10);
			//	alert($(this).parents("a").prop("href"));
				if(parIn<40){
			//		alert(parIn);
					var zid = [];
					battlehref=$(this).parents("a").prop("href");
					zid=battlehref.match(/target_user_id\=(\d{11})/);
					console.log(zid[1]);
					flag=1;
					chrome.runtime.sendMessage({type:"SEBS", data: zid[1]});
				}
			});
*/